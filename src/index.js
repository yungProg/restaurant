import "./style.css"
import Homepage from "./homepage.js";
import Menu from "./menu.js";
import ContactUs from "./contactUs.js";

const navBtns = document.querySelectorAll(".nav-btn");
navBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {  
        document.getElementById("content").textContent = "";
        navBtns.forEach(btn => btn.classList.remove("active"))     

        if (e.target.dataset.name === "home") {
            new Homepage().renderHomepage()
        } else if (e.target.dataset.name === "menu") {
            new Menu().renderMenu();
        } else if (e.target.dataset.name === "contact-us") {
            new ContactUs().renderThisPage()
        }

        e.target.classList.add("active")
    })
})

new Homepage().renderHomepage()