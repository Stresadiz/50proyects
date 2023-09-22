let steps = document.querySelectorAll(".step");
let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");
let count = 0;
let frontline = document.querySelector(".frontline");
let actualEm = 0;

btnNext.addEventListener("click", ()=> {
    if (count == 2) {
        btnNext.classList.add("btn--disable");
    }

    if (count <= steps.length-2) {
        btnPrev.classList.remove("btn--disable");
        count++;
        steps[count].classList.toggle("step--active");
        actualEm+=6.5;
        frontline.style.width = `${actualEm}em`
    }
})

btnPrev.addEventListener("click", ()=> {
    if (count == 1) {
        btnPrev.classList.add("btn--disable");
    }

    if (count > 0) {
        btnNext.classList.remove("btn--disable");
        count--;
        steps[count+1].classList.remove("step--active");
        actualEm-=6.5;
        frontline.style.width = `${actualEm}em`;
    }
})
