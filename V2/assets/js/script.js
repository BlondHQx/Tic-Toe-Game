//VARIABLES
let grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];
let playerOne = "X";
let playerTwo = "O";
let cpuChoice;
let lap = 1;
let gameOver = true;
let gameCpuMode = null;

/************************STARTING PAGE************************/
function setMode(isGameCpuMode) {
    gameCpuMode = isGameCpuMode;
    if (gameCpuMode == true) {
        document.querySelector('#userTwo').disabled= true;
        document.querySelector('#userTwo').value = 'CPU';
    }else {
        document.querySelector('#userTwo').disabled= false;
        document.querySelector('#userTwo').value = '';
    }
}

function getNames() {
    let namePone = document.querySelector('#userOne').value;
    let namePtwo = document.querySelector('#userTwo').value;
    document.querySelector("#player_two").innerHTML = namePtwo;
    document.querySelector("#player_one").innerHTML = namePone;
    if (gameCpuMode == null || document.querySelector("#userOne").value == "" || document.querySelector("#userTwo").value == "" ) {
        document.querySelector('.error').innerHTML = 'ERROR ! (Enter a valid name(s) Player(s))'
    } else {
        window.location.href = "#";
    }
}

/************************MAIN PAGE************************/

////////////////////////FUNC FOR UNDERLINE PLAYERS(NAV)////////////////////////

function whoPlay() {
    if (lap % 2 != 0) {
        document.querySelector('#playerOne').classList.add('underline');
        document.querySelector('#playerTwo').classList.remove('underline');
    } else {
        document.querySelector('#playerOne').classList.remove('underline');
        document.querySelector('#playerTwo').classList.add('underline');
    }
}

//////////////////////STARTING GAME BUTTON(NAV)//////////////////////
function playBtn(elem) {
    gameOver = false;
}

////////////////////////RESET BUTTON(NAV)////////////////////////
function reset(elem) {
    for (let i = 0; i < document.querySelectorAll('.cell').length; i++) {
        document.querySelectorAll('.cell')[i].innerHTML = "";
        lap = 1;
    }
    document.querySelector('.win').innerHTML = "";
    document.querySelector('.draw').innerHTML = "";
    gameOver = true;
}

//////////////////////MAIN CELL PLAY HTML[GRID]//////////////////////
function play(elem) {
    if (elem.innerHTML == "" && gameOver == false) {
        if (lap % 2 != 0) {
            elem.innerHTML = playerOne;
        } else {
            elem.innerHTML = playerTwo;
        }
        lap++;
        whoPlay();
        updateGrid();
        result();
        if (gameCpuMode == true) {
            cpuPlay();
        }
    }
}

////////////////////////IMPORT GRID HTML ON JS////////////////////////
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
        index++;
    }
}

////////////////////////RESULT CONDITION////////////////////////
function result() {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][0] != "" && grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2]) {
                document.querySelector('.win').innerHTML = " as won !";
                gameOver = true;
            } else if (grid[1][i] != "" && grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i]) {
                document.querySelector('.win').innerHTML = " as won !";
                gameOver = true;
            }
            if (grid[0][0] != "" && grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) {
                document.querySelector('.win').innerHTML = "as won !"
                gameOver = true;
            } else if (grid[2][0] != "" && grid[2][0] == grid[1][1] && grid[1][1] == grid[0][2]) {
                document.querySelector('.win').innerHTML = "as won !"
                gameOver = true;
            }
            else if (lap >= 9) {
                document.querySelector('.draw').innerHTML = 'DRAW !';
                gameOver = true;
            }
        }
    }
}
result(grid);

////////////////////////CPU PLAY////////////////////////
function cpuPlay() {
    cpuChoice = random(0, 8);
    let gridHTML = document.querySelectorAll('.cell');
    while (gridHTML[cpuChoice].innerHTML != "" && !gameOver) {
        cpuChoice = random(0, 8);
    }
    gridHTML[cpuChoice].innerHTML = playerTwo;
    result()
    lap++;
}

//////////////////////RANDOM FUNC FOR CPU//////////////////////
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

