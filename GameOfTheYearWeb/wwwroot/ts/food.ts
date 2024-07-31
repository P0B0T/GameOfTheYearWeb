class Food {
    public x: number;
    public y: number;

    private gameBoard: HTMLElement;
    private foodElement: HTMLElement;

    constructor(gameBoard: HTMLElement) {
        this.gameBoard = gameBoard;
        this.foodElement = document.createElement('div');
        this.foodElement.classList.add('food');
        this.gameBoard.appendChild(this.foodElement);
        this.SetRandomPosition();
    }

    public SetRandomPosition() {
        this.x = Math.floor(Math.random() * 40);
        this.y = Math.floor(Math.random() * 21)

        this.foodElement.style.transform = `translate(${this.x * 2}em, ${this.y * 2}em)`;
    }
}