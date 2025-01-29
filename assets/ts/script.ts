type Animal = {
    name: string,
    scientificName: string,
    animalClass: string,
    habitat: string,
    lifespan: number,
    food: string,
    imgUrl: string,
    id: number
}

let animalsArray : Animal[] = [];
let idNum : number = 0;

const cardArea = document.querySelector<HTMLDivElement>("#card-area")

const animalName = document.querySelector<HTMLInputElement>("#name");
const scientificName = document.querySelector<HTMLInputElement>("#scientific-name");
const animalClass = document.querySelector<HTMLInputElement>("#animal-class");
const lifespan = document.querySelector<HTMLInputElement>("#lifespan");
const habitat = document.querySelector<HTMLInputElement>("#habitat");
const food = document.querySelector<HTMLInputElement>("#food");
const imgUrl = document.querySelector<HTMLInputElement>("#img-url");

const submitBtn = document.querySelector<HTMLInputElement>("#submit-btn");
if(submitBtn && animalName && scientificName && habitat && food && lifespan && animalClass && imgUrl && cardArea) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()

        if(animalName.value !== "" && imgUrl.value !== "") {
            const newAnimal : Animal = {
                name: animalName.value,
                scientificName: scientificName.value,
                animalClass: animalClass.value,
                habitat: habitat.value,
                lifespan: Number(lifespan.value),
                food: food.value,
                imgUrl: imgUrl.value,
                id: idNum,
            };
            animalsArray.push(newAnimal);

            renderAnimals(animalsArray);

            idNum++;

            animalName.value = "";
            scientificName.value = "";
            animalClass.value = "";
            habitat.value = "";
            lifespan.value = "";
            food.value = "";
            imgUrl.value = "";
        } else {
            window.alert("Please choose a name and image")
        }
    })
}

function renderAnimals(data : Animal[]) {
    if(cardArea) {
        cardArea.innerHTML = "";

        data.forEach((item) => {
            // CREATE CARD WRAPPER
            const newCardWrapper = document.createElement("div");
            newCardWrapper.classList.add("card-wrapper")
            cardArea.appendChild(newCardWrapper)

            // CREATE NEW CARD
            const newCard = document.createElement("div");
            newCard.setAttribute(`style`, `background-image: url("${item.imgUrl}")`);
            newCard.classList.add("card");
            newCardWrapper.appendChild(newCard);

            // FILL CARD WITH INPUTS
            const newTitle = document.createElement("div");
            newTitle.classList.add("card-title")
            newTitle.innerHTML = `
                <h2>${item.name}</h2>
                <p>${item.scientificName}</p>
                <p>${item.animalClass}</p>
            `;
            newCard.appendChild(newTitle);

            const newInfos = document.createElement("ul");
            newInfos.classList.add("card-infos")
            if(item.habitat !== "") {
                newInfos.innerHTML += `<li>Habitat: ${item.habitat}</li>`;
            }
            if(item.lifespan !== 0) {
                newInfos.innerHTML += `<li>Lifespan: ${item.lifespan} year(s)</li>`;
            }
            if(item.food !== "") {
                newInfos.innerHTML += `<li>Eats: ${item.food}</li>`;
            }
            newCard.appendChild(newInfos);

            // // CREATE REMOVE BUTTON
            const removeBtn = document.createElement("button");
            removeBtn.setAttribute("type", "button");
            removeBtn.textContent = "×"
            newCardWrapper.appendChild(removeBtn);

            removeBtn.addEventListener("click", () => {
                removeAnimal(item)
            })
        })
    }
}

function removeAnimal(data : Animal) {
    animalsArray = animalsArray.filter((item) => item.id !== data.id)
    renderAnimals(animalsArray);
}