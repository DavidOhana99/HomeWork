(function () {
    'use strict';

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');

    function resizeCanvas() {
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    const RADIUS = 100;
    let x = RADIUS;
    let y = RADIUS;
    let dx = 1;
    let dy = 2.5;

    const balls = [];

    const button = document.querySelector('#creatball');
    setInterval(() => {
        context.clearRect(0, 0, theCanvas.width, theCanvas.height);
        balls.forEach(ball => {
            context.beginPath();
            context.fillStyle = ball.color;

            ball.x += ball.dx;
            ball.y += ball.dy;


            if (ball.x >= theCanvas.width - ball.RADIUS || ball.x <= ball.RADIUS) {
                ball.dx = -ball.dx;
            }

            if (ball.y >= theCanvas.height - ball.RADIUS || ball.y <= ball.RADIUS) {
                ball.dy = -ball.dy;
            }

            context.arc(ball.x, ball.y, ball.RADIUS, 0, Math.PI * 2);
            context.fill();


        });

    }, 1);
    button.addEventListener('click', () => {
        balls.push({
            color: document.querySelector('#color').value,
            x: RADIUS,
            y: RADIUS,
            dx: 1,
            dy: 1.25,
            RADIUS: document.querySelector('#rad').value

        })
    });

}());
