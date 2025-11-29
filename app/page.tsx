'use client';

import { useState, useEffect } from 'react';
import { questsByLocation, Quest, getAllQuests } from '@/lib/questData';

export default function Home() {
  const [completedQuests, setCompletedQuests] = useState<Set<string>>(new Set());
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showRewards, setShowRewards] = useState<{ [key: string]: boolean }>({});

  // Load completed quests from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('completedQuests');
    if (saved) {
      setCompletedQuests(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save completed quests to localStorage
  useEffect(() => {
    localStorage.setItem('completedQuests', JSON.stringify([...completedQuests]));
  }, [completedQuests]);

  const toggleQuest = (questId: string) => {
    setCompletedQuests(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questId)) {
        newSet.delete(questId);
      } else {
        newSet.add(questId);
      }
      return newSet;
    });
  };

  const toggleRewards = (questId: string) => {
    setShowRewards(prev => ({
      ...prev,
      [questId]: !prev[questId]
    }));
  };

  const allQuests = getAllQuests();
  const filteredQuests = allQuests.filter(quest => {
    const matchesLocation = selectedLocation === 'all' || 
      Object.entries(questsByLocation).some(([loc, quests]) => 
        quests.includes(quest) && (selectedLocation === 'all' || loc === selectedLocation)
      );
    const matchesCategory = selectedCategory === 'all' || quest.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      quest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quest.objectives.some(obj => obj.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesLocation && matchesCategory && matchesSearch;
  });

  const totalQuests = allQuests.length;
  const completedCount = completedQuests.size;
  const progressPercentage = (completedCount / totalQuests) * 100;

  const locations = ['all', ...Object.keys(questsByLocation)];
  const categories = ['all', 'combat', 'exploration', 'collection', 'repair', 'delivery', 'other'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-sm border-b border-orange-500/30 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-orange-400 mb-2">ARC Raiders Quest Tracker</h1>
          <p className="text-gray-400">Track your progress through all 63 quests</p>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-300">Progress: {completedCount} / {totalQuests} quests</span>
              <span className="text-orange-400 font-semibold">{progressPercentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-orange-500 to-orange-400 h-3 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search quests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>
                    {loc === 'all' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Quest List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="space-y-3">
          {filteredQuests.map((quest) => (
            <div
              key={quest.id}
              className={`bg-gray-800/70 backdrop-blur-sm rounded-lg border transition-all duration-200 ${
                completedQuests.has(quest.id)
                  ? 'border-green-500/50 bg-green-900/20'
                  : 'border-gray-700 hover:border-orange-500/50'
              }`}
            >
              <div className="p-4">
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <div className="flex-shrink-0 pt-1">
                    <button
                      onClick={() => toggleQuest(quest.id)}
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                        completedQuests.has(quest.id)
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-500 hover:border-orange-400'
                      }`}
                    >
                      {completedQuests.has(quest.id) && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Quest Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className={`text-xl font-semibold ${
                        completedQuests.has(quest.id) ? 'text-green-400 line-through' : 'text-orange-300'
                      }`}>
                        {quest.name}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        quest.category === 'combat' ? 'bg-red-500/20 text-red-300' :
                        quest.category === 'exploration' ? 'bg-blue-500/20 text-blue-300' :
                        quest.category === 'collection' ? 'bg-purple-500/20 text-purple-300' :
                        quest.category === 'repair' ? 'bg-yellow-500/20 text-yellow-300' :
                        quest.category === 'delivery' ? 'bg-green-500/20 text-green-300' :
                        'bg-gray-500/20 text-gray-300'
                      }`}>
                        {quest.category}
                      </span>
                    </div>

                    <p className="text-sm text-gray-400 mb-3">📍 {quest.location}</p>

                    {/* Objectives */}
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Objectives:</h4>
                      <ul className="space-y-1">
                        {quest.objectives.map((obj, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-orange-400 mt-1">•</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Rewards Toggle */}
                    <div className="flex gap-3 items-center flex-wrap">
                      <button
                        onClick={() => toggleRewards(quest.id)}
                        className="text-sm text-orange-400 hover:text-orange-300 font-medium flex items-center gap-1"
                      >
                        {showRewards[quest.id] ? '▼' : '▶'} Rewards
                      </button>
                    </div>

                    {showRewards[quest.id] && (
                      <div className="mt-2 p-3 bg-gray-900/50 rounded border border-gray-700">
                        <h5 className="text-sm font-semibold text-green-400 mb-2">Rewards:</h5>
                        <ul className="space-y-1">
                          {quest.rewards.map((reward, idx) => (
                            <li key={idx} className="text-sm text-green-300 flex items-center gap-2">
                              <span className="text-green-500">✓</span>
                              {reward}
                            </li>
                          ))}
                        </ul>
                        
                        {quest.guideSteps && quest.guideSteps.length > 0 && (
                          <>
                            <h5 className="text-sm font-semibold text-blue-400 mt-3 mb-2">Guide Steps:</h5>
                            <ol className="space-y-1 ml-4">
                              {quest.guideSteps.map((step, idx) => (
                                <li key={idx} className="text-sm text-gray-300 list-decimal">
                                  {step}
                                </li>
                              ))}
                            </ol>
                          </>
                        )}
                        
                        {quest.tips && quest.tips.length > 0 && (
                          <>
                            <h5 className="text-sm font-semibold text-yellow-400 mt-3 mb-2">Tips:</h5>
                            <ul className="space-y-1">
                              {quest.tips.map((tip, idx) => (
                                <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                  <span className="text-yellow-400 mt-0.5">💡</span>
                                  <span>{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredQuests.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No quests found matching your filters.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-gray-700 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>ARC Raiders Quest Tracker v1.3.6 • {totalQuests} Total Quests</p>
          <p className="mt-2">Data sources: <a href="https://arcraiders.wiki/wiki/Quests" className="text-orange-400 hover:text-orange-300" target="_blank" rel="noopener noreferrer">ARC Raiders Wiki</a> • <a href="https://patchcrazy.co.uk/all-arc-raiders-quest-list-rewards-objectives-and-locations/" className="text-orange-400 hover:text-orange-300 ml-2" target="_blank" rel="noopener noreferrer">PatchCrazy.co.uk</a></p>
          <p className="mt-1 text-gray-500 text-xs">Last updated: November 29, 2025</p>
        </div>
      </footer>
    </div>
  );
}
