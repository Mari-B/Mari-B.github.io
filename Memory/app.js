document.addEventListener('DOMContentLoaded',() => {

// card options
const cardArray = [
    {
        name: 'sun',
        img:'images2/sun.png'
    },
    {
        name: 'heart',
        img:'images2/heart.png'
    },
    {
        name: 'rainbow',
        img:'images2/rainbow.png'
    },
    {
        name: 'flower',
        img:'images2/flower.png'
    },
    {
        name: 'cupcake',
        img:'images2/cupcake.png'
    },
    {
        name: 'pizza',
        img:'images2/pizza.png'
    },
    {
        name: 'sun',
        img:'images2/sun.png'
    },
    {
        name: 'heart',
        img:'images2/heart.png'
    },
    {
        name: 'rainbow',
        img:'images2/rainbow.png'
    },
    {
        name: 'flower',
        img:'images2/flower.png'
    },
    {
        name: 'cupcake',
        img:'images2/cupcake.png'
    },
    {
        name: 'pizza',
        img:'images2/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create your board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images2/green.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch () {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images2/green.png')
        cards[optionTwoId].setAttribute('src', 'images2/green.png')
        alert('You have clicked the same image!')
      }
    else if (cardsChosen[0] === cardsChosen[1]) {
        alert ('You found a match')
        cards[optionOneId].setAttribute('src', 'images2/yay.png')
        cards[optionTwoId].setAttribute('src', 'images2/yay.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images2/green.png')
        cards[optionTwoId].setAttribute('src', 'images2/green.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}


//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}
createBoard()
})
