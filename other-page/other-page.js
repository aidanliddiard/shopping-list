import { checkAuth, logout, fetchItems, createItem, buyItem } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const list = document.getElementById('list');
const formData = document.getElementById('add-item');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayItems() {
    list.textContent = '';
    const items = await fetchItems();
    //console.log(items);
    for (let item of items) {
        const li = renderItem(item);
        li.addEventListener('click', async () =>{
            await buyItem(item.id);
            await displayItems();
        });
        list.append(li);
    }
}

displayItems();

formData.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newItem = new FormData(formData);
    await createItem(newItem.get('new-item'));
    formData.reset();
    await displayItems();
    //console.log(data);
});