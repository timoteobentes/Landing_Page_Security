// $(document).ready(function () {
//     $("html").niceScroll();
// });

$('.nav a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 500);
});

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", function() {
    nav.classList.toggle('visible');
})