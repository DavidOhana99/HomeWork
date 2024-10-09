(function () {
    'use strict';

    // const box = document.querySelector('.box');
    let dragging;
    let offset;

    document.addEventListener('mousedown', e => {
        e.preventDefault();
        if (e.target.className === 'parts') {
            console.log('mouse down', e);
            dragging = e.target;
            offset = { y: e.offsetY, x: e.offsetX };
        }
    });

    document.addEventListener('mousemove', e => {
        //e.preventDefault();

        if (dragging) {
            console.log('mouse move', e);

            dragging.style.top = `${e.pageY - offset.y}px`; dragging.style.left = `${e.pageX - offset.x}px`;
        }
    });

    document.addEventListener('mouseup', e => {
        console.log('mouse up', e);
        dragging = null;
    });

    const button = document.getElementById("B1");

    button.addEventListener("click", function () {
        document.body.style.backgroundImage = 'url("/images/andyroom.jpg")';
        

    });
    const button2 = document.getElementById("B2");

    button2.addEventListener("click", function () {
        document.body.style.backgroundImage = 'url("/images/andywall.png")';

    });

}());
