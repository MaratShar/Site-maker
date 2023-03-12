let layout = document.querySelector(".layout");
let chooseBtns = document.querySelectorAll(".grid-select__radio")
let addBtns = document.querySelectorAll(".add-btn")
let parentsOfDeleteBtns = []

for (let a of chooseBtns){
    a.addEventListener("change", (event) => {
        let valueOfBtn= event.target.value;
        layout.classList.remove(layout.classList[1])
        layout.classList.add("layout--" + valueOfBtn)
    })
}   

for (let myBtn of addBtns){ 
    myBtn.addEventListener("click", () => {
        let parentOfBtn = myBtn.parentNode;
        let menuToSelectItem = parentOfBtn.querySelector(".choose-elem")
        menuToSelectItem.classList.toggle("hidden")
    })
}

const deleteBtnHandler = deleteBtnHandler => {
    deleteBtnHandler.target.parentElement.remove()
}

const elementsOfMenu = document.querySelectorAll(".choose-elem__btn")
for (let choosenElementOfMenu of elementsOfMenu){ 
    choosenElementOfMenu.addEventListener("click", () => {
        const typeOfChoosenElement = choosenElementOfMenu.dataset.type
        const containerOfChoosenElement = choosenElementOfMenu.dataset.container
        const neadedContainer = document.querySelector(`.${containerOfChoosenElement}__elements-wrapper`)
        const template = document.getElementById(`${typeOfChoosenElement}-template`).content.cloneNode(true)
        let templateElement = template.querySelector('.element')
        neadedContainer.append(template)
        templateElement.querySelector(".delete-btn").addEventListener("click",deleteBtnHandler)
    })
}


