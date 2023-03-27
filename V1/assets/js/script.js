let grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];
let playerOne = "X";
let playerTwo = "O";
let cpuChoice = random(0,8);
let lap = 1;
let gameOver = false;

function playBtn(elem) {
    gameOver = true
}

function reset(elem) {
    for (let i = 0; i < document.querySelectorAll('.cell').length; i++) {
    document.querySelectorAll('.cell')[i].innerHTML = "";
    lap = 1
    }
    document.querySelector('.win').innerHTML = "";
    document.querySelector('.draw').innerHTML = "";
    gameOver = false;
}

function play(elem) {
    if (elem.innerHTML == "" && gameOver == true) {
        if (lap % 2 != 0) {
            elem.innerHTML = playerOne;
        } else {
            elem.innerHTML = playerTwo;
        }
        lap++
        updateGrid();
        result();
    }
}

function updateGrid() {
    let index = 0
    for (let i = 0; i < grid[0].length; i++) {
        grid[0][i] = document.querySelectorAll('.cell')[index].innerHTML;
        index++;
    }
    for (let i = 0; i < grid[1].length; i++) {
        grid[1][i] = document.querySelectorAll('.cell')[index].innerHTML;
        index++;
    }
    for (let i = 0; i < grid[2].length; i++) {
        grid[2][i] = document.querySelectorAll('.cell')[index].innerHTML;
        index++
    }
    console.log(grid);
}

function result() {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][0] != "" && grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2]) {
                document.querySelector('.win').innerHTML = " as won !";
                gameOver = false
            } else if (grid[1][i] != "" && grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i]) {
                document.querySelector('.win').innerHTML = " as won !";
                gameOver = false
            }
            if (grid[0][0] != "" && grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) {
                document.querySelector('.win').innerHTML = "as won !"
                gameOver = false
            } else if (grid[2][0] != "" && grid[2][0] == grid[1][1] && grid[1][1] == grid[0][2]) {
                document.querySelector('.win').innerHTML = "as won !"
                gameOver = false
            }
            else if (lap == 9) {
                document.querySelector('.draw').innerHTML = 'DRAW !'
                gameOver = false
            }
        }
    }
}
result(grid);





function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(document.querySelectorAll(".cell"));
