let btnOne = document.getElementById("btn1");
let btnTwo = document.getElementById("btn2");
let btnThree = document.getElementById("btn3");
btnOne.addEventListener("click", function() {
    this.classList.toggle("active");
    btnTwo.classList.remove("active");
    btnThree.classList.remove("active");
    document.getElementById("coffee").classList.toggle("menu__coffee_show");
    document.getElementById("dessert").classList.remove("menu__dessert_show");
    document.getElementById("appertizes").classList.remove("menu__appertizes_show");
});
btnTwo.addEventListener("click", function() {
    this.classList.toggle("active");
    btnOne.classList.remove("active");
    btnThree.classList.remove("active");
    document.getElementById("coffee").className = "menu__coffee";
    document.getElementById("coffee").classList.remove("menu__coffee_show");
    document.getElementById("dessert").classList.toggle("menu__dessert_show");
    document.getElementById("appertizes").classList.remove("menu__appertizes_show");
});
btnThree.addEventListener("click", function() {
    this.classList.toggle("active");
    btnOne.classList.remove("active");
    btnTwo.classList.remove("active");
    document.getElementById("coffee").className = "menu__coffee";
    document.getElementById("coffee").classList.remove("menu__coffee_show");
    document.getElementById("dessert").classList.remove("menu__dessert_show");
    document.getElementById("appertizes").classList.toggle("menu__appertizes_show");
});
