let menu = document.querySelector(".menu");
let main = document.querySelector("main");
let menuRotate = 0;
let mainRotate = 0;
let count = 1;
let links = document.querySelector(".links");

menu.addEventListener("click", ()=>{
    count++
    rotate(count)
})

function rotate(count) {
    let left

    if (count%2 == 0) {
        menuRotate -= 90
        mainRotate -= 20    
        left = 2
    } else {
        menuRotate += 90
        mainRotate += 20
        left = -9
    }

    menu.style.transform = `rotate(${menuRotate}deg)`
    menu.style.transition = "transform 1s";
    main.style.transform = `rotate(${mainRotate}deg)`
    main.style.transition = "transform 1s";

    links.style.left = `${left}em`;
    links.style.transition = "left 1s"
}