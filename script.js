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

function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    modal.style.display = 'flex';
    
    // Use the projectId to fetch project details (title, images, description) from your data source
    // For simplicity, you can hardcode the content here

    const projectDetails = {
        title: 'Project Title',
        images: ['project1-image1.jpg', 'project1-image2.jpg'],
        description: 'Project description goes here.'
    };

    modalContent.innerHTML = `
        <h2>${projectDetails.title}</h2>
        <div>
            ${projectDetails.images.map(image => `<img src="${image}" alt="${projectDetails.title}">`).join('')}
        </div>
        <p>${projectDetails.description}</p>
    `;
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

