document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let dateInput = document.getElementById("date").value;
    
    let selectedDate = new Date(dateInput);
    let currentDate = new Date();

    // Set the current date's time to midnight for accurate comparison
    currentDate.setHours(0, 0, 0, 0);
    
    if (name && email && dateInput) {
        if (selectedDate >= currentDate) {
            alert("Thank you, " + name + "! Your booking for " + dateInput + " has been confirmed.");
            document.getElementById("bookingForm").reset();
        } else {
            alert("Invalid booking! Please select a future date.");
        }
    } else {
        alert("Please fill in all fields before submitting.");
    }
});


// Infinite Scroll Effect
const scrollContainer = document.querySelector(".infinite-scroll");
scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    const revealOnScroll = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run initially in case some sections are already in view
});
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".testimonial-slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) slide.classList.add("active");
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Auto-slide every 4 seconds
    setInterval(nextSlide, 4000);
});
// Theme Toggle Button
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check if Dark Mode was previously enabled
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
}

// Toggle Dark Mode
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

