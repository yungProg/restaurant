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

    renderHomepage() {
        // create 3 main sections
        const mainSectionsObjects = [
            ["section", {class: "special-dish"}], ["section", {class: "local-feature"}]
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

        // render featured foods
        this.#renderFeaturedFoods()
    }

    #renderFeaturedFoods() {
        const featuredFoods = [
            {
                name: "Eins essen",
                price: "GH₵ 23.26",
                image: eins,
                alt: "Food one"
            },
            {
                name: "Zwei essen",
                price: "GH₵ 12.06",
                image: zwei,
                alt: "Food two"
            },
            {
                name: "Drei essen",
                price: "GH₵ 9.20",
                image: drei,
                alt: "Food three"
            },
            {
                name: "Vier essen",
                price: "GH₵ 19.99",
                image: vier,
                alt: "Food four"
            },
            {
                name: "Funf essen",
                price: "GH₵ 4.61",
                image: funf,
                alt: "Food five"
            },
        ];
        const featuredFoodsDiv = this.#createHTMLElement("div", {class: "featured-foods"});        

        featuredFoods.forEach(featuredFood => {
            const featuredFoodDiv = this.#createHTMLElement("div", {class: "featured-food"});
            const imgWrapperDiv = this.#createHTMLElement("div", {class: "img-wrapper"});
            const img = this.#createHTMLElement("img", {src: featuredFood.image, alt: featuredFood.alt});
            const foodDetailDiv = this.#createHTMLElement("div", {class: "food-detail"});
            const foodNameP = this.#createHTMLElement("p");
            foodNameP.textContent = featuredFood.name
            const foodPriceP = this.#createHTMLElement("p");
            foodPriceP.textContent = featuredFood.price
            const orderButton = this.#createHTMLElement("button", {type: "button"});
            orderButton.textContent = "Try out"

            imgWrapperDiv.appendChild(img);
            foodDetailDiv.appendChild(foodNameP);
            foodDetailDiv.appendChild(foodPriceP);
            featuredFoodDiv.appendChild(imgWrapperDiv);
            featuredFoodDiv.appendChild(foodDetailDiv);
            featuredFoodDiv.appendChild(orderButton);
            featuredFoodsDiv.appendChild(featuredFoodDiv)
        })
        this.#ancestor.appendChild(featuredFoodsDiv)
    }
}
