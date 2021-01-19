
const TypedText = document.querySelector(".typedText")
const TypedCursor = document.querySelector(".typedCursor")

const textArray = ["Coder", "Pilot", "Adventurer"]
const typingDelay = 200
const erasingDelay = 100
const newTextDelay = 500
let textArrayIndex = 0
let charIndex = 0

function type() {
  //if charIndex is less than the length of the item being typed from text array then print out the next character of said item
  if (charIndex < textArray[textArrayIndex].length) {
    if (!TypedCursor.classList.contains("typing")) TypedCursor.classList.add("typing")
    TypedText.textContent += textArray[textArrayIndex].charAt(charIndex)
    console.log(textArray[textArrayIndex].charAt(charIndex))
    charIndex++
    setTimeout(type, typingDelay)
  } else {
    console.log("in")
    TypedCursor.classList.remove("typing")
    setTimeout(erase, newTextDelay)
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
