let btnHidden = document.querySelector("#btn--search");
let inputSearch = document.querySelector("#input--search");

btnHidden.addEventListener("click", ()=>{
    inputSearch.classList.toggle("input--disable");
    inputSearch.style.transition = "width 0.7s";
})