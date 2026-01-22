let menu_icon = document.querySelector("#menu-icon")
let nav_bar = document.querySelector(".navbar")

menu_icon.onclick = () => {
    menu_icon.classList.toggle('bx-x')
    nav_bar.classList.toggle('active');
}

const hireBtn = document.getElementById("hire_btn");
const popupForm = document.getElementById("popHire");
const closeBtn = document.querySelector(".close");
const form = popupForm.querySelector("form");

hireBtn.onclick = () => {
  popupForm.style.display = "block";
};

closeBtn.onclick = () => {
  popupForm.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === popupForm) {
    popupForm.style.display = "none";
  }
};

form.onsubmit = (event) => { 
    // event.preventDefault(); 
    popupForm.style.display = "none";
    alert("✅ Thank you! Your message has been sent.");
}