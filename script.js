window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

document.getElementById('navbar-toggle').addEventListener('click', function () {
    document.getElementById('navbar-menu').classList.toggle('active');
    document.querySelectorAll('.navbar-toggle .line').forEach(line => {
        line.classList.toggle('active');
    });
});

// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
