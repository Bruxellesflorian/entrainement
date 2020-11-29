const body = document.querySelector("body")
body.classList.add("body")
const fleche = ["", "url('./img/grassLeft.png')", "url('./img/grassRight.png')", "url('./img/grassDown.png')", "url('./img/grassUp.png')"]
const fenetreDeJeu = document.createElement("div")
fenetreDeJeu.classList.add("fenetreDeJeu")
body.appendChild(fenetreDeJeu)

const player = document.createElement("div")
player.classList.add("player")

const timerPlay = document.createElement("div")
const timerDiv = document.createElement("div")
timerDiv.classList.add("timer")

const bot = document.createElement("div")
bot.classList.add("bot")
let posYBot, posXBot;
let nbLvl = 0
let posY, posX;
let ouestPosY, ouestPosX;
let estPosY, estPosX
let nordPosY, nordPosX;
let sudPosY, sudPosX

let mapY;
let mapX;

let ouest, est, nord, sud = true;

let sec = 00
let minute = 00
setInterval(() => {
    sec++
    timerPlay.innerHTML = minute + ":" + sec
    if (sec == 59) {
        sec = 0
        minute++
    }
}, 1000);


function game() {

    const map = document.createElement("div")
    map.classList.add("map")
    fenetreDeJeu.appendChild(map)
    let ligneArray = lvl[nbLvl].split("\n")
    for (let i = 0; i < ligneArray.length; i++) {
        let ligne = document.createElement("div")
        ligne.classList.add("tile")
        map.appendChild(ligne)

        let ligneDiv = ligneArray[i].split("")
        for (let j = 0; j < ligneDiv.length; j++) {


            let tile = document.createElement("div")
            ligne.appendChild(tile)

            if (ligneDiv[j] === "a") {

                tile.classList.add("arbre")
            } else if (ligneDiv[j] === "S") {
                if (ouest === false) {
                    tile.classList = "tileDiv";
                    posY = ouestPosY
                    posX = ouestPosX
                    ouest = true
                } else if (est === false) {
                    tile.classList = "tileDiv";
                    posY = estPosY
                    posX = estPosX
                    est = true
                } else if (nord === false) {
                    tile.classList = "tileDiv";
                    posY = nordPosY
                    posX = nordPosX
                    nord = true
                } else if (sud === false) {
                    tile.classList = "tileDiv";
                    posY = sudPosY
                    posX = sudPosX
                    sud = true
                } else {
                    posY = i + 1
                    posX = j + 1

                }
                if(nbLvl > 0){
                    tile.className = "sortiepointDeStart"
                tile.style.backgroundImage = fleche[nbLvl]
                }
                
            } else if (ligneDiv[j] === "E") {
                tile.classList.add('sortieEst')
                estPosY = i + 1
                estPosX = j + 1
                tile.style.backgroundImage = fleche[2]
            } else if (ligneDiv[j] === "O") {
                ouestPosY = i + 1
                ouestPosX = j + 1
                tile.style.backgroundImage = fleche[1]
                tile.classList.add('sortieOuest')
            } else if (ligneDiv[j] === "N") {
                nordPosY = i + 1
                nordPosX = j + 1
                tile.style.backgroundImage = fleche[4]
                tile.classList.add('sortieNord')
            } else if (ligneDiv[j] === "V") {
                sudPosY = i + 1
                sudPosX = j + 1
                tile.style.backgroundImage = fleche[3]
                tile.classList.add('sortieSud')

            } else if (ligneDiv[j] === "G") {
                // tile.classList.add('sortiepointDeStart')
            } else if (ligneDiv[j] === "B") {
                posYBot = i + 1
                posXBot = j + 1
            }
            tile.classList.add("tileDiv")



        }
        mapY = ligneDiv.length;
        mapX = ligneArray.length
    }


    document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
    document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posYBot + ") > div:nth-child(" + posXBot + ")").appendChild(bot)
}


function pointDeStart() {
    if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("sortieEst")) {
        fenetreDeJeu.innerHTML = ""
        nbLvl = 1
        game()
        est = false

    } else if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("sortieOuest")) {
        fenetreDeJeu.innerHTML = ""
        nbLvl = 2
        game()
        ouest = false

    } else if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("sortieNord")) {
        fenetreDeJeu.innerHTML = ""
        nbLvl = 3
        game()
        nord = false

    } else if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("sortieSud")) {
        fenetreDeJeu.innerHTML = ""
        nbLvl = 4
        game()
        sud = false
    } else if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("sortiepointDeStart")) {
        fenetreDeJeu.innerHTML = ""
        nbLvl = 0
        game()

    }
}

function deplacement() {
    document.body.addEventListener("keydown", function (e) {

        if (posX <= mapX) {
            if (e.key === "ArrowRight") {

                posX++
                if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("arbre")) {
                    posX--
                    document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
                } else {
                    pointDeStart()
                }


            }
        }

        if (e.key === "ArrowLeft") {
            if (posX >= 2) {

                posX--
                if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("arbre")) {
                    posX++
                    document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
                } else {
                    pointDeStart()
                }
            }
        }
        if (e.key === "ArrowUp") {
            if (posY >= 2) {
                posY--
                if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("arbre")) {
                    posY++
                    document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
                } else {
                    pointDeStart()
                }
            }
        }

        if (e.key === "ArrowDown") {

            if (posY < mapY - 1) {

                posY++
                if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("arbre")) {
                    posY--
                    document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
                } else {
                    pointDeStart()
                }
            }

        }
        document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)

    })
}

body.appendChild(timerDiv)
timerDiv.appendChild(timerPlay)
game()
deplacement()
setInterval(function () {

    if (posY < posYBot) {
        posYBot--
        if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posYBot + ") > div:nth-child(" + posXBot + ")").classList.contains("arbre")) {
            posYBot++
            posXBot--
            
        }
    } else if (posY > posYBot) {
        posYBot++
        if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posYBot + ") > div:nth-child(" + posXBot + ")").classList.contains("arbre")){
            posYBot--
            posXBot++
        }

    } else if (posX < posXBot) {
        posXBot--
        if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posYBot + ") > div:nth-child(" + posXBot + ")").classList.contains("arbre")){
            posYBot--
            posXBot++
        }

    } else if (posX > posXBot) {
        posXBot++
        if (document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posYBot + ") > div:nth-child(" + posXBot + ")").classList.contains("arbre")){
            posYBot++
            posXBot--
        }
    }
    document.querySelector("body > div.fenetreDeJeu > div > div:nth-child(" + posYBot + ") > div:nth-child(" + posXBot + ")").appendChild(bot)
}, 500);
let loose = setInterval(function () {
    if (posXBot == posX && posYBot == posY) {
        alert('perdu !!')
        window.location = ""
        clearInterval(loose)
    }
}, 200)