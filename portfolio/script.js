// Smooth scrolling to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Project details modal (future implementation example)
function showProjectDetails(projectId) {
    alert(`Details about ${projectId} coming soon!`);
}

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting me!');
    this.reset();
});
