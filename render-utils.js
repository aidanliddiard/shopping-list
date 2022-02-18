export function renderItem(object) {
    const li = document.createElement('li');
    if (object.bought) {
        li.classList.add('bought');
    }
    li.classList.add('item');
    li.textContent = object.item;
    return li;
}