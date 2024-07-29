class Player {
    private x: number;
    private y: number;
    private gameBoard: HTMLElement;
    private playerElement: HTMLElement;
    private movingDirection: string | null = null;
    private moving: boolean = false;
    private movementInterval: number | null = null;
    private rotation: number = 0;

    constructor(startX: number, startY: number, gameBoard: HTMLElement) {
        this.x = startX;
        this.y = startY;
        this.gameBoard = gameBoard;
        this.playerElement = document.createElement('div');
        this.playerElement.classList.add('player');
        this.gameBoard.appendChild(this.playerElement);
        this.SetPosition();
        this.SetRotation();
    }

    private SetPosition(): void {
        this.playerElement.style.transform = `translate(${this.x * 2}em, ${this.y * 2}em) rotate(${this.rotation}deg)`;
    }

    private SetRotation(): void {
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
        this.movementInterval = requestAnimationFrame(this.MoveLoop);
    }

    private Move(direction: string): void {
        switch (direction) {
            case 'up':
                this.y -= 0.3;
                this.rotation = 270;
                break;
            case 'down':
                this.y += 0.3;
                this.rotation = 90;
                break;
            case 'left':
                this.x -= 0.3;
                this.rotation = 180;
                break;
            case 'right':
                this.x += 0.3;
                this.rotation = 0;
                break;
        }
        this.SetRotation();
    }
}