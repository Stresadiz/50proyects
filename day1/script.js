let cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.addEventListener("click", ()=> {

        card.classList.toggle("card--active");

        for (let i = 0; i < cards.length; i++) {
            if (i != index) {
                cards[i].classList.remove("card--active")
            }
        }
    })
});
