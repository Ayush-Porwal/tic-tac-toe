let turn = true;

const cellElements = document.querySelectorAll('.cell');
const board = document.getElementById('board');
const endGameMessageText = document.querySelector('.winningmessage');
const endGameMessage = document.querySelector('.gameendmessage');
const restartButton = document.querySelector('.restart');

const scorep1 = document.querySelector('.player1');
const scorep2 = document.querySelector('.player2');

const win_ways = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const showHoverEffect = () => {
    board.classList.remove('x');
    board.classList.remove('o');

    board.classList.add(turn ? 'x' : 'o');
};

const checkWin = (currentClass) => {
    return win_ways.some((way) => {
        return way.every((cellidx) => {
            return cellElements[cellidx].classList.contains(currentClass);
        });
    });
};

const checkDraw = () => {
    return [...cellElements].every((cell) => {
        return cell.classList.contains('x') || cell.classList.contains('o');
    });
};

const endgame = () => {
    if (checkDraw()) {
        endGameMessageText.innerHTML = 'Its a Draw 😐';
    } else {
        endGameMessageText.innerHTML = turn ? 'X Wins 😁' : 'O Wins 😁';
    }
    endGameMessage.classList.add('show');
};

const handleScore = (turn) => {
    if (turn) {
        scorep1.innerHTML = parseInt(scorep1.innerHTML) + 1;
    } else {
        scorep2.innerHTML = parseInt(scorep2.innerHTML) + 1;
    }
};

const handleClick = (e) => {
    const currentClass = turn ? 'x' : 'o';
    const targetCell = e.target;

    // place the marker on to this cell
    targetCell.classList.add(currentClass);
    // check win or lose
    if (checkWin(currentClass)) {
        handleScore(turn);
        endgame();
    } else if (checkDraw()) {
        handleScore(turn);
        endgame();
    } else {
        // switch turn
        turn = !turn;
        // hover effect
        showHoverEffect();
    }
};

const startGame = () => {
    endGameMessageText.innerHTML = '';
    endGameMessage.classList.remove('show');
    cellElements.forEach((cell) => {
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, {
            once: true,
        });
    });
};

restartButton.addEventListener('click', startGame);

showHoverEffect();
startGame();
