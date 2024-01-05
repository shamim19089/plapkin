// Mixitup

var mixer = mixitup('.work-grid');
// hamburger Menu
function openMenu(){
    document.getElementById('hamburger').style.width="100%";
}
function closeMenu(){
    document.getElementById('hamburger').style.width="0%";
}
// smoth scroll
$('.hb-menu a, .scroll-down a').on('click',function(){
    $('html,body').animate({
        scrollTop: $($.attr(this,'href')).offset().top
    },1000);
    return false;
});

