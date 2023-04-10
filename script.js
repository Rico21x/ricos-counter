// Gets the add button element from dom
const addButton = document.getElementById('add');

// Gets the subtract button element from DOM
const subtractButton = document.getElementById('subtract');


const countElement = document.getElementById('count');

// sets the default count to 0
let count = 0;

// Adds an event listener to the add button
addButton.addEventListener('click', function() {
	// Increases the count by 1
	count += 1;

	// Updates the element count text
	countElement.textContent = count;
});

// Add an event listener to the subtract button
subtractButton.addEventListener('click', function() {
	// Decreases the count by 1
	count -= 1;

	// The count element text updates
	countElement.textContent = count;
});
