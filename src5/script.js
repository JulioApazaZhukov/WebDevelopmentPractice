document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const gridSize = 25;
    const cellSize = 20;

    const snake = {
        body: [{ x: 5, y: 5 }],
        direction: 'right',
    };

    let food = generateFood();

    function draw() {
        gameBoard.innerHTML = '';

        snake.body.forEach(segment => {
            const snakeSegment = document.createElement('div');
            snakeSegment.className = 'snake';
            snakeSegment.style.left = segment.x * cellSize + 'px';
            snakeSegment.style.top = segment.y * cellSize + 'px';
            gameBoard.appendChild(snakeSegment);
        });

        const foodElement = document.createElement('div');
        foodElement.className = 'food';
        foodElement.style.left = food.x * cellSize + 'px';
        foodElement.style.top = food.y * cellSize + 'px';
        gameBoard.appendChild(foodElement);
    }

    function generateFood() {
        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);
        return { x, y };
    }

    function update() {
        const head = Object.assign({}, snake.body[0]);
        switch (snake.direction) {
            case 'up':
                head.y -= 1;
                break;
            case 'down':
                head.y += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'right':
                head.x += 1;
                break;
        }

        if (head.x === food.x && head.y === food.y) {
            snake.body.unshift(food);
            food = generateFood();
        } else {
            snake.body.pop();
        }

        if (
            head.x < 0 || head.x >= gridSize ||
            head.y < 0 || head.y >= gridSize
        ) {
            resetGame();
            console.log("Border colition");
            return;
        }

        if (checkCollisionWithSelf(head)) {
            resetGame();
            return;
        }

        snake.body.unshift(head);

        draw();
    }

    function checkCollisionWithSelf(head) {
        return snake.body.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
    }

    function resetGame() {
        alert('¡Perdiste! Reiniciando el juego.');
        snake.body = [{ x: 5, y: 5 }];
        snake.direction = 'right';
        food = generateFood();
        draw();
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                snake.direction = 'up';
                break;
            case 'ArrowDown':
                snake.direction = 'down';
                break;
            case 'ArrowLeft':
                snake.direction = 'left';
                break;
            case 'ArrowRight':
                snake.direction = 'right';
                break;
        }
    });

    setInterval(update, 50);
});