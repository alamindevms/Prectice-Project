// left side menu-bar show-hide & active class
$('.sub-menu').hover(function(){
	$('.sub-menu .sub-menu-wrap').toggleClass('show');
})

$('.sidebar .navbar-nav .nav-item').click(function(){
	$(this).addClass('active').siblings().removeClass('active'); 
})


// mobile-view
$('.mobile-view-icon').on('click',function(){
    if($(this).attr('class') == 'mobile-view-icon') {
        $(this).addClass('active');
        $('.main-sidebar').addClass('active');
        $('.mobile-view-icon .svg-inline--fa').addClass('fa-times');
        $('.mobile-view-icon .svg-inline--fa').removeClass('fa-bars');
      }
    else {
      $(this).removeClass('active');
      $('.main-sidebar').removeClass('active');
      $('.mobile-view-icon .svg-inline--fa').addClass('fa-bars');
      $('.mobile-view-icon .svg-inline--fa').removeClass('fa-times');
    }
});