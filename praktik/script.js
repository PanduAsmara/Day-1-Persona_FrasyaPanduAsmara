const initialTasks = [
  {
    id: 1,
    title: "Misi Proyek Workshop EXPECTIK: Dokumentasi Repository GitHub",
    dueDate: "2026-11-07",
    completed: true
  },
  {
    id: 2,
    title: "Praktikum Algoritma & Pemrograman C++ (Array & Vector)",
    dueDate: "2026-11-10",
    completed: false
  },
  {
    id: 3,
    title: "Latihan Soal Matematika Diskrit",
    dueDate: "2026-11-12",
    completed: false
  },
  {
    id: 4,
    title: "Evaluasi Kinerja Jaringan & Analisis Packet Loss",
    dueDate: "2026-11-14",
    completed: false
  }
];

let tasks = [...initialTasks];
let currentFilter = "all";

const taskListEl = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskTitleInput = document.getElementById("task-title");
const taskDateInput = document.getElementById("task-date");
const filterButtons = document.querySelectorAll(".filter-btn");

const countAllEl = document.getElementById("count-all");
const countPendingEl = document.getElementById("count-pending");
const countCompletedEl = document.getElementById("count-completed");

function updateSummaryCounts() {
  const total = tasks.length;
  const completedCount = tasks.filter(task => task.completed).length;
  const pendingCount = total - completedCount;

  countAllEl.textContent = total;
  countPendingEl.textContent = pendingCount;
  countCompletedEl.textContent = completedCount;
}

function formatDate(dateString) {
  if (!dateString) return "-";
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

function renderTasks() {
  updateSummaryCounts();
  taskListEl.innerHTML = "";

  const filteredTasks = tasks.filter(task => {
    if (currentFilter === "pending") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    const emptyLi = document.createElement("li");
    emptyLi.className = "empty-state";
    emptyLi.textContent = "Tidak ada tugas pada kategori filter ini.";
    taskListEl.appendChild(emptyLi);
    return;
  }

  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;

    li.innerHTML = `
      <div class="task-left">
        <input
          type="checkbox"
          class="task-checkbox"
          aria-label="Tandai tugas selesai"
          ${task.completed ? "checked" : ""}
          onchange="toggleTaskStatus(${task.id})"
        >
        <div>
          <div class="task-title">${escapeHtml(task.title)}</div>
          <div class="task-due">📅 Tenggat: ${formatDate(task.dueDate)}</div>
        </div>
      </div>
      <div class="task-right">
        <span class="status-badge ${task.completed ? "status-completed" : "status-pending"}">
          ${task.completed ? "Completed" : "Pending"}
        </span>
        <button type="button" class="btn-delete" onclick="deleteTask(${task.id})" title="Hapus tugas">
          Hapus
        </button>
      </div>
    `;

    taskListEl.appendChild(li);
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

window.toggleTaskStatus = function(taskId) {
  tasks = tasks.map(task =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
};

window.deleteTask = function(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  renderTasks();
};

taskForm.addEventListener("submit", event => {
  event.preventDefault();
  const title = taskTitleInput.value.trim();
  const dueDate = taskDateInput.value;

  if (!title || !dueDate) return;

  const newTask = {
    id: Date.now(),
    title,
    dueDate,
    completed: false
  };

  tasks.unshift(newTask);
  taskTitleInput.value = "";
  taskDateInput.value = "";
  renderTasks();
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});

renderTasks();
