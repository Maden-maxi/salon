'use strict';
$(document).foundation() ;
$(function() {
    $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    $('.slider-wrapper .orbit').hover( function () {
        $(this).find('.orbit-previous, .orbit-next').removeClass('hide-for-large');
    },function () {
        $(this).find('.orbit-previous, .orbit-next').addClass('hide-for-large');
    });
    $('#slider').on('slidechange.zf.orbit', function (e) {
        var $this = $(this),
            index = $this.find('.is-active').index('.orbit-slide'),
            menu = $('#menu-services ul');
        menu.children('li').removeClass('active').eq(index).addClass('active');
        $.ajax({

        });
    } );


    $('[type="tel"]').mask("+38 (999) 999-9999"); //specifying options

    $('.discount-action').submit(event, function () {
        console.log(event);
        console.log($(this).serialize());
        event.preventDefault();
        var formData = $(this).serialize();
        var send = "send.php"; //enter url to php string what send data

    });

});

