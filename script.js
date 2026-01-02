const form = document.querySelector('form');
const allTask = document.querySelector('#allTask');
const input = document.querySelector('#task');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const parent = document.createElement('div');
    parent.classList.add('task');

    const task = document.createElement('span');
    task.textContent = text;

    const doneButton = document.createElement('button');
    doneButton.textContent = "Done";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    parent.append(task, doneButton, deleteButton);
    allTask.append(parent);

    deleteButton.addEventListener("click", () => {
        parent.remove();
    });

    doneButton.addEventListener("click", () => {
        task.style.textDecoration = 'line-through';
        task.style.color = 'pink';
    });

    input.value = "";
});
