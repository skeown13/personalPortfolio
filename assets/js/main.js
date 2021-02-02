// ------- Variables and Functions for Typewriter Effect -------
const TypedText = document.querySelector(".typedText")
const TypedCursor = document.querySelector(".typedCursor")

const textArray = [" Software Engineer", " Pilot", "n Adventurer", " Gamer", " Programmer", " Learner"]
const typingDelay = 200
const erasingDelay = 100
const newTextDelay = 500
const textPause = 3000
let textArrayIndex = 0
let charIndex = 0

function type() {
  //if charIndex is less than the length of the item being typed from text array then print out the next character of said item
  if (charIndex < textArray[textArrayIndex].length) {
    if (!TypedCursor.classList.contains("typing")) TypedCursor.classList.add("typing")
    TypedText.textContent += textArray[textArrayIndex].charAt(charIndex)
    charIndex++
    setTimeout(type, typingDelay)
  } else {
    TypedCursor.classList.remove("typing")
    setTimeout(erase, textPause)
  }
}

function erase() {
  if (charIndex > 0) {
    if (!TypedCursor.classList.contains("typing")) TypedCursor.classList.add("typing")
    TypedText.textContent = textArray[textArrayIndex].substring(0, charIndex-1)
    charIndex--
    setTimeout(erase, erasingDelay)
  } else {
    TypedCursor.classList.remove("typing")
    textArrayIndex++
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0
    }
    setTimeout(type, newTextDelay + 1100)
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay)
})

// ------- Variables and Functions for Clickable Dropdown NavBar -------
const sectionsCard = document.getElementById("sectionsCardButton")
const sectionsCardItem = document.getElementsByClassName("sectionsCardItem")

sectionsCard.addEventListener("click", function(e) {
  e.preventDefault()
  console.log("check 1", sectionsCard.className)
  if ( sectionsCard.className.indexOf("w3-show") == -1 ) {
    sectionsCard.className += " w3-show"
    console.log("check 2", sectionsCard.className)
  } else {
    console.log("check 3")
    sectionsCard.className = sectionsCard.className.replace(" w3-show", "")
  }
})

sectionsCardItem.addEventListener("click", function() {
  sectionsCard.className = sectionsCard.className.replace(" w3-show", "")
})

// function sectionsDropdown() {
//   if ( sectionsCard.className.indexOf("w3-show") == -1 ) {
//     sectionsCard.className += " w3-show"
//   } else {
//     sectionsCard.className = sectionsCard.className.replace(" w3-show", "")
//   }
// }

// function closeSectionsDropdown() {
//   sectionsCard.className = sectionsCard.className.replace(" w3-show", "")
// }

// ------- AOS (Animation on Scroll) Initialization -------
AOS.init()