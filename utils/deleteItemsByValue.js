const deleteItemsByValue = (list, value) => {

    let currentList = list;

        if (currentList.value === value && currentList.next !== null) {

            return deleteItemsByValue(currentList.next, value);

        } else if (currentList.value !== value && currentList.next !== null) {

            currentList.next = deleteItemsByValue(currentList.next, value);

        } else if (currentList.value === value && currentList.next === null) {

            return null;

        }

    return currentList;

};

module.exports = deleteItemsByValue;