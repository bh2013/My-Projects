document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    // Highlight the "About" section by default
    document.querySelector('.nav-link[data-target="about"]').classList.add('active');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(function(nav) {
                nav.classList.remove('active');
            });
            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            document.querySelectorAll('.content-section').forEach(function(section) {
                section.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            filterBtns.forEach(button => button.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            const projects = document.querySelectorAll('.project');

            projects.forEach(project => {
                if (filterValue === 'all') {
                    project.style.display = 'block';
                } else {
                    if (project.getAttribute('data-category') === filterValue) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                }
            });
        });
    });
});
