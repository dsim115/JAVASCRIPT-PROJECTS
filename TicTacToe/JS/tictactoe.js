//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an X or O in a square.
function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();

        audio('./media/place.mp3');

        if (activePlayer === 'X') {
            activePlayer = 'O';
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        } else {
            activePlayer = 'X';
        }
        return true;
    }
    return false;
}

function checkWinConditions() {
    const winPatterns = [
        ['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], // Rows
        ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], // Columns
        ['0', '4', '8'], ['2', '4', '6']                  // Diagonals
    ];

    for (const [a, b, c] of winPatterns) {
        if (arrayIncludes(a + 'X', b + 'X', c + 'X')) {
            drawWinLine(a, b, c); handleWin(); return;
        }
        if (arrayIncludes(a + 'O', b + 'O', c + 'O')) {
            drawWinLine(a, b, c); handleWin(); return;
        }
    }

    if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(resetGame, 500);
    }
}

function arrayIncludes(a, b, c) {
    return selectedSquares.includes(a) && selectedSquares.includes(b) && selectedSquares.includes(c);
}

function computersTurn() {
    let success = false;
    while (!success) {
        let pickASquare = String(Math.floor(Math.random() * 9));
        if (placeXOrO(pickASquare)) {
            success = true;
        }
    }
}

function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
    }, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(start, mid, end) {
    const coordinates = {
        '0': [50, 100], '1': [304, 100], '2': [508, 100],
        '3': [50, 304], '4': [304, 304], '5': [508, 304],
        '6': [50, 508], '7': [304, 508], '8': [508, 508]
    };

    const [x1, y1] = coordinates[start];
    const [x2, y2] = coordinates[end];

    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    animateLineDrawing(x1, y1, x2, y2, x1, y1, c);
}

function animateLineDrawing(x1, y1, x2, y2, x, y, c) {
    const animationLoop = requestAnimationFrame(() => animateLineDrawing(x1, y1, x2, y2, x, y, c));
    c.clearRect(0, 0, 608, 608);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = "rgba(70, 225, 33, .8)";
    c.stroke();
    if (x < x2) x += 10;
    if (y < y2) y += 10;
    if (x >= x2 && y >= y2) cancelAnimationFrame(animationLoop);
}

function clearCanvas() {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    c.clearRect(0, 0, 608, 608);
}

function handleWin() {
    disableClick();
    audio('./media/winGame.mp3');
    setTimeout(() => {
        clearCanvas();
        resetGame();
    }, 1000);
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
    activePlayer = 'X';
}
