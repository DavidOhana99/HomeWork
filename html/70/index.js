(function () {
    'use strict';

    function getRandomRGBColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    let interval;
    const colorPage = document.querySelector('#btn');
    colorPage.addEventListener('click', e => {
        e.stopPropagation();


        console.log(e);
        if (!interval) {
            interval = setInterval(() => {
                document.body.style.color = getRandomRGBColor();
                document.body.style.backgroundColor = getRandomRGBColor();
            },1000);
            console.log(`started interval ${interval}`);
          
            e.target.innerText = 'Stop';
        } else {
            clearInterval(interval);
            interval = null;

            e.target.innerText = 'Start';
        }

    });


}());