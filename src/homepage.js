import featured0 from "./assets/featured0.jpg";
import featured1 from "./assets/featured1.jpg";
import eins from "./assets/eins.jpg";
import zwei from "./assets/zwei.jpg";
import drei from "./assets/drei.jpg";
import vier from "./assets/vier.jpg";
import funf from "./assets/funf.jpg";


export default class Homepage {
    #ancestor = document.getElementById("content");

    #createHTMLElement(elementName, elementAttributes = {}) {
        const el = document.createElement(elementName);
        for (const key in elementAttributes) {
            const value = elementAttributes[key];
            el.setAttribute(key, value) 
        }
        return el
    }

    #appendToParent(parentSelector, childElement) {
        const parent = document.querySelector(parentSelector);
        parent.appendChild(childElement)
    }

    #resetPage() {
        this.#ancestor.textContent = ""
    }

    renderHomepage() {
        // clear display
        this.#resetPage()    

        // create 3 main sections
        const mainSectionsObjects = [
            ["section", {class: "special-dish"}], ["section", {class: "local-feature"}],["section", {class: "featured-foods"}]
        ]
        mainSectionsObjects.forEach(item => {
            const newElement = this.#createHTMLElement(item[0], item[1])
            this.#appendToParent("#content", newElement)
        })

        // render first two sections
        const firstTwoSectionsObjects = {
            "special-dish": {img: {src: featured0, alt: "Featured intercontinental dish"}, p: "Enjoy our intercontinental dish!"},
            "local-feature": {img: {src: featured1, alt: "Featured local dish"}, p: "Finger-licking from mukase!"}
        }
        for (const section in firstTwoSectionsObjects) {
            const descendant = firstTwoSectionsObjects[section];
            const descendantElement = this.#createHTMLElement("img", descendant.img)
            const paragraph = document.createElement("p");
            paragraph.textContent = firstTwoSectionsObjects[section].p
            this.#appendToParent(`.${section}`, descendantElement)
            this.#appendToParent(`.${section}`, paragraph)
        }
    }

    #renderFeaturedFoods() {
        const featuredFoods = [
            {
                
            }
        ]
    }
}
