const ITEMS = {
    "bf-sword": {
        "id": "bf-sword",
        "name": "B.F. Sword",
        "description": ""
    },
    "chain-vest": {
        "id": "chain-vest",
        "name": "Chain Vest",
        "description": ""
    },
    "giants-belt": {
        "id": "giants-belt",
        "name": "Giant's Belt",
        "description": ""
    },
    "needlessly-large-rod": {
        "id": "needlessly-large-rod",
        "name": "Needlessly Large Rod",
        "description": ""
    },
    "negatron-cloak": {
        "id": "negatron-cloak",
        "name": "Negatron Cloak",
        "description": ""
    },
    "recurve-bow": {
        "id": "recurve-bow",
        "name": "Recurve Bow",
        "description": ""
    },
    "sparring-gloves": {
        "id": "sparring-gloves",
        "name": "Sparring Gloves",
        "description": ""
    },
    "spatula": {
        "id": "spatula",
        "name": "Spatula",
        "description": ""
    },
    "tear-of-the-godess": {
        "id": "tear-of-the-godess",
        "name": "Tear of the Godess",
        "description": ""
    },
    "deathblade": {
        "id": "deathblade",
        "name": "Deathblade",
        "description": "",
        "recipe": [ "bf-sword", "bf-sword" ]
    },
    "guardian-angel": {
        "id": "guardian-angel",
        "name": "Guardian Angel",
        "description": "",
        "recipe": [ "bf-sword", "chain-vest" ]
    },
    "zekes-herald": {
        "id": "zekes-herald",
        "name": "Zeke's Herald",
        "description": "",
        "recipe": [ "bf-sword", "giants-belt" ]
    },
    "hextech-gunblade": {
        "id": "hextech-gunblade",
        "name": "Hextech Gunblade",
        "description": "",
        "recipe": [ "bf-sword", "needlessly-large-rod" ]
    },
    "bloodthirster": {
        "id": "bloodthirster",
        "name": "Bloodthirster",
        "description": "",
        "recipe": [ "bf-sword", "negatron-cloak" ]
    },
    "giant-slayer": {
        "id": "giant-slayer",
        "name": "Giant Slayer",
        "description": "",
        "recipe": [ "bf-sword", "recurve-bow" ]
    },
    "infinity-edge": {
        "id": "infinity-edge",
        "name": "Infinity Edge",
        "description": "",
        "recipe": [ "bf-sword", "sparring-gloves" ]
    },
    "blade-of-the-ruined-king": {
        "id": "blade-of-the-ruined-king",
        "name": "Blade of the Ruined King",
        "description": "",
        "recipe": [ "bf-sword", "spatula" ]
    },
    "spear-of-shojin": {
        "id": "spear-of-shojin",
        "name": "Spear of Shojin",
        "description": "",
        "recipe": [ "bf-sword", "tear-of-the-godess" ]
    },
    "bramble-vest": {
        "id": "bramble-vest",
        "name": "Bramble Vest",
        "description": "",
        "recipe": [ "chain-vest", "chain-vest" ]
    },
    "red-buff": {
        "id": "red-buff",
        "name": "Red Buff",
        "description": "",
        "recipe": [ "chain-vest", "giants-belt" ]
    },
    "locket-of-the-iron-solari": {
        "id": "locket-of-the-iron-solari",
        "name": "Locket of the Iron Solari",
        "description": "",
        "recipe": [ "chain-vest", "needlessly-large-rod" ]
    },
    "sword-breaker": {
        "id": "sword-breaker",
        "name": "Sword Breaker",
        "description": "",
        "recipe": [ "chain-vest", "negatron-cloak" ]
    },
    "titans-resolve": {
        "id": "titans-resolve",
        "name": "Titan's Resolve",
        "description": "",
        "recipe": [ "chain-vest", "recurve-bow" ]
    },
    "shroud-of-stillness": {
        "id": "shroud-of-stillness",
        "name": "Shroud of Stillness",
        "description": "",
        "recipe": [ "chain-vest", "sparring-gloves" ]
    },
    "rebel-medal": {
        "id": "rebel-medal",
        "name": "Rebel Medal",
        "description": "",
        "recipe": [ "chain-vest", "spatula" ]
    },
    "frozen-heart": {
        "id": "frozen-heart",
        "name": "Frozen Heart",
        "description": "",
        "recipe": [ "chain-vest", "tear-of-the-godess" ]
    },
    "warmogs-armor": {
        "id": "warmogs-armor",
        "name": "Warmog's Armor",
        "description": "",
        "recipe": [ "giants-belt", "giants-belt" ]
    },
    "morellonomicon": {
        "id": "morellonomicon",
        "name": "Morellonomicon",
        "description": "",
        "recipe": [ "giants-belt", "needlessly-large-rod" ]
    },
    "zephyr": {
        "id": "zephyr",
        "name": "Zephyr",
        "description": "",
        "recipe": [ "giants-belt", "negatron-cloak" ]
    },
    "zzrot-portal": {
        "id": "zzrot-portal",
        "name": "Zz'rot Portal",
        "description": "",
        "recipe": [ "giants-belt", "recurve-bow" ]
    },
    "trap-claw": {
        "id": "trap-claw",
        "name": "Trap Claw",
        "description": "",
        "recipe": [ "giants-belt", "sparring-gloves" ]
    },
    "protectors-chestguard": {
        "id": "protectors-chestguard",
        "name": "Protector's Chestguard",
        "description": "",
        "recipe": [ "giants-belt", "spatula" ]
    },
    "redemption": {
        "id": "redemption",
        "name": "Redemption",
        "description": "",
        "recipe": [ "giants-belt", "tear-of-the-godess" ]
    },
    "rabadons-deathcap": {
        "id": "rabadons-deathcap",
        "name": "Rabadon's Deathcap",
        "description": "",
        "recipe": [ "needlessly-large-rod", "needlessly-large-rod" ]
    },
    "ionic-spark": {
        "id": "ionic-spark",
        "name": "Ionic Spark",
        "description": "",
        "recipe": [ "needlessly-large-rod", "negatron-cloak" ]
    },
    "guinsoos-rageblade": {
        "id": "guinsoos-rageblade",
        "name": "Guinsoo's Rageblade",
        "description": "",
        "recipe": [ "needlessly-large-rod", "recurve-bow" ]
    },
    "jeweled-gauntlet": {
        "id": "jeweled-gauntlet",
        "name": "Jeweled Gauntlet",
        "description": "",
        "recipe": [ "needlessly-large-rod", "sparring-gloves" ]
    },
    "demolitionists-charge": {
        "id": "demolitionists-charge",
        "name": "Demolitionist's Charge",
        "description": "",
        "recipe": [ "needlessly-large-rod", "spatula" ]
    },
    "ludens-echo": {
        "id": "ludens-echo",
        "name": "Luden's Echo",
        "description": "",
        "recipe": [ "needlessly-large-rod", "tear-of-the-godess" ]
    },
    "dragons-claw": {
        "id": "dragons-claw",
        "name": "Dragon's Claw",
        "description": "",
        "recipe": [ "negatron-cloak", "negatron-cloak" ]
    },
    "runaans-hurricane": {
        "id": "runaans-hurricane",
        "name": "Runaan's Hurricane",
        "description": "",
        "recipe": [ "negatron-cloak", "recurve-bow" ]
    },
    "quicksilver": {
        "id": "quicksilver",
        "name": "Quicksilver",
        "description": "",
        "recipe": [ "negatron-cloak", "sparring-gloves" ]
    },
    "celestial-orb": {
        "id": "celestial-orb",
        "name": "Celestial Orb",
        "description": "",
        "recipe": [ "negatron-cloak", "spatula" ]
    },
    "chalice-of-favor": {
        "id": "chalice-of-favor",
        "name": "Chalice of Favor",
        "description": "",
        "recipe": [ "negatron-cloak", "tear-of-the-godess" ]
    },
    "rapid-firecannon": {
        "id": "rapid-firecannon",
        "name": "Rapid Firecannon",
        "description": "",
        "recipe": [ "recurve-bow", "recurve-bow" ]
    },
    "last-whisper": {
        "id": "last-whisper",
        "name": "Last Whisper",
        "description": "",
        "recipe": [ "recurve-bow", "sparring-gloves" ]
    },
    "infiltrators-talons": {
        "id": "infiltrators-talons",
        "name": "Infiltrator's Talons",
        "description": "",
        "recipe": [ "recurve-bow", "spatula" ]
    },
    "statikk-shiv": {
        "id": "statikk-shiv",
        "name": "Statikk Shiv",
        "description": "",
        "recipe": [ "recurve-bow", "tear-of-the-godess" ]
    },
    "thiefs-gloves": {
        "id": "thiefs-gloves",
        "name": "Thief's Gloves",
        "description": "",
        "recipe": [ "sparring-gloves", "sparring-gloves" ]
    },
    "dark-stars-heart": {
        "id": "dark-stars-heart",
        "name": "Dark Star's Heart",
        "description": "",
        "recipe": [ "sparring-gloves", "spatula" ]
    },
    "hand-of-justice": {
        "id": "hand-of-justice",
        "name": "Hand of Justice",
        "description": "",
        "recipe": [ "sparring-gloves", "tear-of-the-godess" ]
    },
    "force-of-nature": {
        "id": "force-of-nature",
        "name": "Force of Nature",
        "description": "",
        "recipe": [ "spatula", "spatula" ]
    },
    "star-guardians-charm": {
        "id": "star-guardians-charm",
        "name": "Star Guardian's Charm",
        "description": "",
        "recipe": [ "spatula", "tear-of-the-godess" ]
    },
    "seraphs-embrace": {
        "id": "seraphs-embrace",
        "name": "Seraph's Embrace",
        "description": "",
        "recipe": [ "tear-of-the-godess", "tear-of-the-godess" ]
    }
};

const BASE_ITEMS = Object.values(ITEMS).filter(data => !data.recipe);
const COMBINED_ITEMS = Object.values(ITEMS).filter(data => data.recipe);