const initialTasks = [
    { id: '1', name: 'Pet a friendly neighborhood cat', description: 'Find a friendly cat and give it some love.', points: 10, category: 'Animals', photoURL: 'https://picsum.photos/id/237/200/150' },
    { id: '2', name: 'Visit a local park', description: 'Enjoy nature at a nearby park.', points: 15, category: 'Outdoors' },
    { id: '3', name: 'Try a new coffee shop', description: 'Explore a local café.', points: 20, category: 'Food' }
];

let completedTaskIds = JSON.parse(localStorage.getItem('completedTaskIds')) || [];

// Preload images to trigger caching
initialTasks.forEach(task => {
    if (task.photoURL) {
        const img = new Image();
        img.src = task.photoURL;
    }
});

function renderTasks() {
    const taskList = document.getElementById('task-list');
    const categories = [...new Set(initialTasks.map(task => task.category))];
    taskList.innerHTML = '';

    categories.forEach(category => {
        const details = document.createElement('details');
        details.innerHTML = `<summary>${category}</summary>`;
        const tasksInCategory = initialTasks.filter(task => task.category === category);

        tasksInCategory.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'card';
            taskDiv.id = `task-${task.id}`;
            if (completedTaskIds.includes(task.id)) taskDiv.classList.add('completed');

            taskDiv.innerHTML = `
                ${task.photoURL ? `<img src="${task.photoURL}" alt="${task.name}">` : ''}
                <div class="task-info">
                    <h3>${task.name}</h3>
                    <p>${task.description}</p>
                    <p>Points: ${task.points}</p>
                </div>
                <span class="checkmark">✅</span>
            `;
            taskDiv.addEventListener('click', () => toggleTask(task.id));
            details.appendChild(taskDiv);
        });

        taskList.appendChild(details);
    });

    updateScore();
}

function toggleTask(taskId) {
    if (completedTaskIds.includes(taskId)) {
        completedTaskIds = completedTaskIds.filter(id => id !== taskId);
    } else {
        completedTaskIds.push(taskId);
    }
    localStorage.setItem('completedTaskIds', JSON.stringify(completedTaskIds));
    const taskDiv = document.getElementById(`task-${taskId}`);
    if (taskDiv) taskDiv.classList.toggle('completed');
    updateScore();
}

function updateScore() {
    const score = initialTasks.reduce((acc, task) => {
        return acc + (completedTaskIds.includes(task.id) ? task.points : 0);
    }, 0);
    document.getElementById('score').textContent = `Your Score: ${score}`;
}

renderTasks();