export interface Quest {
  id: string;
  name: string;
  location: string;
  objectives: string[];
  rewards: string[];
  category: 'combat' | 'exploration' | 'collection' | 'repair' | 'delivery' | 'other';
  guideUrl?: string;
  guideSteps?: string[];
  tips?: string[];
}

export const questsByLocation: Record<string, Quest[]> = {
  'Dam Battlegrounds': [
    {
      id: 'db-1',
      name: 'Picking Up The Pieces',
      location: 'Hydroponic Dome Complex, Dam Battlegrounds',
      objectives: [
        'Visit any area on your map with a loot category icon',
        'Loot 3 containers'
      ],
      rewards: ['1x Rattler III', '80x Medium Ammo'],
      category: 'exploration',
      guideSteps: [
        'Look for areas marked with loot category icons on your map',
        'Navigate to the Hydroponic Dome Complex or Dam Battlegrounds',
        'Find and open 3 containers in the area',
        'Containers can be found in buildings, rooms, and outdoor areas'
      ],
      tips: [
        'This is a beginner-friendly quest - any containers count',
        'Look for supply boxes, crates, and lockers',
        'Complete this early for a solid starting weapon'
      ]
    },
    {
      id: 'db-2',
      name: 'Clearer Skies',
      location: 'Dam Battlegrounds',
      objectives: [
        'Destroy 3 ARC enemies',
        'Get 3 ARC Alloy for Shani'
      ],
      rewards: ['3x Sterilized Bandage', '1x Light Shield', 'Black Backpack Cosmetic (Hiker Color)'],
      category: 'combat',
      guideSteps: [
        'Deploy to Dam Battlegrounds',
        'Look for any ARC enemies (Wasps, Hornets, Fireballs, etc.)',
        'Destroy 3 ARC enemies using any weapons',
        'Collect ARC Alloy from the destroyed enemies',
        'Return to Shani to deliver the 3 ARC Alloy'
      ],
      tips: [
        'ARC enemies drop alloy automatically when destroyed',
        'Smaller enemies like Wasps are easier targets for beginners',
        'Use cover to avoid taking damage from ARC weapons'
      ]
    },
    {
      id: 'db-3',
      name: 'Trash Into Treasure',
      location: 'Research and Admin Building, Dam Battlegrounds',
      objectives: [
        'Obtain 6 Wires',
        'Obtain 1 Battery'
      ],
      rewards: ['1x Tactical MK.1', '3x Adrenaline Shot'],
      category: 'collection',
      guideSteps: [
        'Navigate to the Research and Admin Building in Dam Battlegrounds',
        'Search containers, desks, and shelves for Wires',
        'Look for electronics and electrical equipment for Batteries',
        'Check multiple floors and rooms to find all 6 Wires and 1 Battery',
        'Wires are commonly found in electrical boxes and toolboxes'
      ],
      tips: [
        'Wires are common crafting materials found in most buildings',
        'Batteries are often in electronics, radios, and flashlights',
        'Check the upper floors for less looted areas'
      ]
    },
    {
      id: 'db-5',
      name: 'The Trifecta',
      location: 'Testing Annex building, Dam Battlegrounds',
      objectives: [
        'Destroy a Hornet',
        'Get a Hornet Driver for Shani',
        'Destroy a Snitch',
        'Get a Snitch Scanner for Shani',
        'Destroy a Wasp',
        'Get a Wasp Driver for Shani'
      ],
      rewards: ['Skin Orange Camo (Origin Colour)', '1x Raider Hatch Key', '2x Defibrillator', '1x Dam Control Tower Key'],
      category: 'combat',
      guideSteps: [
        'Head to the Testing Annex building in Dam Battlegrounds',
        'Hunt down and destroy a Hornet (flying ARC enemy)',
        'Loot the Hornet Driver component from its remains',
        'Find and destroy a Snitch (small scanning drone)',
        'Collect the Snitch Scanner component',
        'Locate and destroy a Wasp (small flying enemy)',
        'Collect the Wasp Driver and return all items to Shani'
      ],
      tips: [
        'These enemies spawn around the Testing Annex area',
        'Components automatically drop when enemies are destroyed',
        'Hornets are tougher - bring good weapons and healing',
        'Complete all three in one round for efficiency'
      ]
    },
    {
      id: 'db-4',
      name: 'Safe Passage',
      location: 'Research and Administration Building, Dam Battlegrounds',
      objectives: [
        'Destroy 2 ARC enemies using any explosive grenade'
      ],
      rewards: ['5x Li\'l Smoke Grenade', '3x Shrapnel Grenade', '3x Barricade Kit'],
      category: 'combat',
      guideSteps: [
        'Equip explosive grenades (Shrapnel, Blaze, or Heavy Fuze)',
        'Find ARC enemies near the Research and Administration Building',
        'Throw grenades at ARC enemies to destroy them',
        'Make sure the final blow comes from the grenade explosion',
        'Repeat for 2 total kills with explosive grenades'
      ],
      tips: [
        'Weaken enemies with gunfire first, then finish with grenade',
        'Stationary enemies like Turrets are easy grenade targets',
        'You can craft grenades or find them in supply containers'
      ]
    },
    {
      id: 'db-6',
      name: 'What Goes Around',
      location: 'Any',
      objectives: [
        'Destroy any ARC using a Fireball Burner'
      ],
      rewards: ['Cobalt (Junior Color)', '3x Blaze Grenade', '2x Noisemaker', '5x Blue Light Stick'],
      category: 'combat',
      guideSteps: [
        'Obtain a Fireball Burner weapon (dropped by destroyed Fireball enemies)',
        'Equip the Fireball Burner in your weapon slot',
        'Deploy to any map and find any ARC enemy',
        'Use the Fireball Burner to destroy the enemy',
        'Return to claim your rewards'
      ],
      tips: [
        'Fireball Burners are dropped by Fireball ARC enemies',
        'Any ARC enemy type works - choose weaker ones like Wasps',
        'The Fireball Burner uses special ammo, so conserve shots',
        'Cobalt Junior Color cosmetic is a nice reward'
      ]
    },
    {
      id: 'db-7',
      name: 'Greasing Her Palms',
      location: 'Water Treatment Control building, Dam Battlegrounds',
      objectives: [
        'On Spaceport, scope out the rocket thrusters outside the Rocket Assembly',
        'On Dam Battlegrounds, visit the Locked Room in the Water Treatment Control building',
        'On Buried City, visit the barricaded area on floor 6 of the Space Travel Building'
      ],
      rewards: ['Lure Grenade Blueprint', 'Speaker Component', 'Electrical Components'],
      category: 'exploration',
      guideSteps: [
        'Deploy to Spaceport first and navigate to the Rocket Assembly area',
        'Find and inspect the rocket thrusters outside',
        'Deploy to Dam Battlegrounds and find the Water Treatment Control building',
        'Locate the Locked Room (may need a key)',
        'Deploy to Buried City and go to the Space Travel Building',
        'Climb to floor 6 and find the barricaded area'
      ],
      tips: [
        'This quest requires visiting all three maps',
        'Quest objectives are done in Spaceport → Dam → Buried City order',
        'Mark locations on your map for future reference',
        'You may need keys or tools to access some areas'
      ]
    },
    {
      id: 'db-8',
      name: 'What We Left Behind',
      location: 'South Swamp Outpost, Dam Battlegrounds',
      objectives: [
        'On Buried City, search 2 containers in the Raider Camp beneath the Parking Garage',
        'On Dam Battlegrounds, search for anything significant in the South Swamp Outpost',
        'On Spaceport, search for anything significant in Bilguun\'s Hideout, next to the Container Storage'
      ],
      rewards: ['1x Muzzle Brake II', '1x Vertical Grip II', '1x Stable Stock II'],
      category: 'exploration',
      guideSteps: [
        'Deploy to Buried City first',
        'Navigate to the Parking Garage and find the Raider Camp beneath it',
        'Search 2 containers in the camp area',
        'Deploy to Dam Battlegrounds',
        'Go to the South Swamp Outpost and search for quest items',
        'Deploy to Spaceport',
        'Find Container Storage area and locate Bilguun\'s Hideout next to it',
        'Search the hideout for significant items'
      ],
      tips: [
        'This quest spans all three maps',
        'Make note of locations for future quests',
        'Look for highlighted interact prompts in each location'
      ]
    },
    {
      id: 'db-9',
      name: 'Broken Monument',
      location: 'Scrapyard, Dam Battlegrounds',
      objectives: [
        'Reach the hallowed grounds by the Scrap Yard',
        'Search for a compass near the broken-down vehicles',
        'Search for the video tape near the cylindrical containers',
        'Search for the old field rations in the Raider camp',
        'Deliver the First Wave Tape to Tian Wen',
        'Deliver First Wave Compass to Tian Wen',
        'Deliver First Wave Rations to Tian Wen'
      ],
      rewards: ['1x Arpeggio I', '1x Compensator II', '80x Medium Ammo'],
      category: 'delivery',
      guideSteps: [
        'Navigate to the Scrapyard area in Dam Battlegrounds',
        'Find the hallowed grounds landmark',
        'Search around broken-down vehicles for the First Wave Compass',
        'Look near cylindrical containers for the First Wave Tape',
        'Check the Raider camp for First Wave Rations',
        'Return to Tian Wen and deliver all three items'
      ],
      tips: [
        'Explore thoroughly - items can be easy to miss',
        'The Scrapyard is full of old vehicles and debris',
        'Collect all three items before leaving the area'
      ]
    },
    {
      id: 'db-10',
      name: 'Straight Record',
      location: 'Victory Ridge, Dam Battlegrounds',
      objectives: [
        'Reach Victory Ridge',
        'Find the old EMP trap',
        'Disable the first power switch',
        'Disable the second power switch',
        'Disable the third power switch',
        'Shutdown the EMP trap'
      ],
      rewards: ['5x Medium Gun Parts', '3x Advanced Mechanical Components'],
      category: 'repair',
      guideSteps: [
        'Navigate to Victory Ridge in Dam Battlegrounds',
        'Locate the old EMP trap device',
        'Find and disable the first power switch nearby',
        'Locate and disable the second power switch',
        'Find and disable the third power switch',
        'Return to the EMP trap and shut it down completely'
      ],
      tips: [
        'The switches are spread around the EMP trap location',
        'Look for electrical boxes or control panels',
        'Clear any ARC enemies first for safety'
      ]
    },
    {
      id: 'db-11',
      name: 'Keeping the Memory',
      location: 'Formical Hills, Dam Battlegrounds',
      objectives: [
        'Reach the wreckage in the Formicai Hills',
        'Search for the missing helmet',
        'Return the helmet to the memorial'
      ],
      rewards: ['5x Simple Gun Parts', '5x Duct Tape', '5x Magnet'],
      category: 'exploration',
      guideSteps: [
        'Travel to Formicai Hills in Dam Battlegrounds',
        'Find the wreckage site (look for crashed vehicles or debris)',
        'Search the area around the wreckage for the helmet',
        'Locate the memorial site in the area',
        'Place the helmet at the memorial to complete'
      ],
      tips: [
        'The helmet should be near crashed vehicles',
        'The memorial is marked with a distinct structure',
        'This is a peaceful quest - no combat required'
      ]
    },
    {
      id: 'db-12',
      name: 'Echoes of Victory Ridge',
      location: 'Victory Ridge, Dam Battlegrounds',
      objectives: [
        'Reach Victory Ridge',
        'Retrieve the battle plans from the hideout under the broken highway',
        'Deliver Major Aiva\'s Patch to Celeste'
      ],
      rewards: ['6x Crude Explosives', '2x Processor', '1x Music Box'],
      category: 'delivery',
      guideSteps: [
        'Deploy to Dam Battlegrounds and head to Victory Ridge',
        'Look for the broken highway structure',
        'Find the hideout underneath the highway',
        'Search for and collect the battle plans',
        'Also locate Major Aiva\'s Patch in the area',
        'Return to Speranza and deliver the patch to Celeste'
      ],
      tips: [
        'The hideout entrance may be obscured by debris',
        'Both items are in the same general area',
        'Watch for ARC patrols near Victory Ridge'
      ]
    },
    {
      id: 'db-13',
      name: 'A Symbol of Unification',
      location: 'Formicai Outpost, Dam Battlegrounds',
      objectives: [
        'Reach the Formicai Outpost in Dam Battlegrounds',
        'Locate the flag at the Formicai Outpost',
        'Hoist the flag on the small platform overlooking the red lake'
      ],
      rewards: ['Aviator (Outfit)', '3x Mod Components', '5x Duct Tape'],
      category: 'other',
      guideSteps: [
        'Navigate to the Formicai Outpost in Dam Battlegrounds',
        'Search buildings and structures for the flag item',
        'Once you have the flag, look for a small platform',
        'The platform should overlook the distinctive red lake',
        'Interact with the flagpole to hoist the flag'
      ],
      tips: [
        'Rewards include a full Aviator outfit cosmetic',
        'The red lake is a visual landmark - use it to find the platform',
        'This is a memorable location worth visiting'
      ]
    },
    {
      id: 'db-14',
      name: 'Celeste\'s Journals',
      location: 'South Swamp Outpost, Red Lake, Dam Battlegrounds',
      objectives: [
        'Retrieve Celeste\'s Journals from the South Swamp Outpost',
        'Retrieve Celeste\'s Journals from the northern outpost overlooking the Red Lakes',
        'Deliver 2 Journals to Celeste'
      ],
      rewards: ['1x Magnetic Accelerator', '3x Heavy Gun Parts', '1x Exodus Modules'],
      category: 'delivery',
      guideSteps: [
        'Deploy to Dam Battlegrounds',
        'First, head to the South Swamp Outpost',
        'Search the outpost buildings for the first journal',
        'Next, travel to the northern outpost near Red Lakes',
        'Retrieve the second journal from this location',
        'Return to Speranza and deliver both journals to Celeste'
      ],
      tips: [
        'Mark both outposts on your map',
        'Journals are usually in sleeping quarters or desk areas',
        'High-value rewards make this quest worthwhile'
      ]
    },
    {
      id: 'db-15',
      name: 'The Major\'s Footlocker',
      location: 'Ruby Residences, Dam Battlegrounds',
      objectives: [
        'Search for Major Aiva\'s mementos in the apartments northwest of The Dam',
        'Deliver Major Aiva\'s Mementos to Tian Wen'
      ],
      rewards: ['1x Hullcracker Blueprint'],
      category: 'delivery',
      guideSteps: [
        'Navigate to the Ruby Residences (apartments northwest of The Dam)',
        'Search through the apartment rooms',
        'Look for a footlocker or storage container',
        'Collect Major Aiva\'s Mementos from inside',
        'Return to Speranza and deliver the mementos to Tian Wen'
      ],
      tips: [
        'Ruby Residences are marked on the Dam Battlegrounds map',
        'Check bedrooms and personal quarters',
        'The Hullcracker Blueprint is a valuable reward'
      ]
    },
    {
      id: 'db-16',
      name: 'Out of the Shadows',
      location: 'Testing Annex Building, Dam Battlegrounds',
      objectives: [
        'Destroy a Rocketeer',
        'Obtain a Rocketeer Driver'
      ],
      rewards: ['3x Surge Shield Recharger', '2x Wolfpack'],
      category: 'combat',
      guideSteps: [
        'Head to the Testing Annex Building in Dam Battlegrounds',
        'Locate a Rocketeer - a powerful ARC enemy with rocket weapons',
        'Engage the Rocketeer with strong weapons',
        'Use cover to avoid rocket attacks',
        'Destroy the Rocketeer and loot the Rocketeer Driver component'
      ],
      tips: [
        'Rocketeers are dangerous - bring shields and healing items',
        'Keep moving to dodge rocket projectiles',
        'Long-range weapons work well against Rocketeers',
        'The Driver drops automatically upon destruction'
      ]
    },
    {
      id: 'db-17',
      name: 'Eyes in the Sky',
      location: 'Control Tower, Dam Battlegrounds',
      objectives: [
        'On Dam Battlegrounds, install a LiDAR Scanner at the top of the Control Tower',
        'On Spaceport, install a LiDAR Scanner at the Communications Tower',
        'On Buried City, install a LiDAR Scanner on top of the Galleria sign'
      ],
      rewards: ['1x Vita Spray', '5x Yellow Light Stick'],
      category: 'repair',
      guideSteps: [
        'Obtain 3 LiDAR Scanners (check quest requirements or craft them)',
        'Deploy to Dam Battlegrounds and climb to the top of the Control Tower',
        'Install the first LiDAR Scanner at the marked location',
        'Deploy to Spaceport and find the Communications Tower',
        'Install the second scanner at the tower',
        'Deploy to Buried City and locate the Galleria sign',
        'Climb to the top and install the third scanner'
      ],
      tips: [
        'Bring all 3 scanners with you to avoid multiple trips',
        'Watch for fall damage when climbing tall structures',
        'Clear ARC enemies before installation for safety'
      ]
    },
    {
      id: 'db-18',
      name: 'Our Presence Up There',
      location: 'Pattern House, Dam Battlegrounds',
      objectives: [
        'Visit the Pattern House in The Dam',
        'Find and interact with the Power Switch',
        'Complete the antenna installation on the roof'
      ],
      rewards: ['Buried City Town Hall Key', 'Raider Hatch Key', '3x Jolt Mine'],
      category: 'repair',
      guideSteps: [
        'Navigate to the Pattern House in The Dam area',
        'Enter the building and search for the Power Switch',
        'Activate the Power Switch to restore power',
        'Find the access point to reach the roof',
        'Complete the antenna installation on the rooftop',
        'Interact with the antenna to finish the quest'
      ],
      tips: [
        'Look for electrical panels or circuit breakers for the power switch',
        'The roof access may be stairs, ladder, or exterior climb',
        'Great rewards including two valuable keys'
      ]
    },
    {
      id: 'db-19',
      name: 'A Balanced Harvest',
      location: 'Research & Administration building, Dam Battlegrounds',
      objectives: [
        'Go to the Research & Administration building',
        'Locate Lab 1 on the upper floor above the reception'
      ],
      rewards: ['3x Advanced Mechanical Components', '3x Medium Gun Parts', '10x Steel Spring'],
      category: 'exploration',
      guideSteps: [
        'Deploy to Dam Battlegrounds',
        'Navigate to the Research & Administration building',
        'Enter through the main entrance and find the reception area',
        'Locate stairs or elevator to reach the upper floor',
        'Find Lab 1 - look for room labels or signs',
        'Interact with or search Lab 1 to complete the objective'
      ],
      tips: [
        'The building may have multiple floors to explore',
        'Lab 1 should be clearly marked with signage',
        'Excellent crafting materials as rewards'
      ]
    },
    {
      id: 'db-20',
      name: 'Untended Garden',
      location: 'Hydroponic Dome Complex, Dam Battlegrounds',
      objectives: [
        'In one round: Go to the Hydroponic Dome Complex',
        'Access the data archive in one of the domes',
        'Upload the data to the computer terminal in any Field Depot'
      ],
      rewards: ['3x Advanced Mechanical Components', '3x Heavy Gun Parts', '5x Canister'],
      category: 'other',
      guideSteps: [
        'IMPORTANT: Complete all steps in a single raid without extracting',
        'Deploy to Dam Battlegrounds',
        'Travel to the Hydroponic Dome Complex',
        'Search the domes for a data archive terminal',
        'Interact with the archive to download/obtain the data',
        'Navigate to any Field Depot on the map',
        'Find the computer terminal at the Field Depot',
        'Upload the data to complete the quest before extracting'
      ],
      tips: [
        'Must be done in one continuous raid - do not extract between steps',
        'Plan your route from Hydroponic Dome to nearest Field Depot',
        'Bring supplies for a longer raid'
      ]
    },
    {
      id: 'db-21',
      name: 'Water Troubles',
      location: 'Red Lake Berm, Dam Battlegrounds',
      objectives: [
        'In One Round Locate the Flood Access Tunnel under the Red Lake Balcony',
        'Find the intake to the District\'s Water Supply',
        'Sample the water'
      ],
      rewards: ['3x Mechanical Components', '3x Simple Gun Parts', '3x Steel Spring'],
      category: 'exploration',
      guideSteps: [
        'IMPORTANT: Complete all steps in one raid without extracting',
        'Navigate to the Red Lake Berm area in Dam Battlegrounds',
        'Find the Red Lake Balcony landmark',
        'Look for the Flood Access Tunnel entrance underneath or near the balcony',
        'Enter the tunnel and follow it to the water supply intake',
        'Locate the water sampling point',
        'Interact to take a water sample and complete the quest'
      ],
      tips: [
        'Must complete all objectives in single raid',
        'The tunnel entrance may be partially hidden',
        'Bring a light source for dark tunnel areas',
        'Watch for environmental hazards in the tunnel'
      ]
    },
    {
      id: 'db-22',
      name: 'Into the Fray',
      location: 'Research & Administration Building, Dam Battlegrounds',
      objectives: [
        'Destroy a Leaper',
        'Obtain a Leaper Pulse Unit'
      ],
      rewards: ['Outfit (Radio Renegade)', 'Backpack Charm (Burger Boy)', '1x Vulcano III', '40x Shotgun Ammo'],
      category: 'combat',
      guideSteps: [
        'Navigate to the Research & Administration Building',
        'Search for a Leaper - an agile ARC enemy that jumps around',
        'Engage the Leaper with automatic weapons for better tracking',
        'Destroy the Leaper and collect the Pulse Unit',
        'Leapers are fast - lead your shots'
      ],
      tips: [
        'Leapers are highly mobile - use weapons with good fire rate',
        'Shotguns work well at close range when they jump near you',
        'Try to predict their jump patterns',
        'Great cosmetic rewards make this quest worthwhile'
      ]
    },
    {
      id: 'db-23',
      name: 'Source of the Contamination',
      location: 'Water Treatment Plant, Dam Battlegrounds',
      objectives: [
        'Reach the Water Treatment Building in The Dam',
        'Search for the Flood Spill Intake near the Swamp',
        'Investigate any suspicious objects'
      ],
      rewards: ['5x Steel Spring', '5x Duct Tape', '1x Mod Components'],
      category: 'exploration',
      guideSteps: [
        'Deploy to Dam Battlegrounds and head to The Dam area',
        'Find the Water Treatment Building',
        'Exit toward the Swamp area',
        'Locate the Flood Spill Intake structure',
        'Search the area for suspicious or unusual objects',
        'Interact with the object to investigate and complete'
      ],
      tips: [
        'The contamination source will be visually distinct',
        'Check near pipes, tanks, or discharge points',
        'This quest connects to the Water Troubles storyline'
      ]
    },
    {
      id: 'db-24',
      name: 'Flickering Threat',
      location: 'North Complex Elevator, Dam Battlegrounds',
      objectives: [
        'Enter the Power Generation Complex by The Dam',
        'Find the Generator Room',
        'Repair the Generator',
        'Find the Ventilation Shaft',
        'Enable the power via the power switch underneath the stairs'
      ],
      rewards: ['Radio Renegade (Outfit - Helmet)', '5x Medium Gun Parts', '3x Advanced Mechanical Components'],
      category: 'repair',
      guideSteps: [
        'Navigate to the Power Generation Complex near The Dam',
        'Enter the building and locate the Generator Room',
        'Interact with the generator to repair it (may need components)',
        'Find the Ventilation Shaft elsewhere in the building',
        'Look for stairs in the area',
        'Go underneath the stairs to find the power switch',
        'Activate the power switch to complete the quest'
      ],
      tips: [
        'Bring repair materials if required',
        'The power switch is easily missed under stairs',
        'Includes Radio Renegade helmet cosmetic'
      ]
    },
    {
      id: 'db-25',
      name: 'A New Type of Plant',
      location: 'Baron Husk, Dam Battlegrounds',
      objectives: [
        'Search for the new plant near the Baron Husk in the Old Battleground',
        'Deliver the Possibly Toxic Plant to Lance'
      ],
      rewards: ['1x Vita Shot', '5x Antiseptic'],
      category: 'delivery',
      guideSteps: [
        'Deploy to Dam Battlegrounds',
        'Navigate to the Old Battleground area',
        'Find the Baron Husk landmark (large destroyed ARC unit)',
        'Search the ground around the Baron Husk for unusual plants',
        'Collect the Possibly Toxic Plant',
        'Return to Speranza and deliver the plant to Lance'
      ],
      tips: [
        'The plant should stand out with unique coloring',
        'Baron Husk is a major landmark - hard to miss',
        'Medical rewards useful for survival'
      ]
    }
  ],
  'Spaceport': [
    {
      id: 'sp-1',
      name: 'A Lay of the Land',
      location: 'Jiangsu Warehouse, Spaceport',
      objectives: [
        'Reach the Jiangsu Warehouse',
        'Find the shipping notes in the foreman\'s office',
        'Locate the scanners on the upper floor of Control Tower A6',
        'Deliver 1 LiDAR Scanners to Shani'
      ],
      rewards: ['1x Dam Testing Annex Key', '3x Zipline', '2x Smoke Grenade'],
      category: 'delivery',
      guideSteps: [
        'Deploy to Spaceport and locate the Jiangsu Warehouse',
        'Find the foreman\'s office inside the warehouse',
        'Search the office for shipping notes on desks or filing cabinets',
        'Travel to Control Tower A6',
        'Climb to the upper floor of the tower',
        'Locate and collect the LiDAR Scanner',
        'Return to Shani to deliver the scanner'
      ],
      tips: [
        'The foreman\'s office is usually on the ground floor',
        'Control Tower A6 is a tall structure - look for stairs or elevators',
        'The Dam Testing Annex Key reward is valuable for future quests'
      ]
    },
    {
      id: 'sp-2',
      name: 'Switching the Supply',
      location: 'Launch towers, Spaceport',
      objectives: [
        'Find the tunnels under the Spaceport',
        'Find and turn the valve in the tunnels under Spaceport'
      ],
      rewards: ['Radio Renegade (Outfit - Blue)', 'Spaceport Trench Tower Key', '3x Synthesized Fuel'],
      category: 'repair',
      guideSteps: [
        'Deploy to Spaceport and look for tunnel entrances',
        'Tunnels are typically found near launch towers or underground access points',
        'Enter the tunnel system',
        'Navigate through the tunnels searching for a valve',
        'Once located, interact with the valve to turn it',
        'Return to surface to complete the quest'
      ],
      tips: [
        'Excellent rewards including full Blue Radio Renegade outfit',
        'Bring a light source for tunnel exploration',
        'The valve should be clearly marked or larger than normal pipes'
      ]
    },
    {
      id: 'sp-3',
      name: 'Prescriptions of the Past',
      location: 'Departure Building, Spaceport',
      objectives: [
        'Visit the Departure Building in Spaceport',
        'Find the Medical Exam Room inside the Departure Building',
        'Search for the records'
      ],
      rewards: ['1x Heavy Shield', '1x Tactical Mk. 3 (Healing)', '3x Adrenaline Shot'],
      category: 'exploration',
      guideSteps: [
        'Deploy to Spaceport',
        'Navigate to the Departure Building',
        'Enter and search for signage indicating medical facilities',
        'Locate the Medical Exam Room',
        'Search desks, filing cabinets, and shelves for medical records',
        'Collect the records to complete the objective'
      ],
      tips: [
        'Medical exam rooms typically have examination tables and equipment',
        'Records are often in filing cabinets or on desks',
        'Great defensive rewards with Heavy Shield'
      ]
    },
    {
      id: 'sp-4',
      name: 'Power Out',
      location: 'Electrical Substation, Spaceport',
      objectives: [
        'Find the Electrical Substation south of the Spaceport, next to the Checkpoint',
        'Find any sign of the missing engineer',
        'Install the fuse',
        'Restore the power'
      ],
      rewards: ['Bag (Radio Renegade Variant)', '5x Wires', '5x Explosive Compound', '5x Oil'],
      category: 'repair',
      guideSteps: [
        'Deploy to Spaceport',
        'Head south toward the Checkpoint area',
        'Locate the Electrical Substation building',
        'Search for signs of the missing engineer (notes, equipment, etc.)',
        'Find the fuse box or panel',
        'Install the fuse in the appropriate slot',
        'Activate the power switch to restore power'
      ],
      tips: [
        'You may need to bring a fuse or find one nearby',
        'Look for the engineer\'s tools or ID as clues',
        'Includes Radio Renegade bag cosmetic'
      ]
    },
    {
      id: 'sp-5',
      name: 'Turnabout',
      location: 'North Trench Tower, Spaceport',
      objectives: [
        'Go to the North Trench Tower',
        'Locate and upload the blackmail files to Celeste'
      ],
      rewards: ['2x Heavy Gun Parts', '2x Medium Gun Parts'],
      category: 'other',
      guideSteps: [
        'Deploy to Spaceport',
        'Navigate to the North Trench Tower',
        'Enter the tower and search for a computer or data storage',
        'Locate the blackmail files (may be in a specific room or terminal)',
        'Interact with the terminal to upload the files to Celeste',
        'Quest completes after successful upload'
      ],
      tips: [
        'Look for offices or security rooms with computers',
        'The files may be marked as quest items',
        'Useful gun parts for weapon crafting'
      ]
    },
    {
      id: 'sp-6',
      name: 'Lost in Transmission',
      location: 'Control Tower A6, Spaceport',
      objectives: [
        'In one round: Visit Control Tower A6',
        'Reach the top of Control Tower A6'
      ],
      rewards: ['1x Snap Hook'],
      category: 'exploration',
      guideSteps: [
        'IMPORTANT: Must complete in one raid without extracting',
        'Deploy to Spaceport',
        'Navigate to Control Tower A6',
        'Find the stairs or elevator inside',
        'Climb to the very top floor of the tower',
        'Reach the topmost point to complete the objective'
      ],
      tips: [
        'Must be done without leaving the raid',
        'Tall tower - be prepared for a climb',
        'Watch for fall damage on the way down',
        'Snap Hook is useful for traversal'
      ]
    }
  ],
  'Buried City': [
    {
      id: 'bc-1',
      name: 'Doctor\'s Orders',
      location: 'Pharmacy, Buried City',
      objectives: [
        'Obtain 2 Antiseptic',
        'Obtain 1 Syringe',
        'Obtain 1 Durable Cloth',
        'Obtain 1 Great Mullein'
      ],
      rewards: ['3x Adrenaline Shot', '3x Sterilized Bandage', '1x Surge Shield Recharger'],
      category: 'collection',
      guideSteps: [
        'Navigate to any Pharmacy in Buried City',
        'Search medical containers and shelves for Antiseptic (need 2)',
        'Look in medical supply boxes for a Syringe',
        'Check cabinets and storage for Durable Cloth',
        'Search for Great Mullein (medicinal plant) in the pharmacy or nearby'
      ],
      tips: [
        'Pharmacies have the highest concentration of medical supplies',
        'Antiseptic is common in first aid kits',
        'Great Mullein might be found near herbal medicine sections',
        'Check multiple rooms if you can\'t find everything in one area'
      ]
    },
    {
      id: 'bc-2',
      name: 'Medical Merchandise',
      location: 'Hospital, Buried City',
      objectives: [
        'On Spaceport, search 2 containers in the Departure Building\'s exam rooms',
        'Search 3 containers in the Hospital in Buried City',
        'On Dam Battlegrounds, search 2 containers in the Research & Administration building\'s medical room'
      ],
      rewards: ['1x Banana Backpack Charm (Cosmetic)', '3x Defibrillator', '2x Vita Shot'],
      category: 'collection',
      guideSteps: [
        'Deploy to Spaceport first',
        'Go to Departure Building and find the exam rooms',
        'Search 2 containers in the exam rooms',
        'Deploy to Buried City',
        'Navigate to the Hospital and search 3 containers',
        'Deploy to Dam Battlegrounds',
        'Go to Research & Administration building',
        'Find the medical room and search 2 containers'
      ],
      tips: [
        'Spans all three maps - plan accordingly',
        'Medical containers usually have red cross markings',
        'Includes fun Banana backpack charm cosmetic'
      ]
    },
    {
      id: 'bc-3',
      name: 'A Reveal in Ruins',
      location: 'Pharmacy, Buried City',
      objectives: [
        'Search for an ESR Analyzer inside any pharmacy in Buried City',
        'Deliver the ESR Analyzer to Lance'
      ],
      rewards: ['1x Tactical Mk. 3 (Healing)', '1x Surge Shield Recharger'],
      category: 'delivery',
      guideSteps: [
        'Deploy to Buried City',
        'Find any Pharmacy location on the map',
        'Search inside the pharmacy for the ESR Analyzer',
        'Check shelves, counters, and storage areas',
        'Extract with the analyzer',
        'Return to Speranza and deliver it to Lance'
      ],
      tips: [
        'ESR Analyzer is medical equipment - check lab areas',
        'Any pharmacy works - choose the closest one',
        'Good healing item rewards'
      ]
    },
    {
      id: 'bc-4',
      name: 'Marked for Death',
      location: 'Su Durante Warehouses, Buried City',
      objectives: [
        'Reach the Su Durante Warehouses in the Outskirts in Buried City',
        'Search for Tian Wen\'s cache near the Warehouses',
        'Follow the clues'
      ],
      rewards: ['Shotgun Choke II', 'Angled Grip II'],
      category: 'exploration',
      guideSteps: [
        'Deploy to Buried City',
        'Navigate to the Outskirts area',
        'Locate the Su Durante Warehouses',
        'Search around the warehouses for Tian Wen\'s cache',
        'Find and follow any clues left behind'
      ],
      tips: [
        'Look for quest markers or highlighted objects',
        'Great weapon attachments as rewards',
        'Check around the exterior and interior of warehouses'
      ]
    },
    {
      id: 'bc-5',
      name: 'Market Correction',
      location: 'Marano Station, Buried City',
      objectives: [
        'In One Round Locate the cache near Marano Station',
        'Sabotage the cache'
      ],
      rewards: ['1x Silencer II', '1x Extended Light Mag I', '1x Compensator I'],
      category: 'exploration',
      guideSteps: [
        'IMPORTANT: Complete in one raid without extracting',
        'Deploy to Buried City',
        'Navigate to Marano Station',
        'Search the area around the station for a hidden cache',
        'Once found, sabotage the cache (interact with it)',
        'Quest completes after sabotage'
      ],
      tips: [
        'Must be done in single raid',
        'Cache may be hidden behind objects or in corners',
        'Check alleys and side areas near the station',
        'Excellent weapon mod rewards'
      ]
    },
    {
      id: 'bc-6',
      name: 'Eyes on the Prize',
      location: 'Old Town, Buried City',
      objectives: [
        'Find the secluded roof terrace south-west of the Southern Station, look for blue tarps',
        'Rewire the solar panel using 3 Wires'
      ],
      rewards: ['1x Extended Shotgun Mag II', '1x Extended Medium Mag II'],
      category: 'repair',
      guideSteps: [
        'Obtain 3 Wires before starting',
        'Deploy to Buried City, Old Town area',
        'Navigate south-west of the Southern Station',
        'Look for blue tarps on rooftops - visual landmark',
        'Climb to the secluded roof terrace',
        'Find the solar panel',
        'Use 3 Wires to rewire the panel'
      ],
      tips: [
        'Blue tarps make the location easier to spot',
        'Bring 3 Wires with you to save time',
        'Extended magazines are valuable rewards'
      ]
    },
    {
      id: 'bc-7',
      name: 'Industrial Espionage',
      location: 'Industrial Zone, Buried City',
      objectives: [
        'Find Tian Wen\'s weapon cache near the Gas Station in the Outskirts',
        'Deliver the Burletta to the rival weapon cache',
        'Plant a bug on the weapon cache'
      ],
      rewards: ['Burletta Blueprint', '3x Mechanical Components', '3x Simple Gun Parts'],
      category: 'delivery',
      guideSteps: [
        'Deploy to Buried City, Industrial Zone',
        'Navigate to the Outskirts area',
        'Find the Gas Station landmark',
        'Locate Tian Wen\'s weapon cache near the station',
        'Retrieve the Burletta weapon from the cache',
        'Find the rival weapon cache location',
        'Deliver the Burletta to the rival cache',
        'Plant the bug device on the cache to complete'
      ],
      tips: [
        'The bug may be given to you or need to be crafted',
        'Burletta Blueprint is a valuable reward',
        'Be stealthy to avoid detection by rivals'
      ]
    },
    {
      id: 'bc-8',
      name: 'Unexpected Initiative',
      location: 'Industrial area, Buried City',
      objectives: [
        'Reach the Grandioso Apartments in Buried City',
        'Search for Fertilizer on the rooftop of the Grandioso Apartments',
        'Reach Piazza Roma in Buried City',
        'Search for a Water Pump in the broken rooftop gardens at Piazza Roma',
        'Deliver a Water Pump to Tian Wen',
        'Deliver Fertilizer to Tian Wen'
      ],
      rewards: ['1x Il Toro I', '40x Shotgun Ammo', '1x Shotgun Choke II'],
      category: 'delivery',
      guideSteps: [
        'Deploy to Buried City',
        'Navigate to the Grandioso Apartments',
        'Climb to the rooftop of the apartments',
        'Search for and collect Fertilizer on the roof',
        'Travel to Piazza Roma',
        'Find the broken rooftop gardens',
        'Search for and collect the Water Pump',
        'Extract and return to Speranza',
        'Deliver both items to Tian Wen'
      ],
      tips: [
        'Both items are on rooftops - be prepared to climb',
        'Can collect both in one raid',
        'Il Toro shotgun is a solid reward'
      ]
    },
    {
      id: 'bc-9',
      name: 'Communication Hideout',
      location: 'Old Town, Buried City',
      objectives: [
        'Reach the Red Tower in Old Town',
        'Find missing battery cell',
        'Install the battery cell in the Generator',
        'Enable the power on the Generator',
        'Boot the antenna terminal near the Red Tower'
      ],
      rewards: ['Aviator (Outfit - Crimson Racer)', '1x Anvil III', '40x Heavy Ammo'],
      category: 'repair',
      guideSteps: [
        'Navigate to the Red Tower in Old Town, Buried City',
        'Search the surrounding area for a battery cell (check nearby buildings)',
        'Return to the Red Tower and locate the Generator',
        'Interact with the Generator to install the battery cell',
        'Flip the power switch on the Generator',
        'Find the antenna terminal nearby and interact to boot it up'
      ],
      tips: [
        'The Red Tower is a distinctive landmark in Old Town',
        'Battery cells are often in electrical rooms or storage areas',
        'The generator and antenna are close to each other',
        'Anvil III is a powerful weapon reward'
      ]
    },
    {
      id: 'bc-10',
      name: 'After Rain Comes',
      location: 'Grandioso Apartments, Buried City',
      objectives: [
        'Find the flooded solar panels nearby the Grandioso Apartments',
        'Repair the solar panels using 5 Wires and 2 Batteries'
      ],
      rewards: ['5x Blue Light Stick', '3x Antiseptic', '5x Durable Cloth'],
      category: 'repair',
      guideSteps: [
        'Obtain 5 Wires and 2 Batteries before starting',
        'Deploy to Buried City',
        'Navigate to the Grandioso Apartments',
        'Search the nearby area for flooded solar panels',
        'Locate the damaged solar panel installation',
        'Use the 5 Wires and 2 Batteries to repair the panels'
      ],
      tips: [
        'Bring materials with you to complete in one visit',
        'Flooded areas may be low-lying or near water damage',
        'Useful survival supplies as rewards'
      ]
    },
    {
      id: 'bc-11',
      name: 'The Root of the Matter',
      location: 'Research Building, Buried City',
      objectives: [
        'Go to the Research Building',
        'Search for the seed vault in the "room with a great view"',
        'Deliver the Experimental Seed Sample to Celeste'
      ],
      rewards: ['Succulent (Charm)', '1,000 Raider Coins', '3x Advanced Mechanical Components', '3x Heavy Gun Parts', '3x Canister'],
      category: 'delivery',
      guideSteps: [
        'Deploy to Buried City',
        'Navigate to the Research Building',
        'Look for a room with large windows or high elevation - "great view"',
        'This could be an upper floor or corner office with panoramic windows',
        'Search for the seed vault in that room',
        'Collect the Experimental Seed Sample',
        'Return to Speranza and deliver to Celeste'
      ],
      tips: [
        '"Room with a great view" hints at upper floors with windows',
        'Check observation rooms or executive offices',
        'Excellent rewards including 1,000 coins'
      ]
    },
    {
      id: 'bc-12',
      name: 'A Warm Place to Rest',
      location: 'Abandoned Highway, Buried City',
      objectives: [
        'Locate the Abandoned Highway Camp',
        'Search for any signs of survivors',
        'Follow the red markers',
        'Inspect the grave'
      ],
      rewards: ['Radio Renegade (Outfit - Goggles)', '3x Noisemaker', '5x Blue Light Stick', '1x Rosary'],
      category: 'exploration',
      guideSteps: [
        'Deploy to Buried City',
        'Navigate to the Abandoned Highway area',
        'Locate the camp site on or near the highway',
        'Search the camp for signs of survivors (personal items, notes, etc.)',
        'Look for red markers - follow them sequentially',
        'The red markers will lead you to a grave',
        'Interact with the grave to complete the quest'
      ],
      tips: [
        'Red markers are visual guides - follow them carefully',
        'This is a somber story quest about fallen survivors',
        'Radio Renegade Goggles are a nice cosmetic reward'
      ]
    },
    {
      id: 'bc-13',
      name: 'Espresso',
      location: 'Plaza Rosa, Buried City',
      objectives: [
        'Find an espresso machine to salvage for spare parts',
        'Get the Espresso Machine Parts for Apollo'
      ],
      rewards: ['1x Coffee Pot', '3x Adrenaline Shot'],
      category: 'collection'
    },
    {
      id: 'bc-14',
      name: 'Life of a Pharmacist',
      location: 'Pharmacy, Buried City',
      objectives: [
        'Find the Arbusto Farmacia by the collapsed highway',
        'Document the pharmacist\'s hobbies',
        'Document the pharmacist\'s family',
        'Document the pharmacist\'s taste',
        'Document the pharmacist\'s skills'
      ],
      rewards: ['1x Defibrillator', '1x Surge Shield Recharger', '3x Sterilized Bandage'],
      category: 'other',
      guideSteps: [
        'Deploy to Buried City',
        'Find the collapsed highway landmark',
        'Locate Arbusto Farmacia pharmacy near the highway',
        'Search for personal items relating to hobbies (sports equipment, books, etc.)',
        'Find family photos or documents',
        'Look for items showing taste (music, art, decorations)',
        'Find certificates or tools showing professional skills',
        'Interact with each item type to document'
      ],
      tips: [
        'This is a narrative quest - explore thoroughly',
        'Check living quarters, office, and storage areas',
        'Each category needs at least one item documented'
      ]
    },
    {
      id: 'bc-15',
      name: 'Digging Up Dirt',
      location: 'Old Town, Buried City',
      objectives: [
        'Locate the Santa Maria Houses in Old Town',
        'Locate the Dead Drop inside the courtyard'
      ],
      rewards: ['2x Advanced Electrical Components', '4x Speaker Component'],
      category: 'exploration',
      guideSteps: [
        'Deploy to Buried City, Old Town area',
        'Find the Santa Maria Houses residential complex',
        'Enter the building complex',
        'Locate the courtyard (interior or exterior)',
        'Search for a hidden Dead Drop container',
        'Interact with the Dead Drop to complete'
      ],
      tips: [
        'Dead Drops are usually hidden in corners or behind objects',
        'Check planters, benches, or architectural features in courtyards',
        'Advanced electrical components are valuable'
      ]
    },
    {
      id: 'bc-16',
      name: 'Building a Library',
      location: 'Library building, Buried City',
      objectives: [
        'Locate the Library in the City Center',
        'Find 1 romance book',
        'Find 1 detective book',
        'Find 1 adventure book',
        'Deliver 3 books to Apollo'
      ],
      rewards: ['Buried City Town Hall Key'],
      category: 'delivery',
      guideSteps: [
        'Deploy to Buried City',
        'Navigate to the City Center area',
        'Find the Library building',
        'Search bookshelves for a romance genre book',
        'Find a detective/mystery genre book',
        'Locate an adventure genre book',
        'Extract with all 3 books',
        'Return to Speranza and deliver to Apollo'
      ],
      tips: [
        'Books may have genre labels or distinctive covers',
        'Check different sections of the library',
        'Town Hall Key is extremely valuable for accessing locked areas'
      ]
    },
  ],
  'The Blue Gate': [
    {
      id: 'bg-1',
      name: 'A First Foothold',
      location: 'Ridgeline, Blue Gate',
      objectives: [
        'Stabilize the observation deck near the Ridgeline',
        'Enable the comms terminal near the Olive Grove',
        'Rotate the satellite dishes on the church roof, north of the Data Vault',
        'Nail down the roof plates on the Raider structure near Trapper\'s Glade'
      ],
      rewards: ['3x Shrapnel Grenade', '3x Snap Blast Grenade', '3x Heavy Fuze Grenade'],
      category: 'repair',
      guideSteps: [
        'Deploy to The Blue Gate map',
        'Navigate to Ridgeline and stabilize the observation deck',
        'Travel to Olive Grove area and enable the comms terminal',
        'Go north of Data Vault to find the church',
        'Climb to the church roof and rotate the satellite dishes',
        'Head to Trapper\'s Glade and find the Raider structure',
        'Nail down the loose roof plates to complete'
      ],
      tips: [
        'Multiple locations - plan your route efficiently',
        'May need tools or materials for repairs',
        'Great explosive rewards for combat'
      ]
    },
    {
      id: 'bg-2',
      name: 'Reduced to Rubble',
      location: 'Highway Collapse region, The Blue Gate',
      objectives: [
        'Take a photo of the Collapsed Highway',
        'Go to the Broken Earth',
        'Follow the trail of destruction through the Broken Earth',
        'Investigate the unknown ARC machines'
      ],
      rewards: ['1x Zipline', '3x Barricade Kit', '3x Doorblockers'],
      category: 'exploration',
      guideSteps: [
        'Deploy to The Blue Gate',
        'Navigate to the Highway Collapse area',
        'Use photo mode or camera item to take a photo of the collapsed highway',
        'Travel to the Broken Earth region',
        'Follow visible destruction (debris, craters, damaged structures)',
        'The trail will lead to unknown ARC machines',
        'Approach and investigate the machines to complete'
      ],
      tips: [
        'Make sure photo is taken at the correct location',
        'Trail of destruction is visible environmental storytelling',
        'Zipline reward is great for traversal'
      ]
    },
    {
      id: 'bg-3',
      name: 'With a Trace',
      location: 'Barren Clearing, Blue Gate',
      objectives: [
        'Reach the Barren Clearing',
        'Find signs of who brought down the ARC machines',
        'Inspect the Adorned Wreckage',
        'Inspect the communications device'
      ],
      rewards: ['1x Looting Mk. 2', '1x Medium Shield'],
      category: 'exploration',
      guideSteps: [
        'Deploy to The Blue Gate',
        'Navigate to the Barren Clearing area',
        'Search for clues about who destroyed the ARC units',
        'Look for weapons, markings, or other evidence',
        'Find and inspect the Adorned Wreckage (decorated or modified debris)',
        'Locate a communications device nearby',
        'Inspect the device to complete the investigation'
      ],
      tips: [
        'This is a detective-style quest - look carefully',
        'Adorned Wreckage may have unique decorations or paint',
        'Looting Mk. 2 improves loot quality'
      ]
    },
    {
      id: 'bg-4',
      name: 'Bees!',
      location: 'Olive Grove, The Blue Gate',
      objectives: [
        'Reach the Olive Grove in Blue Gate',
        'Search for bee hives around the Olive Grove'
      ],
      rewards: ['1x Advanced Electrical Components', '3x Sensors'],
      category: 'collection',
      guideSteps: [
        'Deploy to The Blue Gate map',
        'Navigate to the Olive Grove area (look for olive trees)',
        'Search around trees and structures for bee hives',
        'Interact with the bee hives to collect items',
        'May need to search multiple hives or return to base'
      ],
      tips: [
        'Bee hives are usually hanging from trees or attached to buildings',
        'The Olive Grove has distinctive vegetation',
        'Advanced Electrical Components are valuable crafting materials',
        'This is a peaceful collection quest - no combat required'
      ]
    },
    {
      id: 'bg-5',
      name: 'Armored Transports',
      location: 'Headhouse, The Blue Gate',
      objectives: [
        'Reach the Checkpoint',
        'Search the Guard huts for a Armored Patrol Key Card',
        'Reach the Traffic Tunnel near the Blue Gate Checkpoint',
        'Find and unlock the rear door of an armored patrol car'
      ],
      rewards: ['Blue Yellow (Aviator Color)', '3x Smoke Grenade', '3x Defibrillator'],
      category: 'exploration'
    }
  ],
  'Stella Montis': [
    {
      id: 'sm-1',
      name: 'Snap and Salvage',
      location: 'Stella Montis',
      objectives: [
        'Take a Photo of any of the Rovers in the Sandbox',
        'Search the papers in the Security Checkpoint room by the Lobby',
        'Deliver a Magnetron to Tian Wen',
        'Deliver a Flow Controller to Tian Wen'
      ],
      rewards: ['1x Burletta III', '1x Silencer II', '1x Extended Light Mag II', '100x Light Ammo'],
      category: 'delivery',
      guideSteps: [
        'Deploy to Stella Montis map',
        'Navigate to the Sandbox area and find the Rovers',
        'Use your camera tool to take a photo of a Rover',
        'Go to the Lobby area and find the Security Checkpoint room',
        'Search the papers in the Security Checkpoint',
        'Collect or find a Magnetron and Flow Controller',
        'Return to Tian Wen and deliver both items'
      ],
      tips: [
        'Rovers are vehicle-like objects in the Sandbox',
        'Make sure the photo captures the Rover clearly',
        'Security Checkpoint is near the main entrance/Lobby',
        'Magnetron and Flow Controller are technical components',
        'Great weapon and ammo rewards'
      ]
    },
    {
      id: 'sm-2',
      name: 'In My Image Quest',
      location: 'Stella Montis',
      objectives: [
        'Deploy into Stella Montis',
        'Find and search 3 Androids'
      ],
      rewards: ['2x Looting Mk. 2', '5x Green Light Stick', '3x Defibrillator'],
      category: 'exploration'
    },
    {
      id: 'sm-3',
      name: 'Cold Storage',
      location: 'Stella Montis',
      objectives: [
        'Search any J Kozma Ventures container',
        'Deliver the Rare Books to Shani'
      ],
      rewards: ['3x Gas Mine', '1x Raider Hatch Key'],
      category: 'delivery'
    }
  ],
  'Multiple Locations': [
    {
      id: 'ml-1',
      name: 'Off The Radar',
      location: 'Field Depot (Dam Battlegrounds, Spaceport, Buried City)',
      objectives: [
        'In one round: Visit a field depot',
        'Repair the antenna on the roof of Field Depot'
      ],
      rewards: ['2x Defibrillator'],
      category: 'repair',
      guideSteps: [
        'Find a Field Depot on any map (marked on map)',
        'Enter the Field Depot building',
        'Find stairs or ladder to access the roof',
        'Locate the damaged antenna on the roof',
        'Interact with the antenna to repair it (may need materials)',
        'Complete all steps in a single round'
      ],
      tips: [
        'Field Depots are safe zones marked on your map',
        'Bring repair materials just in case',
        'The roof is usually accessible from inside the building',
        'Must complete in one round without extracting'
      ]
    },
    {
      id: 'ml-2',
      name: 'A Bad Feeling',
      location: 'Dam Battlegrounds, Spaceport, Buried City',
      objectives: [
        'Find and search any ARC Probe or ARC Courier'
      ],
      rewards: ['10x Metal parts', '5x Steel Spring', '5x Duct Tape'],
      category: 'exploration'
    },
    {
      id: 'ml-3',
      name: 'The Right Tool',
      location: 'Dam Battlegrounds, Spaceport, Buried City',
      objectives: [
        'Destroy a Fireball',
        'Destroy a Hornet',
        'Destroy a Turret'
      ],
      rewards: ['Cheer Emote', '1x Stitcher II', '1x Extended Light Mag I'],
      category: 'combat',
      guideSteps: [
        'Find and destroy a Fireball (ARC enemy with flame attacks)',
        'Hunt down and destroy a Hornet (flying ARC enemy)',
        'Locate and destroy a Turret (stationary defensive unit)',
        'Can complete across multiple rounds and maps',
        'Each enemy type requires different tactics'
      ],
      tips: [
        'Turrets are easiest - they don\'t move',
        'Use cover when fighting Turrets to avoid sustained fire',
        'Hornets fly - use automatic weapons or shotguns',
        'Fireballs are close-range threats, keep distance',
        'Completing this unlocks the Cheer Emote'
      ]
    },
    {
      id: 'ml-4',
      name: 'Hatch Repairs',
      location: 'Raider Hatch (Dam Battlegrounds, Spaceport, Buried City)',
      objectives: [
        'Repair the leaking hydraulic pipes near a Raider Hatch',
        'Search for a hatch key near the Raider hatch'
      ],
      rewards: ['1x Raider Hatch Key', '1x Binoculars'],
      category: 'repair',
      guideSteps: [
        'Locate a Raider Hatch on any map (underground entrance)',
        'Find the leaking hydraulic pipes near the hatch',
        'Interact with the pipes to repair them (may need materials)',
        'Search the immediate area around the hatch',
        'Look for a hatch key in containers or on the ground nearby',
        'Collect the key to complete the quest'
      ],
      tips: [
        'Raider Hatches are marked on your map',
        'Keys are usually within 50 meters of the hatch',
        'Check inside nearby buildings and containers',
        'The key reward lets you access more Raider Hatches',
        'Binoculars are useful for scouting'
      ]
    },
    {
      id: 'ml-5',
      name: 'Down To Earth',
      location: 'Field Depot (Dam Battlegrounds, Spaceport, Buried City)',
      objectives: [
        'In one round: Visit a Field Depot',
        'Deliver a Field Crate to a Supply Station',
        'Collect the reward'
      ],
      rewards: ['1x Combat MK.1', '1x Medium Shield'],
      category: 'delivery'
    },
    {
      id: 'ml-6',
      name: 'A Better Use',
      location: 'Supply Call Station (Dam Battlegrounds, Spaceport, Buried City, Blue Gate)',
      objectives: [
        'Request in a Supply Drop from a Call Station',
        'Loot a Supply Drop'
      ],
      rewards: ['1x Extended Light Mag I', '1x Stable Stock I', '1x Muzzle Brake II'],
      category: 'other'
    },
    {
      id: 'ml-7',
      name: 'Sparks Fly',
      location: 'Dam Battlegrounds, Spaceport, Buried City, Blue Gate',
      objectives: [
        'Destroy a Hornet with a Trigger \'Nade or Snap Blast'
      ],
      rewards: ['1x Trigger Nade Blueprint', '4x Crude Explosives', '2x Processor'],
      category: 'combat'
    },
    {
      id: 'ml-8',
      name: 'Dormant Barons',
      location: 'South Swamp Outpost',
      objectives: [
        'Loot a Baron husk'
      ],
      rewards: ['3x Door Blocker', '3x Li\'l Smoke Grenade'],
      category: 'collection'
    },
    {
      id: 'ml-9',
      name: 'Mixed Signals',
      location: 'Dam Battlegrounds, Spaceport, Buried City',
      objectives: [
        'Destroy an ARC Surveyor',
        'Obtain 1 Surveyor Vault'
      ],
      rewards: ['1x Photoelectric Cloak', '1x Raider Hatch Key'],
      category: 'combat'
    },
    {
      id: 'ml-10',
      name: 'Back on Top',
      location: 'Dam Battlegrounds, The Blue Gate, Spaceport, Buried City',
      objectives: [
        'On Dam Battlegrounds, mark the Pattern House',
        'On The Blue Gate, mark the white lookout tower south of the Warehouse Complex',
        'On Spaceport, mark the South Trench Tower',
        'On Buried City, mark the building with the mural in the Buried Properties'
      ],
      rewards: ['1x Renegade I', '1x Stable Stock III', '80x Medium Ammo'],
      category: 'other'
    },
    {
      id: 'ml-11',
      name: 'Tribute to Toledo',
      location: 'Dam Battlegrounds, The Blue Gate, Spaceport, Buried City',
      objectives: [
        'Get a Power Rod for Celeste'
      ],
      rewards: ['Dam Staff Room Key'],
      category: 'collection'
    }
  ]
};

export const getAllQuests = (): Quest[] => {
  return Object.values(questsByLocation).flat();
};
