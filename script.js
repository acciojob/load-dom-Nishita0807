//your JS code here. If required.
// Function to run when the DOM is loaded
function onDomContentLoaded() {
  // Create a new paragraph element
  var paragraph = document.createElement("p");

  // Set the text content of the paragraph
  paragraph.textContent = "DOM load success";

  // Append the paragraph to the body
  document.body.appendChild(paragraph);
}

// Add an event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", onDomContentLoaded);
