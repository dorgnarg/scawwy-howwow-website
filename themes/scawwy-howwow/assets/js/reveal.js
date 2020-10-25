
function revealHidden(e, id) {
        el = document.getElementById(id);
        if (!el.classList.contains("hidden")) {
                e.innerHTML = "Collapse";
                el.style.display = "block"
        } else {
                e.innerHTML = "Details";
                el.style.display = "none"
        }
        el.classList.toggle("hidden");
}
