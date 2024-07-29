class GameBoard {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.gameBoard = document.getElementById('gameBoard');
        this.InitBoard();
        this.player = new Player(10, 10, this.gameBoard);
    }
    InitBoard() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                this.gameBoard.appendChild(cell);
            }
        }
    }
}
//# sourceMappingURL=gameBoard.js.map