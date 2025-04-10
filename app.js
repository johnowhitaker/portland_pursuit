const initialTasks = [
    { id: '1', name: 'Pet a friendly neighborhood cat', description: 'Find a friendly cat and give it some love.', points: 10, category: 'Animals', photoURL: 'https://picsum.photos/id/237/200/150' },
    { id: '2', name: 'Visit a local park', description: 'Enjoy nature at a nearby park.', points: 15, category: 'Outdoors' },
    { id: '3', name: 'Try a new coffee shop', description: 'Explore a local café.', points: 20, category: 'Food' },
    { id: '4', name: 'Spot a Raccoon', description: 'Find a raccoon in the wild.', points: 20, category: 'Animals' },
    { id: '5', name: 'Spot a Junco', description: 'Find a Junco bird.', points: 5, category: 'Animals' },
    { id: '6', name: 'Spot a California Scrub-Jay', description: 'Find a California Scrub-Jay bird.', points: 5, category: 'Animals' },
    { id: '7', name: 'Spot a Bushtit', description: 'Find a Bushtit bird.', points: 5, category: 'Animals' },
    { id: '8', name: 'Spot a Chickadee', description: 'Find a Chickadee bird.', points: 5, category: 'Animals' },
    { id: '9', name: 'Spot a Northern Flicker', description: 'Find a Northern Flicker bird.', points: 5, category: 'Animals' },
    { id: '10', name: 'Spot a Song Sparrow', description: 'Find a Song Sparrow bird.', points: 5, category: 'Animals' },
    { id: '11', name: 'Spot a House Finch', description: 'Find a House Finch bird.', points: 5, category: 'Animals' },
    { id: '12', name: 'Spot a Towhee', description: 'Find a Towhee bird.', points: 20, category: 'Animals' },
    { id: '13', name: 'Spot a Lesser Goldfinch', description: 'Find a Lesser Goldfinch bird.', points: 5, category: 'Animals' },
    { id: '14', name: 'Spot an American Robin', description: 'Find an American Robin bird.', points: 5, category: 'Animals' },
    { id: '15', name: 'Spot an American Crow', description: 'Find an American Crow bird.', points: 5, category: 'Animals' },
    { id: '16', name: 'Spot a Bald Eagle', description: 'Find a Bald Eagle.', points: 20, category: 'Animals' },
    { id: '17', name: 'Spot a European Starling', description: 'Find a European Starling bird.', points: 5, category: 'Animals' },
    { id: '18', name: 'Spot a Turkey Vulture', description: 'Find a Turkey Vulture bird.', points: 5, category: 'Animals' },
    { id: '19', name: 'Spot an Anna\'s Hummingbird', description: 'Find an Anna\'s Hummingbird.', points: 5, category: 'Animals' },
    { id: '20', name: 'Chat to a neighbor', description: 'Have a friendly conversation with a neighbor.', points: 10, category: 'Local' },
    { id: '21', name: 'Find a sculpture', description: 'Discover a sculpture in your area.', points: 10, category: 'Local' },
    { id: '22', name: 'Get a book from a little free library', description: 'Find a little free library and take a book.', points: 10, category: 'Local' },
    { id: '23', name: 'Feed a dandelion to Rue the bunny', description: 'Find Rue the bunny and feed them a dandelion.', points: 10, category: 'Local' },
    { id: '24', name: 'Take the bus somewhere', description: 'Use public transportation to explore.', points: 10, category: 'Local' }
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