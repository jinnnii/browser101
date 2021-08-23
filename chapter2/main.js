function updateDisplay(event) {

    const horizontal = document.querySelector('.horizontal');
    const vertical = document.querySelector('.vertical');
    const tartget = document.querySelector('.target');
    const position = document.querySelector('.position');

    const x = event.clientX;
    const y = event.clientY;

    position.innerHTML = (` 
        X : ${x}
        Y : ${y}
    `);

    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;

    tartget.style.top = `${y}px`;
    tartget.style.left = `${x}px`;

    position.style.left = `${x}px`;
    position.style.top = `${y}px`;




}

window.addEventListener("mousemove", (event) => updateDisplay(event), false);