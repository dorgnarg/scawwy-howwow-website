
function revealHidden(e, id) {
        el = document.getElementById(id);
        str1 = "iframe-".concat(id);
        ifr= document.getElementById(str1);
        if (!el.classList.contains("hidden")) {
                e.innerHTML = "Collapse";
                el.style.display = "block"
        } else {
                e.innerHTML = "Details";
                el.style.display = "none"
        }
        el.classList.toggle("hidden");
        ifr.classList.toggle("is-align-self-center");
}
