const form = document.getElementById("task-form");
const list = document.getElementById("task-list");
const summary = document.getElementById("summary");

let tasks = [
  { subject: "DevOps", task: "Install Git and link GitHub", due: "2026-10-10", done: true },
  { subject: "DevOps", task: "Push the study planner to GitHub", due: "2026-10-11", done: false },
  { subject: "STQA", task: "Prepare test cases for Exp 9", due: "2026-10-14", done: false }
];

function render() {
  list.innerHTML = "";
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    if (t.done) li.className = "done";
    li.innerHTML = `<span><b class="tag">${t.subject}</b>${t.task} - due ${t.due}</span>`;
    const btn = document.createElement("button");
    btn.textContent = t.done ? "Undo" : "Done";
    btn.onclick = () => { tasks[i].done = !tasks[i].done; render(); };
    li.appendChild(btn);
    list.appendChild(li);
  });
  const pending = tasks.filter(t => !t.done).length;
  summary.textContent = `${tasks.length} tasks, ${pending} pending`;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  tasks.push({
    subject: document.getElementById("subject").value,
    task: document.getElementById("task").value,
    due: document.getElementById("due").value,
    done: false
  });
  form.reset();
  render();
});

render();

const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "Light mode" : "Dark mode";
});
