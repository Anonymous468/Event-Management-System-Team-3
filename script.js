const eventsList = document.querySelector('.events-list');
const addEventButton = document.getElementById('add-event');
const deleteButton = document.createElement('button'); // Create delete button

deleteButton.textContent = 'Delete Selected Events';
deleteButton.disabled = true; // Initially disable delete button

// Sample event data (replace with your data source)
const events = [
    //Test data. Add more events here
  { title: 'Event 1', description: 'Event Description', date: '2024-06-15' },
  { title: 'Event 2', description: 'Another event description', date: '2024-07-10' },
];

// Function to create and display an event list item
function createEventListItem(event) {
  const listItem = document.createElement('li');
  listItem.classList.add('event-item');

  const title = document.createElement('h3');
  title.textContent = event.title;
  listItem.appendChild(title);

  const description = document.createElement('p');
  description.textContent = event.description;
  listItem.appendChild(description);

  const date = document.createElement('p');
  date.textContent = `Date: ${event.date}`;
  listItem.appendChild(date);

  // Checkbox for selection (optional)
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleDeleteButton);
  listItem.appendChild(checkbox);

  eventsList.appendChild(listItem);
}

// Function to toggle the "Delete Selected Events" button
function toggleDeleteButton() {
  const selectedItems = eventsList.querySelectorAll('.event-item input[type="checkbox"]:checked');
  deleteButton.disabled = selectedItems.length === 0;
}

// Display existing events
events.forEach(createEventListItem);

// Add event button functionality
addEventButton.addEventListener('click', function() {
  // Add functionality to open an event creation form here
  alert('Add Event form will open here.');
});

// Delete button functionality (implement deletion logic)
deleteButton.addEventListener('click', function() {
  const selectedItems = eventsList.querySelectorAll('.event-item input[type="checkbox"]:checked');
  selectedItems.forEach(item => item.parentElement.remove());
  // Implement logic to delete events from data source (database, etc.)
  toggleDeleteButton(); // Update button state
});

// Append delete button to the main section
document.querySelector('main').appendChild(deleteButton);
