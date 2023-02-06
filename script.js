const slide = ["imgrec2/gr1.jpg", "imgrec2/gr2.jpg", "imgrec2/gr3.jpg", "imgrec2/gr4.jpg", "imgrec2/gr5.jpg"];
let numero = 0;
setInterval("ChangeSlide(1)", 4000);

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
const buttonPre = document.getElementById("precedent");
buttonPre.addEventListener("click",()=>ChangeSlide(-1))

const buttonSuiv = document.getElementById("suivant");
buttonSuiv.addEventListener("click",()=>ChangeSlide(1))