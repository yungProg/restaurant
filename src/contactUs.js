export default class ContactUs {
    #ancestor = document.getElementById("content");

    renderThisPage() {
        this.#renderForm()
        document.querySelector("form").addEventListener("submit", (e) => e.preventDefault())

    }

    #renderForm() {
        const form = document.createElement("form");
        const heading = document.createElement("h2");
        heading.textContent = "Let us know your preference(s)"
        form.appendChild(heading);
        const nameInput = document.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("placeholder", "Name");
        const preference = document.createElement("textarea");
        preference.placeholder = "I want ...";
        const submitBtn = document.createElement("button");
        submitBtn.setAttribute("type", "submit");
        submitBtn.textContent = "Submit preference"

        form.appendChild(nameInput);
        form.appendChild(preference)
        form.appendChild(submitBtn)

        this.#ancestor.appendChild(form)
    }
}