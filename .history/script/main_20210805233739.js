console.log("hello, e");
document.querySelectorAll('.menu').addEventListener("click", openMenu);

function openMenu(){

    document.querySelector('.menuDrop').classList.toggle("active");
}
