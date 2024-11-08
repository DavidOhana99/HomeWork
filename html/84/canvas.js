(function () {
    const canvas = document.querySelector('#theCanvas');
    const context = canvas.getContext('2d');

    context.fillStyle = 'purple';
    context.fillRect(75, 75, 50, 50);
    context.fillRect(440, 75, 52 ,52);
    context.fillStyle = 'gray';
    context.fillRect(300, 300, 52, 52);

    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(200,500);
    context.lineTo(2000, 60);
 
    
    context.stroke();
    

}());