// script.js
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const winningCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

function handleClick(event) {
    const index = event.target.dataset.index;
    if (board[index] === '') {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWin(currentPlayer)) {
            alert(`${currentPlayer} wins!`);
            resetGame();
        } else if (board.every(cell => cell !== '')) {
            alert("It's a draw!");
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    return winningCombination.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
}
