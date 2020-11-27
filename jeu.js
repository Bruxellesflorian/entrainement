const body = document.querySelector("body")
body.classList.add("body")


let lvl = [
    lvl0 = `aaaaaaaaaaa
a.a....a..a
a...a.....p
a....a....a
a..a.....aa
O....Sa...a
a.a..aa..aa
a..a....aaa
a.........a
aaaaaaaaaaa`,

    lvl1 = `aaaaaaaaaaa
aaaa...a..a
O...a.aaaa.
a...aa....a
S..a..aa.a.
aaa...a....
..a..aa..a.
...a..aaaaa
a..aaaaa...
....a.....a`,

lvl2 = `aaaaaaaaaaa
a.aa...a..a
..a.......a
a....a....a
...a..aa..S
aa....a...a
a.a..aa..aa
a..a....aaa
..........a
a.aa.....aa`,
]
const player = document.createElement("div")
player.classList.add("player")

let nbLvl = 0
let posY;
let posX;


function game() {
    let posYEst;
    let posXEst;
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
            }
            if (ligneDiv[j] === "S") {
                posY = i + 1
                posX = j + 1
                console.log("posY", posY);
                console.log("posX", posX);
            }
            if (ligneDiv[j] === "p") {
                tile.classList.add('sortieEst')
                posYEst = i + 1
                posXEst = i + 1
            }
            if (ligneDiv[j] === "O") {
                tile.classList.add('sortieOuest')
                posYEst = i + 1
                posXEst = i + 1
            }
            tile.classList.add("tileDiv")



        }
    }

    document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)


}

function deplacement() {
    document.body.addEventListener("keypress", function (e) {
        
        if (e.key === "d") {
            posX++
            if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("arbre")) {
                posX--
                document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
            } else if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("sortieEst")) {
                body.innerHTML = ""
                nbLvl = 1
                game()
            }

        }
        if (e.key === "q") {
            posX--
            if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("arbre")) {
                posX++
                document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
            } else if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("sortieOuest")) {
                body.innerHTML = ""
                nbLvl = 2
                game()


            }
        }
        if (e.key === "z") {
            posY--
            if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("arbre")) {
                posY++
                document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
            }
        }

        if (e.key === "s") {
            posY++
            if (document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").classList.contains("arbre")) {
                posY--
                document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)
            }

        }
        document.querySelector("body > div > div:nth-child(" + posY + ") > div:nth-child(" + posX + ")").appendChild(player)

    })
}
game()
deplacement()