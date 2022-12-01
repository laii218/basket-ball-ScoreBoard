let homeCount = 0 
let guestCount = 0
let foul = 0
    let guestEl = document.getElementById("count-element")
    let homeEl = document.getElementById("count-el")
    let foulEl = document.getElementById("foul-el")
function plus_one_home(){
    homeCount +=1
    homeEl.innerText = homeCount
}
function plus_two_home(){
    homeCount +=2
    homeEl.innerText = homeCount
}
function plus_three_home(){
    homeCount += 3
    homeEl.innerText = homeCount
}
function plus_one_guest(){
    guestCount += 1
    guestEl.innerText = guestCount
}
function plus_two_guest(){
    guestCount += 2
    guestEl.innerText = guestCount
}
function plus_three_guest(){
    guestCount += 3
    guestEl.innerText = guestCount
}
function newGame(){
    guestEl.textContent = 0
    guestCount = 0
    homeEl.textContent = 0
    homeCount = 0
    foul = 0
    foulEl.innerText = "Fouls : " + foul
    
}
function fouls(){
    foul +=1
    foulEl.innerText ="Fouls :" +  foul
}
