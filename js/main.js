function textBoxFocus(t) {
    document.getElementById("lbl" + t).classList.add("active")
}

function textBoxFocusout(t) {
    document.getElementById(t).value || document.getElementById("lbl" + t).classList.remove("active")
}

function menuClick() {
    var t = document.getElementById("nav-mobile");
    document.getElementById("main-content").classList.add("main"), t.style.transform = "translateX(0px)", document.querySelector(".main").addEventListener("click", closeMenu, !0)
}

function closeMenu() {
    var t = document.getElementById("nav-mobile");
    document.getElementById("main-content").classList.remove("main"), t.style.transform = ""
}

function dateMask(t) {
    document.getElementById(t).addEventListener("input", function(t) {
        var e = t.target.value.replace(/\D/g, "").match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
        t.target.value = e[2] ? e[1] + "/" + e[2] + (e[3] ? "/" + e[3] : "") : e[1]
    })
}
document.addEventListener("DOMContentLoaded", function() {
    var t = document.querySelectorAll(".datepicker"),
        e = document.querySelectorAll(".picker__holder");
    M.Datepicker.init(t, e)
}), document.addEventListener("DOMContentLoaded", function() {
    var t = document.querySelectorAll("select"),
        e = document.querySelectorAll("#ddl_tenure");
    M.FormSelect.init(t, e)
}), document.addEventListener("DOMContentLoaded", function() {
    var t = document.querySelectorAll(".dropdown-trigger-nav");
    M.Dropdown.init(t, {
        hover: !0,
        closeOnClick: 0
    })
}), document.addEventListener("DOMContentLoaded", function() {
    var t = document.querySelectorAll(".collapsible");
    M.Collapsible.init(t)
}), document.addEventListener("DOMContentLoaded", function() {
    var t = document.querySelectorAll(".carousel");
    M.Carousel.init(t, {
        indicators: !0,
        fullWidth: !0
    })
}), document.addEventListener("DOMContentLoaded", function() {
    var t = document.querySelectorAll(".modal");
    M.Modal.init(t)
});
/* document.addEventListener('DOMContentLoaded', function() {
    
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  }); */
var count = 1,
    smallCount = 1;

function scrollToTop(t) {
    var e = -window.scrollY / (t / 15),
        n = setInterval(function() {
            0 != window.scrollY ? window.scrollBy(0, e) : clearInterval(n)
        }, 15)
}

function init() {
    for (var t = document.getElementsByTagName("img"), e = 0; e < t.length; e++) t[e].getAttribute("data-src") && t[e].setAttribute("src", t[e].getAttribute("data-src"))
}
setInterval(function() {
    20 === count && (count = 1);
    var t = document.querySelector("#animate");
    t.style.background = "#6AC259", t.style.width = 5 * count + "px", t.style.height = 5 * count + "px", t.style.borderRadius = 5 * count / 2 + "px", t.style.opacity = 1 - count / 15, t.style.marginLeft = -2.5 * count + "px", t.style.marginTop = -2.5 * count + "px", count++
}, 200), setInterval(function() {
    8 === smallCount && (smallCount = 1), document.querySelectorAll(".animate-dot").forEach(function(t) {
        t.style.background = "#FEB75D", t.style.width = 4 * smallCount + "px", t.style.height = 4 * smallCount + "px", t.style.borderRadius = 4 * smallCount / 2 + "px", t.style.opacity = 1 - smallCount / 8, t.style.marginLeft = -2 * smallCount + "px", t.style.marginTop = -2 * smallCount + "px"
    }), smallCount++
}, 300), document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? document.getElementById("scroll-top").style.display = "block" : document.getElementById("scroll-top").style.display = "none"
    }
}), window.onload = init;

/* document.addEventListener("DOMContentLoaded", function() {
    var t = document.querySelectorAll("select"),
        e = document.querySelectorAll("#ddl_Residence");
    M.FormSelect.init(t, e)
}) */