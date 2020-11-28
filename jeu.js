const body = document.querySelector("body")
body.classList.add("body")

const player = document.createElement("div")
player.classList.add("player")

let nbLvl = 0
let posY;
let posX;

let ouest;
let est;
let nord;
let sud;

function game() {
    const map = document.createElement("div")
    map.classList.add("map")
    body.appendChild(map)
    let ligneArray = lvl[nbLvl].split("\n")
    for (let i = 0; i < ligneArray.length; i++) {
        let ligne = document.createElement("div")
        ligne.classList.add("tile")
        map.appendChild(ligne)

        let ligneDiv = ligneArray[i].split("")
        for (let j = 0; j < ligneDiv.length; j++) {

            let tile = document.createElement("div")
            ligne.appendChild(tile)
            tile.innerHTML = ligneDiv[j]
            if (ligneDiv[j] === "a") {

                tile.classList.add("arbre")
            } else if (ligneDiv[j] === "S") {
                posY = i + 1
                posX = j + 1
                console.log("posY", posY);
                console.log("posX", posX);
            } else if (ligneDiv[j] === "E") {
                tile.classList.add('sortieEst')
            } else if (ligneDiv[j] === "O") {
                tile.classList.add('sortieOuest')
            } else if (ligneDiv[j] === "N") {
                tile.classList.add('sortieNord')
            } else if (ligneDiv[j] === "V") {
                tile.classList.add('sortieSud')
            } else if (ligneDiv[j] === "G") {
                tile.classList.add('sortieDepart')
            }
            tile.classList.add("tileDiv")



        }
        mapY = ligneDiv.length;
        mapX = ligneArray.length
    }

    document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)


}
let mapY;
let mapX;

function depart() {
    if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("sortieEst")) {
        body.innerHTML = ""
        nbLvl = 1
        game()

    } else if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("sortieOuest")) {
        body.innerHTML = ""
        nbLvl = 2
        game()

    } else if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("sortieNord")) {
        body.innerHTML = ""
        nbLvl = 3
        game()

    } else if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("sortieSud")) {
        body.innerHTML = ""
        nbLvl = 4
        game()
    }else if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("sortieDepart")) {
        body.innerHTML = ""
        nbLvl = 0
        game()

    }
}

function deplacement() {
    document.body.addEventListener("keypress", function (e) {

        if (posX <= mapX) {
            if (e.key === "d") {

                posX++
                if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("arbre")) {
                    posX--
                    document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
                } else {
                    depart()
                }

            }
        }

        if (e.key === "q") {
            if (posX >= 2) {

                posX--
                if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("arbre")) {
                    posX++
                    document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
                } else {
                    depart()
                }
            }
        }
        if (e.key === "z") {
            if (posY >= 2) {

                console.log(mapY);
                posY--
                if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("arbre")) {
                    posY++
                    document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
                } else {
                    depart()
                }
            }
        }

        if (e.key === "s") {

            if (posY < mapY - 1) {
                console.log(posY);
                console.log(mapY);
                posY++
                if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("arbre")) {
                    posY--
                    document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
                } else {
                    depart()
                }
            }

        }
        document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)

    })
}
game()
deplacement()