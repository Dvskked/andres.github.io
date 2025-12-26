document.getElementById("btn-cv").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "cv/Andres_Forero_CV.docx";
    link.download = "Andres_Forero_CV.docx";
    link.click();
});

function github(){
    window.open("https://github.com/Dvskked", "_blank");
}