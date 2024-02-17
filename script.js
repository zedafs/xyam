function updateDateTime() {
    const dateTimeElement = document.getElementById('datetime');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    dateTimeElement.textContent = formattedDate;
}

updateDateTime(); // Initial call

// Update date and time every second
setInterval(updateDateTime, 1000);
