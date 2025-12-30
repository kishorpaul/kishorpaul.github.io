let menu_icon = document.querySelector("#menu-icon")
let nav_bar = document.querySelector(".navbar")

menu_icon.onclick = () => {
    menu_icon.classList.toggle('bx-x')
    nav_bar.classList.toggle('active');
}