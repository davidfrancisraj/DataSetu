$(document).ready(function () {
    AOS.init();
    $('#navToggle').on('click', function () {
        $('body').toggleClass('nav-active');
    });
});