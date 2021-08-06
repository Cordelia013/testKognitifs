console.log("hello, je suis là");

document.querySelector("menu").addEventListener("click", ev);

function (e){
    e.preventDefault();
    document.querySelector(".menuDrop").classList.toggle("active");
}
