let turn = true;

const cellElements = document.querySelectorAll('.cell');
const board = document.getElementById('board');
const endGameMessageText = document.querySelector('.winningmessage');
const endGameMessage = document.querySelector('.gameendmessage');
const restartButton = document.querySelector('.restart');

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

const choosePlayers = () => {
    const player1 = document.querySelector('.player1');
    let player1Value = 'Hii';
    player1.addEventListener('change', (e) => (player1Value = e.target.value));
    console.log(player1Value);
};

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

const handleClick = (e) => {
    const currentClass = turn ? 'x' : 'o';
    const targetCell = e.target;

    // place the marker on to this cell
    targetCell.classList.add(currentClass);
    // check win or lose
    if (checkWin(currentClass)) {
        endgame();
    } else if (checkDraw()) {
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

choosePlayers();
showHoverEffect();
startGame();
