document.getElementById("btn-cv").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "cv/Andres_Forero_CV.docx";
    link.download = "Andres_Forero_CV.docx";
    link.click();
});

function github(){
    window.open("https://github.com/Dvskked", "_blank");
}


window.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.progress');
    bars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        // Pequeño timeout para que se note la animación al entrar
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300);
    });
});


const contactForm = document.getElementById('portfolioContactForm');
const formStatus = document.getElementById('formStatus');

if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simular carga
        const btn = contactForm.querySelector('button');
        btn.innerText = "Enviando...";
        btn.disabled = true;

        setTimeout(() => {
            // Mostrar éxito
            formStatus.innerText = "¡Gracias Andrés! Tu mensaje ha sido enviado (simulación).";
            formStatus.classList.remove('hidden');
            formStatus.classList.add('success');
            
            // Limpiar
            contactForm.reset();
            btn.innerText = "Enviar Mensaje";
            btn.disabled = false;
        }, 1500);
    });
}