jQuery(document).ready(function(){
    $('.slide').owlCarousel({
        items:1,
        loop:true,
        margin:30,
        center:true,
        dots: true,
        responsiveClass:true,
        navText: ['<svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left fa-w-10 fa-3x"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>', '<svg width="30px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-3x"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>'],
        nav:true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: false,
    });
    $('.teams').owlCarousel({
        items:6,
        loop:true,
        margin:30,
        nav:true,

        center:true,
        dots: true,
        responsiveClass:true,
        navText: ['<svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left fa-w-10 fa-3x"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>', '<svg width="30px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right fa-w-10 fa-3x"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>'],

        autoplay: false,
        autoplayHoverPause: true,
        center: false,
        responsive:{
            0:{
                items:2,
                margin:10
            },
            600:{
                items:3
            },
            1000:{
                items:6,
            }
        }
    });

    
});


$('input.input-qty').each(function () {
    var $this = $(this),
        qty = $this.parent().find('.is-form'),
        min = Number($this.attr('min')),
        max = Number($this.attr('max'))
    if (min == 0) {
        var d = 0
    } else d = min
    $(qty).on('click', function () {
        if ($(this).hasClass('minus')) {
            if (d > min) d += -1
        } else if ($(this).hasClass('plus')) {
            var x = Number($this.val()) + 1
            if (x <= max) d += 1
        }
        $this.attr('value', d).val(d)
    });
});

//Menu
var ajaxCart = (function(module, $) {

    'use strict';

    // Public functions
    var init, loadCart;

    // Private general variables
    var settings, isUpdating, $body;

    // Private plugin variables
    var $formContainer, $addToCart, $cartCountSelector, $cartCostSelector, $cartContainer, $drawerContainer;

    loadCart = function () {
        $body.addClass('drawer--is-loading');
        HaravanAPI.getCart(cartUpdateCallback);
    };
    module = {
        init: init,
        load: loadCart
    };

    return module;

}(ajaxCart || {}, jQuery));

//Images
function lazyLoadImages () {
    var lazyImages = $('.thumbnail-lazy');
    if(lazyImages.length > 0){
        lazyImages.each(function () {
            var srcImages = $(this).attr('data-src');
            var altImages = $(this).attr('data-alt');
            if(srcImages){
                $(this).stop().animate({opacity: 0},500,function(){
                    $(this).html('<img src="'+ srcImages +'" alt="'+ altImages +'" />').animate({opacity: 1},{duration:1000});
                    $(this).addClass('loaded');
                });
            }
        });
    }
}

jQuery(document).ready(function($){     
    if($(".btn-top").length > 0){
        $(window).scroll(function () {
            var e = $(window).scrollTop();
            if (e > 800) {
                $(".btn-top").show()
            } else {
                $(".btn-top").hide()
            }
        });
        $(".btn-top").click(function () {
            $('body,html').animate({
                scrollTop: 0
            })
        })
    }

    // script for menu mobile
    if($(window).width() < 768){
        var header = document.getElementById('header');
        header.classList.add("nav-top");
    }
    
    if($(window).width() < 768){
        var header = document.getElementById('header');
        header.classList.add("nav-top");
    }
    
    var navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));

    navExpand.forEach(function (item) {
        item.querySelector('.nav-link').addEventListener('click', function () {return item.classList.add('active');});
        item.querySelector('.nav-back-link').addEventListener('click', function () {return item.classList.remove('active');});
    });

    // ---------------------------------------
    // not-so-important stuff starts here

    var ham = document.getElementById('ham');
    ham.addEventListener('click', function () {
        document.body.classList.toggle('nav-is-toggled');
    });

    var overlay = document.getElementById('overlay');
    overlay.addEventListener('click', function () {
        document.body.classList.toggle('nav-is-toggled');
    });

    $(document).on("click", ".nav-expand-link > i", function () {
       return false;
    });       
});
