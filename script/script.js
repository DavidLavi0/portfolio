// Formulář
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
        formMessage.textContent = 'Prosím, vyplňte všechna pole.';
        formMessage.style.color = '#f06c6c';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Zadejte platný email.';
        formMessage.style.color = '#f06c6c';
        return;
    }

    formMessage.style.color = '#6fcf97';
    formMessage.textContent = 'Děkuji za zprávu! Brzy vám odpovím.';
    this.reset();
});

// Skill bars animace při scrollu
const skillBars = document.querySelectorAll('.fill');
window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50) {
            bar.style.width = bar.dataset.level;
        }
    });
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    hamburger.classList.toggle('active');
});
