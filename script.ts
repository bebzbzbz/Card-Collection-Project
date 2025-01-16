type Animal = {
    name: string,
    scientificName: string,
    animalClass: string,
    habitat: string,
    lifespan: number,
    food: string,
    imgUrl: string
}
const submitBtn = document.querySelector<HTMLInputElement>("#submit-btn");
const cardArea = document.querySelector<HTMLDivElement>("#card-area")

const animalName = document.querySelector<HTMLInputElement>("#name");
const scientificName = document.querySelector<HTMLInputElement>("#scientific-name");
const animalClass = document.querySelector<HTMLInputElement>("#animal-class");
const lifespan = document.querySelector<HTMLInputElement>("#lifespan");
const habitat = document.querySelector<HTMLInputElement>("#habitat");
const food = document.querySelector<HTMLInputElement>("#food");
const imgUrl = document.querySelector<HTMLInputElement>("#img-url");

if(submitBtn && animalName && scientificName && habitat && food && lifespan && animalClass && imgUrl && cardArea) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()

        if(animalName.value !== "" && imgUrl.value !== "") {
            const animalCard : Animal =
                {
                    name: animalName.value,
                    scientificName: scientificName.value,
                    animalClass: animalClass.value,
                    habitat: habitat.value,
                    lifespan: Number(lifespan.value),
                    food: food.value,
                    imgUrl: imgUrl.value
                }
            
            // CREATE CARD WRAPPER
            const newCardWrapper = document.createElement("div");
            newCardWrapper.classList.add("card-wrapper")
            cardArea.appendChild(newCardWrapper)

            // CREATE NEW CARD
            const newCard = document.createElement("div");
            newCard.setAttribute(`style`, `background-image: url("${animalCard.imgUrl}")`);
            newCard.classList.add("card");
            newCardWrapper.appendChild(newCard);

            // FILL CARD WITH INPUT
            const newTitle = document.createElement("div");
            newTitle.classList.add("card-title")
            newTitle.innerHTML = `
                <h2>${animalCard.name}</h2>
                <p>${animalCard.scientificName}</p>
                <p>${animalCard.animalClass}</p>
            `;
            newCard.appendChild(newTitle);

            const newInfos = document.createElement("ul");
            newInfos.classList.add("card-infos")
            if(animalCard.habitat !== "") {
                newInfos.innerHTML += `<li>Habitat: ${animalCard.habitat}</li>`;
            }
            if(animalCard.lifespan !== 0) {
                newInfos.innerHTML += `<li>Lifespan: ${animalCard.lifespan} year(s)</li>`;
            }
            if(animalCard.food !== "") {
                newInfos.innerHTML += `<li>Eats: ${animalCard.food}</li>`;
            }
            newCard.appendChild(newInfos);

            // // CREATE REMOVE BUTTON
            // const removeBtn = document.createElement("button");
            // removeBtn.setAttribute("type", "button");
            // removeBtn.textContent = "remove"
            // newCardWrapper.appendChild(removeBtn);

            // removeBtn.addEventListener("click", () => {
            //     cardArea.children
            // })
        }
    })
}