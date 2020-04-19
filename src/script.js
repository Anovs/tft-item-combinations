const COMPONENTS_ELT = $('components');
const SELECTECD_ITEMS_ELT = $('selected-items');
const COMBINATIONS_ELT = $('combinations');
const FILTERS_ELT = $('filters');
const COMBINATION_NUMBER_ELT = $('combination-number');

let SELECTED_ITEMS = [];
let POSSIBLE_COMBINATIONS = [];
let POSSIBLE_ITEMS = [];
let FILTERS = [];

function main() {
    for (const item of BASE_ITEMS) {
        COMPONENTS_ELT.appendChild(createItemImage(item.id, () => {
            addItemToSelection(item.id);
        }));
    }
}

function addItemToSelection(item) {
    SELECTED_ITEMS.push(item);
    refresh();
}

function removeItemFromSelection(item) {
    SELECTED_ITEMS.splice(SELECTED_ITEMS.indexOf(item), 1);
    refresh();
}

function toggleFilter(item) {
    const index = FILTERS.indexOf(item);

    if (index === -1) {
        FILTERS.push(item);
    } else {
        FILTERS.splice(index, 1);
    }

    refresh();
}

function refresh() {
    POSSIBLE_COMBINATIONS.length = 0;

    emptyDomElement(SELECTECD_ITEMS_ELT);
    emptyDomElement(COMBINATIONS_ELT);
    emptyDomElement(FILTERS_ELT);

    const craftableItems = COMBINED_ITEMS.filter(data => {
        const r = data.recipe;

        if (r[0] === r[1]) {
            const index1 = SELECTED_ITEMS.indexOf(r[0]);

            return index1 !== -1 && SELECTED_ITEMS.includes(r[0], index1 + 1);
        } else {
            return SELECTED_ITEMS.includes(r[0]) && SELECTED_ITEMS.includes(r[1]);
        }
    }).map(data => data.id);

    FILTERS = FILTERS.filter(item => craftableItems.includes(item));

    for (const item of craftableItems) {
        const image = createItemImage(item, () => {
            toggleFilter(item);
        });

        if (FILTERS.includes(item)) {
            image.style.border = '2px solid red';
        }

        FILTERS_ELT.appendChild(image);
    }

    for (const item of SELECTED_ITEMS) {
        SELECTECD_ITEMS_ELT.appendChild(createItemImage(item, () => {
            removeItemFromSelection(item);
        }));
    }

    const permutations = getAllPermutations(SELECTED_ITEMS).map(list => list.join('/'));
    const uniquePermutations = Array.from(new Set(permutations)).map(str => str.split('/'));
    const combinations = [];

    for (const list of uniquePermutations) {
        const combinedItemList = [];

        for (let i = 0; i < list.length; i += 2) {
            const item1 = list[i];
            const item2 = list[i+1];

            combinedItemList.push(getCombinedItem(item1, item2));
        }

        if (FILTERS.every(item => combinedItemList.includes(item))) {
            combinations.push(combinedItemList);
        }
    }

    const finalList = Array.from(new Set(combinations.map(arr => arr.sort(sortItems).join('/')))).map(str => str.split('/'));

    for (const list of finalList) {
        const li = document.createElement('li');

        for (const item of list) {
            li.appendChild(createItemImage(item));
        }

        COMBINATIONS_ELT.appendChild(li);
    }

    COMBINATION_NUMBER_ELT.textContent = finalList.length.toString();
}

const CACHE = {};

function getCombinedItem(item1, item2) {
    if (!item1) {
        return item2;
    } else if (!item2) {
        return item1;
    }

    const key = `${item1} ${item2}`;
    let item = CACHE[key];

    if (!item) {
        item = COMBINED_ITEMS.find(({recipe}) => {
            return (recipe[0] === item1 && recipe[1] === item2)
                || (recipe[1] === item1 && recipe[0] === item2);
        }).id;
        CACHE[key] = item;
    }

    return item;
}

function emptyDomElement(elt) {
    while (elt.firstChild) {
        elt.removeChild(elt.firstChild);
    }
}

function $(id) {
    return document.getElementById(id);
}

function isBasicItem(item) {
    return !ITEMS[item].recipe;
}

function sortItems(item1, item2) {
    if (isBasicItem(item1) === isBasicItem(item2)) {
        return item1 < item2 ? -1 : 1;
    } else if (isBasicItem(item1)) {
        return 1;
    } else {
        return -1;
    }
}

function createItemImage(item, onclick) {
    const data = ITEMS[item];
    const image = document.createElement('img');
    image.src = `img/${item}.png`;
    image.title = data.name;
    image.classList.add('item');

    if (onclick) {
        image.onclick = onclick;
        image.style.cursor = 'pointer';
    }

    return image;
}

function getAllPermutations(elements) {
    if (elements.length % 2 === 1) {
        elements = elements.concat(['']);
    }

    let currentPermutations = [[]];

    for (let i = 0; i < elements.length; ++i) {
        const permutations = [];
        const elt = elements[i];

        for (const arr of currentPermutations) {
            const newPermutations = getPermutationsFromOneMoreElement(arr, elt);
            permutations.push.apply(permutations, newPermutations);
        }

        currentPermutations = permutations;
    }

    if (currentPermutations[0].length === 0) {
        return [];
    } else {
        return currentPermutations;
    }
}

function getPermutationsFromOneMoreElement(array, element) {
    const result = [];

    for (let i = 0; i <= array.length; i += 2) {
        const a = array.slice();
        a.splice(i, 0, element);
        result.push(a);
    }

    return result;
}

const SPECIAL_WORDS = {
    of: 'of',
    the: 'the',
    zzrot: 'Zz\'rot',
    bf: 'B.F.'
}

function itemIdToName(item) {
    return item.split('-').map((word, i, arr) => {
        if (SPECIAL_WORDS[word]) {
            return SPECIAL_WORDS[word];
        }

        word = word[0].toUpperCase() + word.substring(1);

        if (word.endsWith('s') && i !== arr.length - 1) {
            word = word.substring(0, word.length - 1) + "'" + 's';
        }

        return word;
    }).join(' ');
}

main();