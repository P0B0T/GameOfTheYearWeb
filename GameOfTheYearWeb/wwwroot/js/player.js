class Player {
    constructor(startX, startY, gameBoard) {
        this.movingDirection = null;
        this.moving = false;
        this.movementInterval = null;
        this.rotation = 0;
        this.MoveLoop = () => {
            if (!this.moving || this.movingDirection === null)
                return;
            this.Move(this.movingDirection);
            this.SetPosition();
            this.movementInterval = requestAnimationFrame(this.MoveLoop);
        };
        this.x = startX;
        this.y = startY;
        this.gameBoard = gameBoard;
        this.playerElement = document.createElement('div');
        this.playerElement.classList.add('player');
        this.gameBoard.appendChild(this.playerElement);
        this.SetPosition();
        this.SetRotation();
    }
    SetPosition() {
        this.playerElement.style.transform = `translate(${this.x * 2}em, ${this.y * 2}em) rotate(${this.rotation}deg)`;
    }
    SetRotation() {
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
//# sourceMappingURL=player.js.map