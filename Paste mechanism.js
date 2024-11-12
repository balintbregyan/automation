// Create a button to paste the checkbox states
const pasteButton = document.createElement('button');
pasteButton.id = 'pasteButton';
pasteButton.textContent = 'Paste Checkbox States';

// Append the button to the body (or any other container)
document.body.appendChild(pasteButton); 

// Define the setCheckboxStates function to update checkbox states
function setCheckboxStates(states) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox, index) => {
        if (states[index] !== undefined) {  // Ensure there's a corresponding state
            checkbox.checked = states[index] === 'true' || states[index] === true; // Ensure it's a boolean
        } else {
            checkbox.checked = false; // Uncheck any extra checkboxes
        }
    });
}

// Add event listener to the button to paste from clipboard
pasteButton.addEventListener('click', () => {
    navigator.clipboard.readText().then(text => {
        console.log('Clipboard text:', text); // Log the raw clipboard content

        // Try to manually parse the clipboard content
        try {
            // Remove surrounding brackets if they exist, and split by comma
            const cleanedText = text.replace(/[\[\]]+/g, '').split(',');
            
            // Trim whitespace and convert "true"/"false" strings to actual booleans
            const checkboxStates = cleanedText.map(item => item.trim() === 'true');

            console.log('Parsed checkbox states:', checkboxStates);

            // Apply the checkbox states
            setCheckboxStates(checkboxStates);
            console.log('Checkbox states applied from clipboard!');
        } catch (err) {
            console.error('Failed to process clipboard content:', err);
        }
    }).catch(err => {
        console.error('Failed to read clipboard:', err);
    });
});
