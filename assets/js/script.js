document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = "scale(1.05)";
            this.style.border = "2px solid #ffcc00";
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = "scale(1)";
            this.style.border = "none";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const titles = document.querySelectorAll('.card .card-title');

    titles.forEach(title => {
        title.addEventListener('click', function() {
            let paragraph = this.nextElementSibling;
            if (paragraph.style.display === "none") {
                paragraph.style.display = "block";
            } else {
                paragraph.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});


function toggleParagraph() {
    var content = document.getElementById("quienes-somos-content");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.clickable-icon');

    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            const cardBody = this.closest('.card').querySelector('.card-text');
            if (cardBody.style.display === 'none') {
                cardBody.style.display = 'block';
            } else {
                cardBody.style.display = 'none';  
            }
        });
    });
});
