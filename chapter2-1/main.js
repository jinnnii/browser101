const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const position = document.querySelector('.position');

const targetSize = target.getBoundingClientRect();
const targetWidth = targetSize.width / 2;
const targetHeight = targetSize.height / 2;

function updateDisplay(event) {
    const x = event.clientX;
    const y = event.clientY;

    position.innerHTML = (` 
        X : ${x}
        Y : ${y}
    `);

    // 1. Use all Operration 
    /*vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;

    target.style.top = `${y}px`;
    target.style.left = `${x}px`;

    position.style.left = `${x}px`;
    position.style.top = `${y}px`;*/


    //2. Only use Composition
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetWidth}px,${y - targetHeight}px)`;
    position.style.transform = `translate(${x}px,${y}px)`;
}


window.addEventListener("mousemove", (event) => updateDisplay(event));