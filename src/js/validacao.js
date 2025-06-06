document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate Name
    const name = document.getElementById('name');
    const nameError = name.nextElementSibling;
    if (!name.value.trim()) {
        nameError.textContent = 'Por favor, insira seu nome';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    
    // Validate Email
    const email = document.getElementById('email');
    const emailError = email.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.value.trim()) {
        emailError.textContent = 'Por favor, insira seu email';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Por favor, insira um email válido';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }
    
    if (isValid) {
        alert('Formulário enviado com sucesso!');
        this.reset();
    }
});