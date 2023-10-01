let main = document.querySelector("main");
let countCards = 1;

window.addEventListener("scroll", ()=>{
    let scrollTop = window.scrollY;

    if (scrollTop > countCards*110 && countCards < 11) {
        countCards++;

        let cardNew = document.createElement("div");
        cardNew.classList.add("card");

        /* Class set */
        if (countCards%2 ==0) {
            cardNew.classList.add("card--transf");
        } else {
            cardNew.classList.add("card--transfLeft"); 
        }

        /* Title Card */
        let cardTitle = document.createElement("h1");
        cardTitle.classList.add("card__title");
        cardTitle.innerText = "Card Title";
        cardNew.appendChild(cardTitle)

        /* Lorem Ipsum */
        let cardText = document.createElement("p");
        cardText.classList.add("card__text");
        cardText.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam natus deleniti, sed, ratione excepturi voluptatem, ipsam culpa necessitatibus aspernatur ipsa laudantium temporibus tempora nesciunt nemo. Reprehenderit ullam eligendi odit quas."
        cardNew.appendChild(cardText);
        
        main.appendChild(cardNew);
    }
})
