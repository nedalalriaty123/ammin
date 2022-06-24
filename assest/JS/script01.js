let infoBtn = document.querySelectorAll("#information");
let adjBtn = document.querySelectorAll("#adjust");
let divInfo = document.querySelectorAll(".info");
let divAdj = document.querySelectorAll(".adjust");
let ChatIcon = document.querySelector("#Chat");

let adj = divAdj[0].getAttribute("class").split(" ");
let info = divInfo[0].getAttribute("class").split(" ");


infoBtn[0].onclick = _ => {
    divInfo[0].classList.toggle("d-none");
    infoBtn[0].children[0].classList.toggle("Rotate");
    infoBtn[0].classList.toggle("changeMode");
    if ((adj.includes("d-none")) !== false) {
        divAdj[0].classList.add("d-none");
        adjBtn[0].classList.remove("changeMode");
    }

}
adjBtn[0].onclick = _ => {
    divAdj[0].classList.toggle("d-none");
    adjBtn[0].classList.toggle("changeMode");
    if ((info.includes("d-none")) !== false) {
        divInfo[0].classList.add("d-none");
        infoBtn[0].children[0].classList.remove("Rotate");
        infoBtn[0].classList.remove("changeMode");
    }
}

window.onscroll = _ => {
    if (scrollY > 200) {
        ChatIcon.classList.remove("d-none")
    } else {
        ChatIcon.classList.add("d-none")
    }


}

