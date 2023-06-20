// Get the dropdown button and content elements
var dropdownButton = document.querySelector('.dropbtn');
var dropdownContent = document.querySelector('.dropdown-content');

// Add a click event listener to the button
dropdownButton.addEventListener('click', function() {
  // Toggle the visibility of the dropdown content
  dropdownContent.classList.toggle('show');
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});
