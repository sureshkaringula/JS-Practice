const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const themeToggle = document.getElementById("themeToggle");
const filters = document.querySelectorAll(".filter");

addBtn.addEventListener("click", addTask);
themeToggle.addEventListener("click", toggleTheme);
filters.forEach(btn => btn.addEventListener("click", filterTasks));

function addTask() {
    if (!input.value.trim()) return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = input.value.trim();

    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    const done = document.createElement("i");
    done.className = "fa-solid fa-check";
    done.onclick = () => li.classList.toggle("completed");

    const edit = document.createElement("i");
    edit.className = "fa-solid fa-pen";
    edit.onclick = () => {
        const updated = prompt("Edit task:", span.textContent);
        if (updated?.trim()) span.textContent = updated.trim();
    };

    const del = document.createElement("i");
    del.className = "fa-solid fa-trash";
    del.onclick = () => li.remove();

    actions.append(done, edit, del);
    li.append(span, actions);
    list.append(li);

    input.value = "";
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function filterTasks() {
    filters.forEach(f => f.classList.remove("active"));
    this.classList.add("active");

    const type = this.dataset.filter;
    const tasks = document.querySelectorAll(".task-list li");

    tasks.forEach(task => {
        task.style.display =
            type === "all"
                ? "flex"
                : type === "completed"
                ? task.classList.contains("completed") ? "flex" : "none"
                : !task.classList.contains("completed") ? "flex" : "none";
    });
}
