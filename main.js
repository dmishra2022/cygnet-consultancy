// main.js

// Smooth scrolling for in-page navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for the contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        let isValid = true;

        // Validate Name
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            isValid = false;
            nameInput.classList.add('error');
            alert('Please enter your name.');
        } else {
            nameInput.classList.remove('error');
        }

        // Validate Email
        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            emailInput.classList.add('error');
            alert('Please enter a valid email address.');
        } else {
            emailInput.classList.remove('error');
        }

        // Validate Message
        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '') {
            isValid = false;
            messageInput.classList.add('error');
            alert('Please enter your message.');
        } else {
            messageInput.classList.remove('error');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
}

// Fade-in on scroll animation
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});


// React.js (if used) - Example structure
// In a real React project, you would use JSX and component files.

// function Header() {
//   return `<header>...</header>`;
// }

// function Hero() {
//   return `<section id="hero">...</section>`;
// }

// function Services() {
//   return `<section id="services">...</section>`;
// }

// function About() {
//   return `<section id="about">...</section>`;
// }

// function CaseStudies() {
//   return `<section id="case-studies">...</section>`;
// }

// function Testimonials() {
//   return `<section id="testimonials">...</section>`;
// }

// function Contact() {
//   return `<section id="contact">...</section>`;
// }
