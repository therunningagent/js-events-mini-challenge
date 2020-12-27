/***** Deliverable 1 *****/
const header = document.querySelector("#header")
header.addEventListener("click", function(evt){
    toggleColor(evt.target)
})
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "green"

let pLikes = document.querySelector("p.likes")
const likeButton = document.querySelector("button.like-button")

likeButton.addEventListener("click", function(event){
    let likeNum = parseInt(pLikes.textContent)
    likeNum ++
    console.log(likeNum)
    pLikes.textContent = `${likeNum} likes`
})


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`

const form = document.querySelector("form#new-animal-sighting-form")

form.addEventListener("submit", function(event){
    event.preventDefault()
    const speciesInput = event.target.species.value
    const linkInput = event.target.link.value
    const photoInput = event.target.photo.value
    const descriptionInput = event.target.description.value

    const lastIndex = traveler.animalSightings.length - 1 
    const id = traveler.animalSightings[lastIndex].id += 1 

    console.log(id)

    const animalObject = {
        id: id,
        species: speciesInput,
        link: linkInput,
        photo: photoInput,
        description: descriptionInput
    }
    renderAnimalSightingPost(animalObject)
    event.target.reset()
})



/***** Deliverable 4 *****/
function renderAnimalSightingPost (animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

/***** Deliverable 2 *****/

/***** Deliverable 3 *****/
