document.getElementById("contactForm").addEventListener("submit", function(e) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim()
    let result = document.getElementById("result");
    // Validation
    if(name === "" || email === "" || phone === "" || message === "") {
        result.style.color = "red";
        result.innerText = "Please fill in all fields.";
        return;
    }
    if(email.length("@")) {
        result.style.color = "red";
        result.innerText = "Please enter a valid email";
        return;
    }
    if(phone.length <10) {
        result.style.color = "red"
        result.innerText = "Please enter a valid phone number";
        return;
    }
    // Success
    result.style.color = "green";
    result.innerText = "Message sent successfully! We will contact you soon.";
let whatsappMessage =
"Name: " + name +
"%OAEmail: " + email +
"%OAPhone: " + phone +
"%OAService: " +service +
"%OAMessage: " + message;
})
// Service
function searchServices() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();
    let services = document.querySelectorAll(".service-card");
        services.forEach(service => {
            let text = service.textContent.toLowerCase();
            if (text.includes(filter)) {
                service.style.display = "";
            } else {
                service.style.display = "none"
            }
        })
}
// Project
const galleryImages = document.getElementById(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox=-img");
const closeBtn = document.querySelector(".close");
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
})
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none"
    }
});
