// slick-slide-website

$(document).ready(function(){
    $('.tab-content-item').hide()
    $('.tab-content-item:first-child').fadeIn()
    $('.nav-tab-menu li').click(function(){
  
        // active nav tab
        $('.nav-tab-menu li').removeClass('activeMenu')
        $(this).addClass('activeMenu')
  
        // show tab-content-item
      
        let id_tab_content = $(this).children('.link-menu-tab').attr('href')
        $('.tab-content-item').hide()
        $(id_tab_content).fadeIn()
        return false;
    })
})

//open-menu-toggler

$(document).ready(function () {
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.tabs').toggleClass('open');
    });
});

//vid-auto-play
document.getElementById('vid').play();