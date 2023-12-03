
const url = 'http://localhost:3000/ramens'

const ramenMenu = document.querySelector('#ramen-menu')

const ramenDisplayDiv = document.querySelector('#ramen-detail')
const detailDisplayRamenImage = document.querySelector('.detail-image')
const detailDisplayRamenName = document.querySelector('.name')
const detailDisplayRamenRestaurant = document.querySelector('.restaurant')
const detailDisplayRamenComment = document.querySelector('#comment-display')
const detailDisplayRamenRating = document.querySelector('#rating-display')

const submitRamenForm = document.querySelector('#new-ramen')

const newRamenName = document.querySelector('#new-name')
const newRamenRestaurant = document.querySelector('#new-restaurant')
const newRamenImage = document.querySelector('#new-image')
const newRamenRating = document.querySelector('#new-rating')
const newRamenComment = document.querySelector('#new-comment')

function getRamens() {
    fetch(url)
    .then(res => res.json())
    .then(ramenArr => {

        displayDetailRamen(ramenArr[0])

        submitNewRamen()

        ramenArr.map(ramen => {
            displayRamenMenu(ramen)
        })
    })
}

const displayRamenMenu = (ramen) => {
    const imageElement = document.createElement('img')
    imageElement.src = ramen.image
    ramenMenu.appendChild(imageElement)

    imageElement.addEventListener('click', () => {
        displayDetailRamen(ramen)
    })
}

const displayDetailRamen = (ramen) => {
    detailDisplayRamenImage.src = ramen.image
    detailDisplayRamenName.textContent = ramen.name
    detailDisplayRamenRestaurant.textContent = ramen.restaurant
    detailDisplayRamenRating.textContent = ramen.rating
    detailDisplayRamenComment.textContent = ramen.comment
}

const submitNewRamen = () => {
    submitRamenForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(e)
        let newRamen = {
            'name': e.target['new-name'].value,
            'restaurant': e.target['new-restaurant'].value,
            'image': e.target['new-image'].value,
            'rating': e.target['new-rating'].value,
            'comment': e.target['new-comment'].value,
        }
        displayRamenMenu(newRamen)
        submitRamenForm.reset()
    })
}

getRamens()

