class GameBoard {
    private gameBoard: HTMLElement;
    private rows: number;
    private columns: number;
    private scoreInput: HTMLInputElement;
    private scoreInput2: HTMLInputElement;

    public player: Player;
    public player2: Player | null;
    public food: Food;

    constructor(rows: number, columns: number, isTwo: boolean) {
        this.rows = rows;
        this.columns = columns;
        this.gameBoard = document.getElementById('gameBoard');
        this.InitBoard();
        this.player = new Player(Math.floor(Math.random() * 40), Math.floor(Math.random() * 21), this.gameBoard, this);
        this.food = new Food(this.gameBoard);
        this.scoreInput = document.querySelector('#divScore input');
        this.player2 = isTwo ? new Player(Math.floor(Math.random() * 40), Math.floor(Math.random() * 21), this.gameBoard, this, "player2") : null;
        this.scoreInput2 = document.querySelector('#divScore2 input');
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
            this.ScoreAdd(this.player, this.scoreInput);
            this.food.SetRandomPosition();
        }

        if (this.player2 != null) {
            if (this.player2.x == this.food.x && this.player2.y == this.food.y) {
                this.ScoreAdd(this.player2, this.scoreInput2);
                this.food.SetRandomPosition();
            }
        }
    }

    public ScoreAdd(player: Player, scoreInput: HTMLInputElement): void {
        player.score++;
        scoreInput.value = player.score.toString();
    }

    public UpdateScoreInModal(): void {
        const modalInput = document.querySelector('#modal input') as HTMLInputElement;

        if (modalInput)
            modalInput.value = this.player.score.toString();
    }

    public CheckCrashWall(player: Player): boolean {
        return player.x < 0 || player.y < 0 || player.x >= this.columns + 1 || player.y >= this.rows + 1;
    }

    public ScoreCompare(): string {
        if (this.player.score == this.player2.score)
            return "Communism has won!";  

        if (this.player.score > this.player2.score)
            return "Player1 won!";  

        if (this.player.score < this.player2.score)
            return "Player2 won!";  
    }
}