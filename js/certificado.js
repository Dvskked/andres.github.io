const botones = document.querySelectorAll(".btn-certificado");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const archivo = boton.getAttribute("data-file");

        const link = document.createElement("a");
        link.href = `certificado/${archivo}`;
        link.download = archivo;
        link.click();
    });
});
