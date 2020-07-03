$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $('nav').addClass('grey darken-4')
        } else {
            $("nav").removeClass("grey darken-4");
        }
    });


    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.first-carousel').carousel();


    // Modals 
    $('.modal').modal({
        dismissible: true,
        inDuration: 500,
        outDuration: 400,
    });

    //INIT DATEPICKER
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 10,
        today: 'Today',
        closeOnSelect: true
    });

    //INIT TIMEPICKER
    $('.timepicker').pickatime({
        default: 'now',
        twelvehour: true,
        donetext: 'go',
        cleartext: 'erase',
        canceltext: 'leave',
        autoclose: true
    });

    // Testimonials
    $('.testimonials').carousel({
        fullWidth: true
    })

    //ScrollFire
    const options = [
        {
            selector: ".hotel-content",
            offset: 0,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: ".outside-ul",
            offset: 0,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: ".detail",
            offset: 0,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: ".fixed-action-btn",
            offset: 0,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: ".brand-logo",
            offset: 0,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: ".cOne",
            offset: 0,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: ".ctwo",
            offset: 0,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: ".cthree",
            offset: 0,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: ".cfour",
            offset: 0,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: ".cfive",
            offset: 0,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: ".row-1",
            offset: 210,
            callback: function (el) {
                Materialize.fadeInImage($(el));
                // Materialize.toast('first one ')
            }
        }
    ];

    //initialize Scrollspy
    $('.scrollspy').scrollSpy();
    Materialize.scrollFire(options);


});