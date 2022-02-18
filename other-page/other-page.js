import { checkAuth, logout, fetchItems } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const list = document.getElementById('list');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const items = await fetchItems();
    //console.log(items);
    for (let item of items) {
        const li = renderItem(item);
        list.append(li);
    }
});


