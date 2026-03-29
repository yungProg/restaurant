export default class ContactUs {
    #ancestor = document.getElementById("content");

    renderThisPage() {
        const heading = document.createElement("h2");
        heading.textContent = "Let us know your preference(S)"
        this.#ancestor.appendChild(heading);
        this.#renderForm()
    }

    #renderForm() {
        const form = document.createElement("form");
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

        this.#ancestor.appendChild(form)
    }
}