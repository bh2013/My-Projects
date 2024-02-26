document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            const projects = document.querySelectorAll('article');
            projects.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.style.display = '';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function hideAll(){
    contact = document.getElementById("contact")
    profile = document.getElementById("profile")
    aboutMe = document.getElementById("aboutMe")
    aboutMe.style.display = "none"
    contact.style.display = "none"
    profile.style.display = "none"

}


function profile(clickedElement) {
    hideAll()
    profile = document.getElementById("profile")
    profile.style.display = "block"
}
function aboutMe(clickedElement) {
    hideAll()
    aboutMe = document.getElementById("aboutMe")
    aboutMe.style.display = "block"
}
function contact(clickedElement) {
    hideAll()
    contact = document.getElementById("contact")
    contct.style.display = "block"
}