document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("contact-modal");
    const contactLink = document.getElementById("contact-link");
    const closeBtn = document.getElementsByClassName("close")[0];

    contactLink.onclick = function(event) {
        event.preventDefault(); 
        modal.style.display = "block";
        modal.style.opacity = "1";
    }

    closeBtn.onclick = function() {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.opacity = "0";
            setTimeout(() => {
                modal.style.display = "none";
            }, 500);
        }
    }
});