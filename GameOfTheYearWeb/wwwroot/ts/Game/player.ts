class Player {
    public x: number;
    public y: number;
    public score: number = 0;

    private gameBoard: HTMLElement;
    private playerElement: HTMLElement;
    private movingDirection: string | null = null;
    private moving: boolean = false;
    private movementInterval: number | null = null;
    private rotation: number = 0;
    private crash: GameBoard;
    private crashed: boolean = false;
    private speedChanger: HTMLInputElement;
    private currentSpeed: HTMLSpanElement;

    constructor(startX: number, startY: number, gameBoard: HTMLElement, onGameBoardCrash: GameBoard, playerClass?: string) {
        this.x = startX;
        this.y = startY;
        this.gameBoard = gameBoard;
        this.crash = onGameBoardCrash;

        this.playerElement = document.createElement('div');
        this.playerElement.classList.add('player', playerClass);
        this.gameBoard.appendChild(this.playerElement);

        this.speedChanger = document.querySelector('#divSpeed input');
        this.currentSpeed = document.querySelector('#divSpeed span');

        this.SetPosition();
        this.SpeedChange();
    }

    private SetPosition(): void {
        this.playerElement.style.transform = `translate(${this.x * 98}%, ${this.y * 91}%) rotate(${this.rotation}deg)`;
    }

    public StartMoving(direction: string): void {
        if (this.crashed || (this.moving && this.movingDirection === direction))
            return;

        this.movingDirection = direction;
        this.moving = true;

        if (!this.movementInterval)
            this.MoveLoop();
    }

    public StopMoving(): void {
        this.moving = false;
        cancelAnimationFrame(this.movementInterval);
        this.movementInterval = null;
        this.crashed = true;
    }

    private MoveLoop = () => {
        if (!this.moving || this.movingDirection === null)
            return;

        this.Move(this.movingDirection);
        this.SetPosition();
        this.crash.CheckCrashFood();

        if (this.crash.CheckCrashWall(this)) {
            this.StopMoving();

            const player1Crashed = this.crash.CheckCrashWall(this.crash.player);
            const player2Crashed = this.crash.player2 ? this.crash.CheckCrashWall(this.crash.player2) : true;

            if (player1Crashed && player2Crashed) {
                this.crash.UpdateScoreInModal();
                this.ModalShow();

                const labelVictory = document.querySelector('#victory') as HTMLElement;
                labelVictory.textContent = this.crash.ScoreCompare();
            }
        } else {
            setTimeout(() => {
                this.movementInterval = requestAnimationFrame(this.MoveLoop);
            }, 30 / this.SpeedChange());
        }
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

    private ModalShow(): void {
        const modal = $('#modal');

        modal.modal({
            backdrop: 'static',
            keyboard: false
        });

        modal.modal('show');
    }

    private SpeedChange(): number {
        this.speedChanger.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                    event.preventDefault();
            }
        });

        this.speedChanger.addEventListener('input', () => {
            this.currentSpeed.textContent = this.speedChanger.value;

            Cookies.SetCookie('speed', this.speedChanger.valueAsNumber);
        });

        return this.speedChanger.valueAsNumber;
    }

}