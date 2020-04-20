const ITEMS = {
    "bf-sword": {
        "id": "bf-sword",
        "name": "B.F. Sword",
        "description": "+15 damages."
    },
    "chain-vest": {
        "id": "chain-vest",
        "name": "Chain Vest",
        "description": "+25 armor."
    },
    "giants-belt": {
        "id": "giants-belt",
        "name": "Giant's Belt",
        "description": "+200 health."
    },
    "needlessly-large-rod": {
        "id": "needlessly-large-rod",
        "name": "Needlessly Large Rod",
        "description": "+20 spell power."
    },
    "negatron-cloak": {
        "id": "negatron-cloak",
        "name": "Negatron Cloak",
        "description": "+25 magic resistance."
    },
    "recurve-bow": {
        "id": "recurve-bow",
        "name": "Recurve Bow",
        "description": "+20% attack speed."
    },
    "sparring-gloves": {
        "id": "sparring-gloves",
        "name": "Sparring Gloves",
        "description": "+10% critical strike chance and dodge chance."
    },
    "spatula": {
        "id": "spatula",
        "name": "Spatula",
        "description": "It must do something..."
    },
    "tear-of-the-godess": {
        "id": "tear-of-the-godess",
        "name": "Tear of the Godess",
        "description": "+15 mana."
    },
    "deathblade": {
        "id": "deathblade",
        "name": "Deathblade",
        "description": "Contributing to a kill grants +30 Attack Damage for the remainder of combat. This effect can stack any number of times.",
        "recipe": [ "bf-sword", "bf-sword" ]
    },
    "guardian-angel": {
        "id": "guardian-angel",
        "name": "Guardian Angel",
        "description": "Wearer revives with 400 HP.",
        "recipe": [ "bf-sword", "chain-vest" ]
    },
    "zekes-herald": {
        "id": "zekes-herald",
        "name": "Zeke's Herald",
        "description": "When combat begins, the wearer and all allies within 1 hex in the same row gain +30% Attack Speed for the rest of combat.",
        "recipe": [ "bf-sword", "giants-belt" ]
    },
    "hextech-gunblade": {
        "id": "hextech-gunblade",
        "name": "Hextech Gunblade",
        "description": "Heal for 25% of all damage dealt.",
        "recipe": [ "bf-sword", "needlessly-large-rod" ]
    },
    "bloodthirster": {
        "id": "bloodthirster",
        "name": "Bloodthirster",
        "description": "Basic Attacks heal the wearer for 35% of the damage dealt.",
        "recipe": [ "bf-sword", "negatron-cloak" ]
    },
    "giant-slayer": {
        "id": "giant-slayer",
        "name": "Giant Slayer",
        "description": "Attacks deal an additional 12% enemy current Health as Physical Damage.",
        "recipe": [ "bf-sword", "recurve-bow" ]
    },
    "infinity-edge": {
        "id": "infinity-edge",
        "name": "Infinity Edge",
        "description": "100% critical strike damage.",
        "recipe": [ "bf-sword", "sparring-gloves" ]
    },
    "blade-of-the-ruined-king": {
        "id": "blade-of-the-ruined-king",
        "name": "Blade of the Ruined King",
        "description": "Wearer is also a Blademaster.",
        "recipe": [ "bf-sword", "spatula" ]
    },
    "spear-of-shojin": {
        "id": "spear-of-shojin",
        "name": "Spear of Shojin",
        "description": "After casting, wearer gains 18% of its max Mana per attack",
        "recipe": [ "bf-sword", "tear-of-the-godess" ]
    },
    "bramble-vest": {
        "id": "bramble-vest",
        "name": "Bramble Vest",
        "description": "Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal 100 / 140 / 200 magic damage to all nearby enemies (once every 2.5 second maximum). Scales with wearer’s Star Level.",
        "recipe": [ "chain-vest", "chain-vest" ]
    },
    "red-buff": {
        "id": "red-buff",
        "name": "Red Buff",
        "description": "Gains 27% max hp true damage over 10 seconds on hit in addition to its burn. And reducing healing by 50% for the duration of the burn.",
        "recipe": [ "chain-vest", "giants-belt" ]
    },
    "locket-of-the-iron-solari": {
        "id": "locket-of-the-iron-solari",
        "name": "Locket of the Iron Solari",
        "description": "Shields allies within two hexes in the same row for 250 / 275 / 350 damage for 8 seconds (scales with wearer’s Star Level).",
        "recipe": [ "chain-vest", "needlessly-large-rod" ]
    },
    "sword-breaker": {
        "id": "sword-breaker",
        "name": "Sword Breaker",
        "description": "25% chance to disarm for 3 seconds.",
        "recipe": [ "chain-vest", "negatron-cloak" ]
    },
    "titans-resolve": {
        "id": "titans-resolve",
        "name": "Titan's Resolve",
        "description": "When the wearer takes damage or inflicts a critical hit, they gain a 2% stacking damage bonus. Stacks up to 50 times, at which point the wearer gains 25 Armor and Magic Resistance, and increases in size.",
        "recipe": [ "chain-vest", "recurve-bow" ]
    },
    "shroud-of-stillness": {
        "id": "shroud-of-stillness",
        "name": "Shroud of Stillness",
        "description": "When combat begins, shoots a beam straight ahead that delays affected enemies' first spellcast, increasing their max Mana by 40% until they cast.",
        "recipe": [ "chain-vest", "sparring-gloves" ]
    },
    "rebel-medal": {
        "id": "rebel-medal",
        "name": "Rebel Medal",
        "description": "Wearer is also a Rebel.",
        "recipe": [ "chain-vest", "spatula" ]
    },
    "frozen-heart": {
        "id": "frozen-heart",
        "name": "Frozen Heart",
        "description": "Adjacent enemies lose 50% Attack Speed. (Stacking increases the radius of this effect, not the amount of the slow)",
        "recipe": [ "chain-vest", "tear-of-the-godess" ]
    },
    "warmogs-armor": {
        "id": "warmogs-armor",
        "name": "Warmog's Armor",
        "description": "The wearer regenerates 5% of their missing Health per second. (max of 150 HP/tick)",
        "recipe": [ "giants-belt", "giants-belt" ]
    },
    "morellonomicon": {
        "id": "morellonomicon",
        "name": "Morellonomicon",
        "description": "When the wearer deals damage with their spell, they burn the target, dealing 27% of the target's Maximum Health as true damage over 10 seconds and reducing healing by 50% for the duration of the burn.",
        "recipe": [ "giants-belt", "needlessly-large-rod" ]
    },
    "zephyr": {
        "id": "zephyr",
        "name": "Zephyr",
        "description": "When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 5 seconds.",
        "recipe": [ "giants-belt", "negatron-cloak" ]
    },
    "zzrot-portal": {
        "id": "zzrot-portal",
        "name": "Zz'rot Portal",
        "description": "When the wearer dies, a Construct with 1000/2000/3000 ★ Health aries to continue the fight.",
        "recipe": [ "giants-belt", "recurve-bow" ]
    },
    "trap-claw": {
        "id": "trap-claw",
        "name": "Trap Claw",
        "description": "Start combat with a spell shield. Stun the champion that breaks it for 4 sec.",
        "recipe": [ "giants-belt", "sparring-gloves" ]
    },
    "protectors-chestguard": {
        "id": "protectors-chestguard",
        "name": "Protector's Chestguard",
        "description": "Wearer is also a Protector.",
        "recipe": [ "giants-belt", "spatula" ]
    },
    "redemption": {
        "id": "redemption",
        "name": "Redemption",
        "description": "When the wearer dies, allies are healed for 800 Health.",
        "recipe": [ "giants-belt", "tear-of-the-godess" ]
    },
    "rabadons-deathcap": {
        "id": "rabadons-deathcap",
        "name": "Rabadon's Deathcap",
        "description": "Wearer's Spell Power stat is amplified by 50%.",
        "recipe": [ "needlessly-large-rod", "needlessly-large-rod" ]
    },
    "ionic-spark": {
        "id": "ionic-spark",
        "name": "Ionic Spark",
        "description": "Enemies within 2 hexes have their Magic Resist reduced by 50% (does not stack). When they cast a spell, they are zapped taking magic damage equal to 225% of their max Mana.",
        "recipe": [ "needlessly-large-rod", "negatron-cloak" ]
    },
    "guinsoos-rageblade": {
        "id": "guinsoos-rageblade",
        "name": "Guinsoo's Rageblade",
        "description": "Basic Attacks grant +5% bonus Attack Speed for the rest of combat. No stacking limit.",
        "recipe": [ "needlessly-large-rod", "recurve-bow" ]
    },
    "jeweled-gauntlet": {
        "id": "jeweled-gauntlet",
        "name": "Jeweled Gauntlet",
        "description": "The wearer's spells can critically strike.",
        "recipe": [ "needlessly-large-rod", "sparring-gloves" ]
    },
    "demolitionists-charge": {
        "id": "demolitionists-charge",
        "name": "Demolitionist's Charge",
        "description": "Wearer is also a Demolitionist.",
        "recipe": [ "needlessly-large-rod", "spatula" ]
    },
    "ludens-echo": {
        "id": "ludens-echo",
        "name": "Luden's Echo",
        "description": "When the wearer casts their spell, the first target dealt magic damage and up to 3 nearby enemies are dealt an additional 150 / 175 / 225 magic damage.",
        "recipe": [ "needlessly-large-rod", "tear-of-the-godess" ]
    },
    "dragons-claw": {
        "id": "dragons-claw",
        "name": "Dragon's Claw",
        "description": "Reduces incoming magic damage by 50%.",
        "recipe": [ "negatron-cloak", "negatron-cloak" ]
    },
    "runaans-hurricane": {
        "id": "runaans-hurricane",
        "name": "Runaan's Hurricane",
        "description": "Basic Attacks fire a bolt at another nearby enemy, dealing 70% of the wearer's Attack Damage and applying on-hit effects.",
        "recipe": [ "negatron-cloak", "recurve-bow" ]
    },
    "quicksilver": {
        "id": "quicksilver",
        "name": "Quicksilver",
        "description": "[UNIQUE] The wearer is immute to croud control for the first 15 seconds of combat.",
        "recipe": [ "negatron-cloak", "sparring-gloves" ]
    },
    "celestial-orb": {
        "id": "celestial-orb",
        "name": "Celestial Orb",
        "description": "The wearer gains the Celestial trait.",
        "recipe": [ "negatron-cloak", "spatula" ]
    },
    "chalice-of-favor": {
        "id": "chalice-of-favor",
        "name": "Chalice of Favor",
        "description": "When the wearer casts a spell, restores 10 mana to allies within 2 hexes.",
        "recipe": [ "negatron-cloak", "tear-of-the-godess" ]
    },
    "rapid-firecannon": {
        "id": "rapid-firecannon",
        "name": "Rapid Firecannon",
        "description": "Attack Range is tripled.",
        "recipe": [ "recurve-bow", "recurve-bow" ]
    },
    "last-whisper": {
        "id": "last-whisper",
        "name": "Last Whisper",
        "description": "Critical hits reduce the target’s Armor by 90% for 3 seconds. This effect does not stack.",
        "recipe": [ "recurve-bow", "sparring-gloves" ]
    },
    "infiltrators-talons": {
        "id": "infiltrators-talons",
        "name": "Infiltrator's Talons",
        "description": "Wearer is also an Infiltrator.",
        "recipe": [ "recurve-bow", "spatula" ]
    },
    "statikk-shiv": {
        "id": "statikk-shiv",
        "name": "Statikk Shiv",
        "description": "Every third Basic Attack from the wearer deals 80 magic damage to 3/4/5 enemies.",
        "recipe": [ "recurve-bow", "tear-of-the-godess" ]
    },
    "thiefs-gloves": {
        "id": "thiefs-gloves",
        "name": "Thief's Gloves",
        "description": "Each planning phase, fetch two temporary items, quality based upon your player level. [Consumes Three item Slots]",
        "recipe": [ "sparring-gloves", "sparring-gloves" ]
    },
    "dark-stars-heart": {
        "id": "dark-stars-heart",
        "name": "Dark Star's Heart",
        "description": "Wearer is also a Dark Star.",
        "recipe": [ "sparring-gloves", "spatula" ]
    },
    "hand-of-justice": {
        "id": "hand-of-justice",
        "name": "Hand of Justice",
        "description": "Each planning phase, gain one: Deal +50% more damage / Basic Attack heal 50 health on Hit.",
        "recipe": [ "sparring-gloves", "tear-of-the-godess" ]
    },
    "force-of-nature": {
        "id": "force-of-nature",
        "name": "Force of Nature",
        "description": "Gain +1 team size.",
        "recipe": [ "spatula", "spatula" ]
    },
    "star-guardians-charm": {
        "id": "star-guardians-charm",
        "name": "Star Guardian's Charm",
        "description": "Wearer is also a Star Guardian.",
        "recipe": [ "spatula", "tear-of-the-godess" ]
    },
    "seraphs-embrace": {
        "id": "seraphs-embrace",
        "name": "Seraph's Embrace",
        "description": "Wearer regains 20 mana after spellcast.",
        "recipe": [ "tear-of-the-godess", "tear-of-the-godess" ]
    }
};

const BASE_ITEMS = Object.values(ITEMS).filter(data => !data.recipe);
const COMBINED_ITEMS = Object.values(ITEMS).filter(data => data.recipe);