// The button to show Visitor Code
<button class="omnibrowse-code-button">Get CoBrowsing code</button>;

function showVisitorCode() {
  var code = document.createElement('sm-visitor-code');
  document.body.appendChild(code);
}

// Add a "click" event listener to the button. <sm-visitor-code />
// is added to the DOM when the button is clicked.
document
  .querySelector('.omnibrowse-code-button')
  .addEventListener('click', showVisitorCode);
