class Player {
    constructor(startX, startY, gameBoard, onGameBoardCrash, playerClass) {
        this.score = 0;
        this.movingDirection = null;
        this.moving = false;
        this.movementInterval = null;
        this.rotation = 0;
        this.crashed = false;
        this.MoveLoop = () => {
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
                    const labelVictory = document.querySelector('#victory');
                    labelVictory.textContent = this.crash.ScoreCompare();
                }
            }
            else {
                setTimeout(() => {
                    this.movementInterval = requestAnimationFrame(this.MoveLoop);
                }, 30);
            }
        };
        this.x = startX;
        this.y = startY;
        this.gameBoard = gameBoard;
        this.crash = onGameBoardCrash;
        this.playerElement = document.createElement('div');
        this.playerElement.classList.add('player', playerClass);
        this.gameBoard.appendChild(this.playerElement);
        this.SetPosition();
    }
    SetPosition() {
        this.playerElement.style.transform = `translate(${this.x * 98}%, ${this.y * 91}%) rotate(${this.rotation}deg)`;
    }
    StartMoving(direction) {
        if (this.crashed || (this.moving && this.movingDirection === direction))
            return;
        this.movingDirection = direction;
        this.moving = true;
        if (!this.movementInterval)
            this.MoveLoop();
    }
    StopMoving() {
        this.moving = false;
        cancelAnimationFrame(this.movementInterval);
        this.movementInterval = null;
        this.crashed = true;
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
    ModalShow() {
        const modal = $('#modal');
        modal.modal({
            backdrop: 'static',
            keyboard: false
        });
        modal.modal('show');
    }
}
//# sourceMappingURL=player.js.map