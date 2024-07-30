class Player {
    constructor(startX, startY, gameBoard, onGameBoardCrash) {
        this.movingDirection = null;
        this.moving = false;
        this.movementInterval = null;
        this.rotation = 0;
        this.score = 0;
        this.MoveLoop = () => {
            if (!this.moving || this.movingDirection === null)
                return;
            this.Move(this.movingDirection);
            this.SetPosition();
            this.crash.CheckCrashFood();
            if (this.crash.CheckCrashWall()) {
                this.StopMoving();
            }
            setTimeout(() => {
                this.movementInterval = requestAnimationFrame(this.MoveLoop);
            }, 30);
        };
        this.x = startX;
        this.y = startY;
        this.gameBoard = gameBoard;
        this.crash = onGameBoardCrash;
        this.playerElement = document.createElement('div');
        this.playerElement.classList.add('player');
        this.gameBoard.appendChild(this.playerElement);
        this.SetPosition();
    }
    SetPosition() {
        this.playerElement.style.transform = `translate(${this.x * 2}em, ${this.y * 2}em) rotate(${this.rotation}deg)`;
    }
    StartMoving(direction) {
        if (this.moving && this.movingDirection === direction)
            return;
        this.movingDirection = direction;
        this.moving = true;
        if (!this.movementInterval) {
            this.MoveLoop();
        }
    }
    StopMoving() {
        this.moving = false;
        if (this.movementInterval !== null) {
            cancelAnimationFrame(this.movementInterval);
            this.movementInterval = null;
        }
    }
    Move(direction) {
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
//# sourceMappingURL=player.js.map