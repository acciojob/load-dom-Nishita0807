// Function to run when the DOM is loaded
function onDomContentLoaded() {
  // Set the inner HTML of the body to "DOM load success"
  document.body.innerHTML = "DOM load success";
}

// Add an event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDomContentLoaded);
