// Select the toggle button and the dropdown menu
const toggleBtn = document.querySelector('.toggle-btn'); // The toggle button
const dropdownMenu = document.querySelector('.Dropdown'); // The dropdown menu

// Add a click event listener to the toggle button
toggleBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent event from bubbling up
    dropdownMenu.classList.toggle('active'); // Toggle the 'active' class
});

// Close the dropdown when clicking outside
document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
        dropdownMenu.classList.remove('active'); // Remove 'active' to hide the menu
    }
});
