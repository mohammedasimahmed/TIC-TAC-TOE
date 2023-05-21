let container = document.querySelector(".container")
let turn = document.querySelector(".turn")
let reloadBtn = document.querySelector(".reload")
let t = ["X", "O"]
for (let i = 0; i < 9; i++) {
    let cell = document.createElement("button")
    cell.classList.add("cell")
    cell.setAttribute("id", i)
    // console.log(cell.getAttribute("id"))
    container.append(cell)
}

let count = 0
let cells = document.querySelectorAll(".cell")
let val = false;

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (cell.textContent != "") return;
        count++;
        if (count % 2 != 0) {
            cell.textContent = "X"
            gameOver("X", cell.getAttribute("id"))
        }
        else {
            cell.textContent = "O"
            gameOver("O", cell.getAttribute("id"))
        }
        turn.textContent = ` ${t[count % 2]}'s turn`
        if (val) {
            turn.textContent = ` ${t[(count - 1) % 2]} wins`
        }
    })
})

let winArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
let X = []
let O = []
let a = []
let b = []
function gameOver(value, id) {
    id = Number(id)
    if (value === "X") {
        X = [...X, id]
        // console.log(X)
        let nx = X.length
        if (nx >= 3) {
            for (let i = 0; i < 8; i++) {
                let c = 0;
                b = []
                for (let j = 0; j < 3; j++) {
                    for (let k = 0; k < nx; k++) {
                        if (X[k] === winArr[i][j]) {
                            c++;
                            b.push(X[k])
                            // console.log(b)
                        }
                    }

                }
                if (c === 3) {
                    val = true
                    reloadBtn.style.display = "block"
                    for (let l = 0; l < 3; l++) {
                        document.getElementById(b[l]).style.backgroundColor = "rgb(24, 197, 24)"
                        // console.log(b[l])
                    }
                    cells.forEach((cell) => cell.disabled = true)
                    return
                }
            }
        }
    }
    else if (value === "O") {
        O = [...O, id]
        // console.log(O)
        let no = O.length
        if (no >= 3) {
            for (let i = 0; i < 8; i++) {
                let c = 0;
                a = []
                for (let j = 0; j < 3; j++) {
                    for (let k = 0; k < no; k++) {
                        if (O[k] === winArr[i][j]) {
                            c++;
                            a.push(O[k])
                        }
                    }
                }
                if (c === 3) {
                    val = true
                    reloadBtn.style.display = "block"
                    for (let l = 0; l < 3; l++) {
                        document.getElementById(a[l]).style.backgroundColor = "rgb(24, 197, 24)"
                        // console.log(a[l])
                    }
                    cells.forEach((cell) => cell.disabled = true)
                    return
                }

            }
        }
    }
}
function reload() {
    location.reload()
}