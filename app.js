const initialTasks = [
    { id: '1', name: 'Pet a friendly neighborhood cat', description: 'Find a friendly cat and give it some love.', points: 10, category: 'Local', photoURL: 'images/cat.png' },
    { id: '2', name: 'Visit a local park', description: 'Enjoy nature at a nearby park.', points: 15, category: 'Outdoors', photoURL: 'images/visit_local_park.webp' },
    { id: '3', name: 'Try a new coffee shop', description: 'Explore a local café.', points: 20, category: 'Food', photoURL: 'images/try_new_coffee_shop.webp' },
    { id: '4', name: 'Raccoon', description: 'Find a raccoon in the wild.', points: 20, category: 'Animals', photoURL: 'images/racoon.png' },
    { id: '5', name: 'Junco', description: 'Find a Junco.', points: 5, category: 'Animals', photoURL: 'images/junco.png' },
    { id: '6', name: 'California Scrub-Jay', description: 'Find a California Scrub-Jay.', points: 5, category: 'Animals', photoURL: 'images/scrubjay.png' },
    { id: '7', name: 'Bushtit', description: 'Find a Bushtit.', points: 5, category: 'Animals', photoURL: 'images/bushtit.png' },
    { id: '8', name: 'Chickadee', description: 'Find a Chickadee.', points: 5, category: 'Animals', photoURL: 'images/chickadee.png' },
    { id: '9', name: 'Northern Flicker', description: 'Find a Northern Flicker.', points: 5, category: 'Animals', photoURL: 'images/northern_flicker.png' },
    { id: '10', name: 'Song Sparrow', description: 'Find a Song Sparrow.', points: 5, category: 'Animals', photoURL: 'images/song_sparrow.png' },
    { id: '11', name: 'House Finch', description: 'Find a House Finch.', points: 5, category: 'Animals', photoURL: 'images/house_finch.png' },
    { id: '12', name: 'Towhee', description: 'Find a Towhee.', points: 20, category: 'Animals', photoURL: 'images/towhee.png' },
    { id: '13', name: 'Lesser Goldfinch', description: 'Find a Lesser Goldfinch.', points: 5, category: 'Animals', photoURL: 'images/lesser_goldfinch.png' },
    { id: '14', name: 'American Robin', description: 'Find an American Robin.', points: 5, category: 'Animals', photoURL: 'images/robin.png' },
    { id: '15', name: 'American Crow', description: 'Find an American Crow.', points: 5, category: 'Animals', photoURL: 'images/crow.png' },
    { id: '16', name: 'Bald Eagle', description: 'Find a Bald Eagle.', points: 20, category: 'Animals', photoURL: 'images/bald_eagle.png' },
    { id: '17', name: 'European Starling', description: 'Find a European Starling.', points: 5, category: 'Animals', photoURL: 'images/starling.png' },
    { id: '18', name: 'Turkey Vulture', description: 'Find a Turkey Vulture.', points: 5, category: 'Animals', photoURL: 'images/vulture.png' },
    { id: '19', name: 'Anna\'s Hummingbird', description: 'Find an Anna\'s Hummingbird.', points: 5, category: 'Animals', photoURL: 'images/hummingbird.png' },
    { id: '20', name: 'Chat to a neighbor', description: 'Have a friendly conversation with a neighbor.', points: 10, category: 'Local', photoURL: 'images/chat_to_neighbor.webp' },
    { id: '21', name: 'Find a sculpture', description: 'Discover a sculpture in your area.', points: 10, category: 'Local', photoURL: 'images/find_sculpture.webp' },
    { id: '22', name: 'Get a book from a little free library', description: 'Find a little free library and take a book.', points: 10, category: 'Local', photoURL: 'images/little_free_library.webp' },
    { id: '23', name: 'Feed a dandelion to Rue the bunny', description: 'Find Rue the bunny and feed them a dandelion.', points: 10, category: 'Local', photoURL: 'images/feed_rue_bunny.webp' },
    { id: '24', name: 'Take the bus somewhere', description: 'Use public transportation to explore.', points: 10, category: 'Local', photoURL: 'images/take_the_bus.webp' },
    { id: '25', name: 'Freddie\'s Frozen Food Feast', description: 'Find something tasty in the Freddie\'s frozen aisle.', points: 10, category: 'Food', photoURL: 'images/freddies_frozen_food.webp' },
    { id: '26', name: 'Nab a Cool Treat', description: 'Gelato or Ice Cream', points: 10, category: 'Food', photoURL: 'images/cool_treat.webp' },
    { id: '27', name: 'Overpay for Greasy Street Food', description: 'Visit the local food carts', points: 10, category: 'Food', photoURL: 'images/food_carts.webp' },
    { id: '28', name: 'Tastiest Thai Ever', description: '', points: 10, category: 'Food', photoURL: 'images/tastiest_thai.webp' },
    { id: '29', name: 'Experience Boba Tea', description: '', points: 10, category: 'Food', photoURL: 'images/boba_tea.webp' },
    { id: '30', name: 'Complain About Biltong vs Jerky', description: '', points: 5, category: 'Food', photoURL: 'images/biltong_vs_jerky.webp' },
    { id: '31', name: 'Gain 2 Pounds', description: '', points: 5, category: 'Food', photoURL: 'images/gain_2_pounds.webp' },
    { id: '32', name: 'Salt Water Taffy', description: '', points: 5, category: 'Food', photoURL: 'images/salt_water_taffy.webp' },
    { id: '33', name: 'Smell a Rose', description: '', points: 5, category: 'Outdoors', photoURL: 'images/smell_rose.webp' },
    { id: '34', name: 'Smell a Double Delight', description: '', points: 20, category: 'Outdoors', photoURL: 'images/smell_double_delight.webp' },
    { id: '35', name: 'Steal a Berry', description: '', points: 5, category: 'Outdoors', photoURL: 'images/steal_berry.webp' },
    { id: '36', name: 'Be Disappointed by a Junco', description: '', points: 5, category: 'Outdoors', photoURL: 'images/disappointed_junco.webp' },
    { id: '37', name: 'Hug a Tree', description: '', points: 5, category: 'Outdoors', photoURL: 'images/hug_tree.webp' },
    { id: '38', name: 'Find a Cool Rock', description: '', points: 5, category: 'Outdoors', photoURL: 'images/cool_rock.webp' },
    { id: '39', name: 'Touch the Ocean', description: '', points: 20, category: 'Outdoors', photoURL: 'images/touch_ocean.webp' },
    { id: '40', name: 'Find Something Cool for Free', description: '', points: 10, category: 'Local', photoURL: 'images/find_something_free.webp' },
    { id: '41', name: 'Ride a Scooter', description: '', points: 10, category: 'Local', photoURL: 'images/ride_scooter.webp' }
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
            // Add <p>${task.description}</p> if you want to show the description
            taskDiv.innerHTML = `
                ${task.photoURL ? `<img src="${task.photoURL}" alt="${task.name}">` : ''}
                <div class="task-info">
                    <h3>${task.name}</h3>
                    
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