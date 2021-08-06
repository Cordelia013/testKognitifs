console.log("hello, je suis là");

document.get("menu").addEventListener("click", openMenu);

function openMenu(){

    document.querySelector(".menuDrop").classList.toggle("active");
}
