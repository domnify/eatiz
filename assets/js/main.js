'use strict';
///////////////////////////////////////
// Navbar scroll
const logo = document.querySelector(".navigation__logo img");

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 400) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }
});


/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector(".open-btn")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")

function mobileMenu() {
    openBtn.classList.toggle("active");
    nav_list.classList.toggle("active")
    overlay.classList.toggle("hidden")
    navContact.classList.toggle("hidden")
}

openBtn.addEventListener("click", mobileMenu)
overlay.addEventListener("click", mobileMenu)


////////////////////////////////////////////////////
// portofolio-filter

const menuButtons = document.querySelector(".menu__buttons");
const menuBtn = document.querySelectorAll(".menu__buttons-item")
if (menuButtons) {
    menuButtons.addEventListener("click", (e) => {
        if (!e.target.classList.contains("menu__buttons-item")) return;

        if (menuBtn)
            menuBtn.forEach(el => el.classList.remove("active"))
        e.target.classList.add("active")

        let selector = e.target.dataset.filter

        $(".menu__items .row").isotope({
            filter: `${selector == "all" ? "*" : `.${selector}`}`
        });

    })
}


//////////////////////////////////////////////////////
// swiper
const insta_swiper = document.querySelector(".instagram__swiper");
const testimonial_swiper = document.querySelector(".testimonial__swiper");

if (insta_swiper) {
    var swiper = new Swiper(".instagram__swiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            990: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            }
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
    });
}

if (testimonial_swiper) {
    var swiper1 = new Swiper(".testimonial__swiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        grabCursor: true,
    });
}

///////////////////////////////////
// Date Picker

const reserveDate = document.getElementById("datepicker")
var date = new Date();
date.setDate(date.getDate());

if (reserveDate) {
    $('#datepicker').datepicker({
        startDate: date
    });
}

if (reserveDate) {
    reserveDate.addEventListener("keypress", (e) => {
        e.preventDefault();
    })

    reserveDate.attributes.placeholder.value = `${date.getDate()}/ ${date.getMonth() + 1} / ${date.getFullYear()}`
}

///////////////////////////////////////
//  Time Picker
const reserveTime = document.getElementById("reserve-time")

if (reserveTime) {

    $('#reserve-time').timepicker({
        interval: 60,
        minTime: '8:30am',
        maxTime: '10:00pm',
        defaultTime: '9pm',
        startTime: '8:30am',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
}

//////////////////////////////////////////
// meanu item equal height  &  Blog item equal height

const menu_first = document.querySelector(".menu__single-item--first img")
const menu_items = document.querySelectorAll(".menu__item img");
const blog_first = document.querySelector(".blog__single-item--first img")
const blog_items = document.querySelectorAll(".blog__img");

if (blog_first) {
    blog_first.src = "assets/img/blog/blog1.jpg"
    blog_first.addEventListener("load", function () {
        console.log("img loaded");
        if (blog_first && blog_items) {
            blog_items.forEach(el => {
                el.style.height = `${blog_first.getBoundingClientRect().height}px`
            })
        }
    })
}

if (menu_first) {
    menu_first.src = "assets/img/menu/menu_19.jpg"
    menu_first.addEventListener("load", function () {
        if (menu_first && menu_items) {

            menu_items.forEach(el => {
                el.style.height = `${menu_first.getBoundingClientRect().height}px`
            })
        }

    })
}



/////////////////////////////////////////////////////
// scroll

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});


////////////////////////////////////////////
// Aos
const aos_fade_up = document.querySelector("[data-aos=\"fade-up\"]")

if (aos_fade_up) {
    AOS.init({
        once: true,
        //  delay: 150
    });
}
////////////////////////////////////////////
// Magnific popup
const instagram__magnific = document.querySelector('.instagram__magnific')

if (instagram__magnific) {

    $(document).ready(function () {
        $('.instagram__magnific').magnificPopup({
            type: 'image',
            gallery: {
                enabled: false
            }
        });

    });
}