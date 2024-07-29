class GameBoard {
    private gameBoard: HTMLElement;
    private rows: number;
    private columns: number;
    public player: Player;

    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;
        this.gameBoard = document.getElementById('gameBoard');
        this.InitBoard();
        this.player = new Player(10, 10, this.gameBoard);
    }

    private InitBoard(): void {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                this.gameBoard.appendChild(cell);
            }
        }
    }
}