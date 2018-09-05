const gallery = document.querySelectorAll(".gallery-item");

function toggleOpen() {
    this.classList.toggle("open");
};

function toggleActive(e) {
    if(e.propertyName.includes("flex")) {
        this.classList.toggle("open-active")
    }
};

gallery.forEach(g => g.addEventListener("click", toggleOpen));
gallery.forEach(g => g.addEventListener("transitionend", toggleActive));