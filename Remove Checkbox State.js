// Function to get the state of checkboxes
function getCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const states = [];
    checkboxes.forEach((checkbox) => {
        states.push(checkbox.checked);  // Store each checkbox's checked state
    });
    return states;
}

// Create a button to copy the checkbox states
const copyButton = document.createElement('button');
copyButton.id = 'copyButton';
copyButton.textContent = 'Copy Checkbox States';

// Append the button to the body (or any other container)
document.body.appendChild(copyButton);

// Add event listener to the button to copy to clipboard
copyButton.addEventListener('click', () => {
    const checkboxStates = getCheckboxStates();  // Get the checkbox states
    const statesString = JSON.stringify(checkboxStates);  // Convert to JSON string

    // Copy the stringified array to the clipboard
    navigator.clipboard.writeText(statesString).then(() => {
        console.log('Checkbox states copied to clipboard:', statesString);
    }).catch(err => {
        console.error('Failed to copy checkbox states:', err);
    });
});
