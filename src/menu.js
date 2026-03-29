export default class Menu {
    #ancestor = document.getElementById("content");

    #cuisines = ["Drinks", "Rice", "Local", "Chinese", "Italian", "French", "Mexican", "Nigerian", "Korean", "Japanese"]

    renderMenu() {
        const cuisinesDiv = document.createElement("div");
        cuisinesDiv.classList.add("cuisines")
        
        this.#cuisines.forEach(cuisine => {
            const cuisineBtn = document.createElement("button");
            cuisineBtn.setAttribute("type", "button")
            cuisineBtn.classList.add("cuisine");
            cuisineBtn.textContent = cuisine;
            cuisinesDiv.appendChild(cuisineBtn)
        })

        this.#ancestor.appendChild(cuisinesDiv)
    }
}