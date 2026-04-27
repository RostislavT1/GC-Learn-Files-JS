export function getItemsList() {
    const itemsList = document.querySelectorAll(".technology");
    console.dir(itemsList);
    return itemsList;
}

export function getItemsArray() {
    const itemsArray = Array.from(document.querySelectorAll(".technology"));
    console.dir(itemsArray);
    return itemsArray;
}

getItemsArray();
getItemsList();
