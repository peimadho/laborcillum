// Select the element
const gfFixEl = document.querySelector('select[name="_gform_setting_event"]');

// Check if the element exists to avoid errors
if (gfFixEl) {
    // Add an event listener for the 'change' event
    gfFixEl.addEventListener('change', function(event) {
        // Get the selected value
        const selectedValue = event.target.value;

        // Perform some action based on the selected value
        console.log(`The selected event is: ${selectedValue}`);
        
        // Example: Display an alert with the selected value
        alert(`You have selected: ${selectedValue}`);
    });
} else {
    console.warn('The select element with the name "_gform_setting_event" was not found.');
}
