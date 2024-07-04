let hscore = 0
let scoreHome = document.getElementById('homeScore')

let gscore = 0
let scoreGuest = document.getElementById('guestScore')


function homeOne(){
    hscore = hscore + 1
    scoreHome.innerText = hscore
}
function homeTwo(){
    hscore = hscore + 2
    scoreHome.innerText = hscore
}
function homeThree(){
    hscore = hscore + 3
    scoreHome.innerText = hscore
}


function guestOne(){
    gscore = gscore + 1
    scoreGuest.innerText = gscore
}
function guestTwo(){
    gscore = gscore + 2
    scoreGuest.innerText = gscore
}
function guestThree(){
    gscore = gscore + 3
    scoreGuest.innerText = gscore
}

