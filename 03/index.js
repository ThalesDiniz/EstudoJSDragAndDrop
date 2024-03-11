import TaskItem from './taskItem.js';
import { addItem, createTaskItem } from "./HTMLbuild.js";

let ti = null;

document.addEventListener('DOMContentLoaded', (event) => {
    ti = new TaskItem();

    var btn = document.querySelector('.task-button');
    btn.addEventListener('click', handleAddItems);
});

function handleAddItems() {
    const item = createTaskItem();
    ti.addItem(item);
    addItem(item)
}