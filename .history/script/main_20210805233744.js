console.log("hello, je suis ");
document.querySelectorAll('.menu').addEventListener("click", openMenu);

function openMenu(){

    document.querySelector('.menuDrop').classList.toggle("active");
}
