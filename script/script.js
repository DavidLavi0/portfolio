// Formulářová validace a zpráva
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    const formMessage = document.getElementById('formMessage');

    if(name === '' || email === '' || message === '') {
        formMessage.textContent = 'Prosím, vyplňte všechna pole.';
        formMessage.style.color = '#f06c6c';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        formMessage.textContent = 'Zadejte platný email.';
        formMessage.style.color = '#f06c6c';
        return;
    }

    formMessage.style.color = '#6fcf97';
    formMessage.textContent = 'Děkuji za zprávu! Brzy vám odpovím.';
    this.reset();
});


// Automatické otáčení carouselu každých 3,5s
setInterval(() => {
    nextBtn.click();
}, 3500);

// Responsivní přepočet šířky karty při resize okna
window.addEventListener('resize', () => {
    cardWidth = cards[0].offsetWidth + 32;
});
