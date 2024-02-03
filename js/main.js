/* nav icon nav mobile*/

const navBtn = document.querySelector('.toggle-nav');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.header-nav');

navBtn.onclick = function () {
    nav.classList.toggle('nav-mobile');
    menuIcon.classList.toggle('menu-icon-active');
}

/* slider */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    fade: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// star rating

const ratingItemsList = document.querySelectorAll('.rating-item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
    item.addEventListener('click', () =>
        item.parentNode.dataset.totalValue = item.dataset.itemValue
    )
);

// password border

const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

function checkPasswordMatch() {
    if (password1.value !== password2.value) {
        password1.classList.add('mismatch');
        password2.classList.add('mismatch');
        password1.classList.remove('match');
        password2.classList.remove('match');
    } else {
        password1.classList.remove('mismatch');
        password2.classList.remove('mismatch');
        password1.classList.add('match');
        password2.classList.add('match');
    }
}

password1.addEventListener('input', checkPasswordMatch, valid);
password2.addEventListener('input', checkPasswordMatch, valid);

// allows you to use the "fill" property to img src svg

$("img.img-svg").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(imgURL, function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});