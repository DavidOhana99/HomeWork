(function () {
    'use strict';

    let dragging;
    let offset;
    let zIndex = 1;
    let parts = [];

    document.addEventListener('mousedown', e => {
        e.preventDefault();
        if (e.target.classList.contains('parts')) {
            /*dragging = e.target;
            offset = { y: e.offsetY, x: e.offsetX };
            dragging.style.position = 'absolute';
            dragging.style.top = `${e.pageY - offset.y}px`;
            dragging.style.left = `${e.pageX - offset.x}px`;*/
            document.body.appendChild(e.target);
            offset = { y: e.offsetY, x: e.offsetX };

            if (e.target.parentNode.id === 'dropdown-content') {
                dragging = addPart(e.target.src, e.target.className);
                parts.push(dragging);

            } else {
                dragging = e.target;
            }

            dragging.style.top = `${e.pageY - offset.y}px`;
            dragging.style.left = `${e.pageX - offset.x}px`;

            if (!dragging.classList.contains('potato')) {
                dragging.style.zIndex = zIndex++;
            }
        }
    });

    document.addEventListener('mousemove', e => {
        //e.preventDefault();

        if (dragging) {
            dragging.style.top = `${e.pageY - offset.y}px`;
            dragging.style.left = `${e.pageX - offset.x}px`;
        }
    });

    document.addEventListener('mouseup', e => {
        dragging = null;

        saveState();
    });

    function saveState() {
        const partsData = parts.map(p => {
            return {
                src: p.src,
                className: p.className,
                top: p.style.top,
                left: p.style.left,
                zIndex: p.style.zIndex
            };
        });
        localStorage.setItem('parts', JSON.stringify(partsData));
    }

    function loadState() {
        const partsData = JSON.parse(localStorage.getItem('parts') || '[]');
        partsData.forEach(part => {
            const p = addPart(part.src, part.className);
            p.style.top = part.top;
            p.style.left = part.left;
            p.style.zIndex = part.zIndex;
            parts.push(p);
        });

    }

    function addPart(src, className) {
        const p = document.createElement('img');
        p.src = src;
        p.className = className;
        p.style.position = 'absolute';
        document.body.appendChild(p);
        return p;
    }

    loadState();
}());

// backgroung btns
const button = document.getElementById("B1");

button.addEventListener("click", function () {
    document.body.style.backgroundImage = 'url("/images/andyroom.jpg")';


});
const button2 = document.getElementById("B2");

button2.addEventListener("click", function () {
    document.body.style.backgroundImage = 'url("/images/andywall.png")';

});
// 

document.getElementById("bt").addEventListener("click", function () {
    // Create a new image element
    const newImage = document.createElement("img");

    // Set the source of the image (replace with your image URL or data URI)
    newImage.src = "/images/potatoHead/body/body1.png";

    // Append the image to the image container
    document.getElementById("imageContainer").appendChild(newImage);
});
document.getElementById("bt2").addEventListener("click", function () {
    // Create a new image element
    const newImage = document.createElement("img");

    // Set the source of the image (replace with your image URL or data URI)
    newImage.src = "/images/potatoHead/ears/ears.png";

    // Append the image to the image container
    document.getElementById("imageContainer").appendChild(newImage);
});




