
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


function showProjectDetails(projectId) {
    alert(`Details about ${projectId} coming soon!`);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting me!');
    this.reset();
});
