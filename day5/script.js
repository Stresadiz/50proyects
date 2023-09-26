let porcent = document.querySelector("h1");
let divPorcent = document.querySelector(".porcent");
let main = document.querySelector("main");

window.addEventListener("load", async ()=> {
    for (let i = 1; i <= 100; i++) {
        await new Promise((resolve) => {
            setTimeout(() => {
                porcent.innerHTML = `${i}%`;
                resolve();
            }, 50);
        })
    } 
    
    divPorcent.style.opacity = "0";
})


