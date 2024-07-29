const game = new GameBoard(21, 40);
document.addEventListener('keydown', (event) => {
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
});
//# sourceMappingURL=game.js.map