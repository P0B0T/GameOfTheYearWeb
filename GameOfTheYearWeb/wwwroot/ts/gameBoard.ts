class GameBoard {
    private gameBoard: HTMLElement;
    private rows: number;
    private columns: number;
    private scoreInput: HTMLInputElement;

    public player: Player;
    public food: Food;

    constructor(rows: number, columns: number) {
        this.rows = rows;
        this.columns = columns;
        this.gameBoard = document.getElementById('gameBoard');
        this.InitBoard();
        this.player = new Player(Math.floor(Math.random() * 40), Math.floor(Math.random() * 21), this.gameBoard, this);
        this.food = new Food(this.gameBoard);
        this.scoreInput = document.querySelector('#divScore input');
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

    public CheckCrashFood(): void {
        if (this.player.x == this.food.x && this.player.y == this.food.y) {
            this.ScoreAdd();
            this.food.SetRandomPosition();
        }
    }

    public ScoreAdd(): void {
        this.player.score++;
        this.scoreInput.value = this.player.score.toString();
    }

    public UpdateScoreInModal(): void {
        const modalInput = document.querySelector('#modal input') as HTMLInputElement;
        if (modalInput) {
            modalInput.value = this.player.score.toString();
        }
    }

    public CheckCrashWall(): boolean {
        if (this.player.x < 0 || this.player.y < 0 || this.player.x > 40 || this.player.y > 21) {
            return true;
        }
        return false;
    }
}