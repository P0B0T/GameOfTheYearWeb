class Player {
    public x: number;
    public y: number;
    private gameBoard: HTMLElement;
    private playerElement: HTMLElement;
    private movingDirection: string | null = null;
    private moving: boolean = false;
    private movementInterval: number | null = null;
    private rotation: number = 0;
    private crash: GameBoard;
    public score: number = 0;

    constructor(startX: number, startY: number, gameBoard: HTMLElement, onGameBoardCrash: GameBoard) {
        this.x = startX;
        this.y = startY;
        this.gameBoard = gameBoard;
        this.crash = onGameBoardCrash;
        this.playerElement = document.createElement('div');
        this.playerElement.classList.add('player');
        this.gameBoard.appendChild(this.playerElement);
        this.SetPosition();
    }

    private SetPosition(): void {
        this.playerElement.style.transform = `translate(${this.x * 2}em, ${this.y * 2}em) rotate(${this.rotation}deg)`;
    }

    public StartMoving(direction: string): void {
        if (this.moving && this.movingDirection === direction) return;
        this.movingDirection = direction;
        this.moving = true;
        if (!this.movementInterval) {
            this.MoveLoop();
        }
    }

    public StopMoving(): void {
        this.moving = false;
        if (this.movementInterval !== null) {
            cancelAnimationFrame(this.movementInterval);
            this.movementInterval = null;
        }
    }

    private MoveLoop = () => {
        if (!this.moving || this.movingDirection === null) return;
        this.Move(this.movingDirection);
        this.SetPosition();
        this.crash.CheckCrashFood();
        if (this.crash.CheckCrashWall()) {
            this.StopMoving();
        }

        setTimeout(() => {
            this.movementInterval = requestAnimationFrame(this.MoveLoop);
        }, 30);
    }

    private Move(direction: string): void {
        switch (direction) {
            case 'up':
                this.y -= 1;
                this.rotation = 270;
                break;
            case 'down':
                this.y += 1;
                this.rotation = 90;
                break;
            case 'left':
                this.x -= 1;
                this.rotation = 180;
                break;
            case 'right':
                this.x += 1;
                this.rotation = 0;
                break;
        }
        this.SetPosition();
    }
}