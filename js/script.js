
/* Slide banner */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("header__slide--banner");
    var dots = document.getElementsByClassName("header__slide--dots--dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" actived", "");
    }
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " actived";
    setTimeout(showSlides, 4000);
}


/*    Scroll change background-color navbar     */

window.onscroll = function() {myFixedNavbar()};

//Header 
var navbar = document.getElementById("scrollNavbar");
var fixedNavbar = navbar.offsetTop;

function myFixedNavbar() {
    if (window.pageYOffset > fixedNavbar){
        navbar.classList.add("fixedNavbar");
  
    } else {
        navbar.classList.remove("fixedNavbar");
    }
}

// GO-TOP button 
document.onscroll = function() {goTopbtn()}; //Co the dung document thay window

function goTopbtn() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("go-top").style.opacity = "1";
    } else {
        document.getElementById("go-top").style.opacity = "0";
    }
}

// When the user clicks on the button, scroll to the top of the document
function goTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.style.transition = "all 2s";
}


// JQUERY
$(document).ready(function(){
    // Nav bar
    $(document).on('click','.header__navbar .active-nav', function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    // Slide Products
    var show = 4.5;
    var wid = $('.product-slide__wrap').width() / show;

    $('.product-slide__wrap--content--item').width(wid);
    $('.product-slide__wrap--content').width(wid*show);
    
    function slideProducts(){
        $('.product-slide__wrap--content--item:first-child').animate({
            marginLeft: -wid*(1+'15px')
        }, 'slow', "linear", function(){
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slideProducts, 3000);

    $('.product-slide--wrap').hover(function(){
        clearInterval(timer);
    }, function(){
        timer = setInterval(slideProducts, 3000);
    });

// Slide menu-plus
    var showMenuPlus = 1,
        widMenuPlus = $('.menu-plus__slide').width() / showMenuPlus;

    $('.menu-plus__slide--wrap--item').width(widMenuPlus);
    $('.menu-plus__slide--wrap').width(widMenuPlus*showMenuPlus);
  
    function slideMenuPlus(){
        $('.menu-plus__slide--wrap--item:first-child').animate({
            marginLeft: -widMenuPlus
        }, 'slow', "linear", function(){
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slideMenuPlus, 3000);

    $('.menu-plus__slide--wrap').hover(function(){
        clearInterval(timer);
    }, function(){
        timer = setInterval(slideMenuPlus, 3000);
    });

// Slide Share-Info
    var showShareInfo = 3.5,
        widShareInfo = $('.share-info__slide').width() / showShareInfo;
   
    $('.share-info__slide--wrap--item').width(widShareInfo);
    $('.share-info__slide--wrap').width(widShareInfo*showShareInfo);

    function slideShareInfo(){
        $('.share-info__slide--wrap--item:first-child').animate({
            marginLeft: -widShareInfo*(1+'25px')
        }, 'slow', "linear", function(){
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slideShareInfo, 3000);

    $('.share-info__slide').hover(function(){
        clearInterval(timer);
        }, function(){
        timer = setInterval(slideShareInfo, 3000);
    });
    
});