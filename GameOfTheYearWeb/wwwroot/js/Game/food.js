class Food {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
        this.foodElement = document.createElement('div');
        this.foodElement.classList.add('food');
        this.gameBoard.appendChild(this.foodElement);
        this.SetRandomPosition();
    }
    SetRandomPosition() {
        this.x = Math.floor(Math.random() * 40);
        this.y = Math.floor(Math.random() * 21);
        this.foodElement.style.transform = `translate(${this.x * 98}%, ${this.y * 91}%)`;
    }
}
//# sourceMappingURL=food.js.map