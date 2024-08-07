const mode = window['gameMode'];
let game;
if (mode === "two") {
    game = new GameBoard(21, 40, true);
}
else {
    game = new GameBoard(21, 40, false);
}
const modal = document.getElementById('modal');
document.addEventListener('keydown', (event) => {
    if (mode === 'two') {
        switch (event.key) {
            case 'ArrowUp':
                game.player.StartMoving('up');
                break;
            case 'ArrowDown':
                game.player.StartMoving('down');
                break;
            case 'ArrowLeft':
                game.player.StartMoving('left');
                break;
            case 'ArrowRight':
                game.player.StartMoving('right');
                break;
            case 'w':
            case 'W':
            case 'Ц':
            case 'ц':
                game.player2.StartMoving('up');
                break;
            case 's':
            case 'S':
            case 'Ы':
            case 'ы':
                game.player2.StartMoving('down');
                break;
            case 'a':
            case 'A':
            case 'Ф':
            case 'ф':
                game.player2.StartMoving('left');
                break;
            case 'd':
            case 'D':
            case 'В':
            case 'в':
                game.player2.StartMoving('right');
                break;
        }
    }
    else {
        switch (event.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
            case 'Ц':
            case 'ц':
                game.player.StartMoving('up');
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
            case 'Ы':
            case 'ы':
                game.player.StartMoving('down');
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
            case 'Ф':
            case 'ф':
                game.player.StartMoving('left');
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
            case 'В':
            case 'в':
                game.player.StartMoving('right');
                break;
        }
    }
});
//# sourceMappingURL=game.js.map