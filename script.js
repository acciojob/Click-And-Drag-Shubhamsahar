const container = document.querySelector('.container');
const cubes = document.querySelectorAll('.cube');

// Initialize cube positions
let cubePositions = [];
cubes.forEach((cube, index) => {
    cube.style.top = `${index * 60}px`;
    cube.style.left = '0px';
    cubePositions.push({ x: 0, y: index * 60 });
});

// Variables to track dragging
let selectedCube = null;
let offset = { x: 0, y: 0 };

// Add event listeners to each cube
cubes.forEach((cube) => {
    cube.addEventListener('mousedown', (e) => {
        selectedCube = cube;
        offset.x = e.clientX - cube.offsetLeft;
        offset.y = e.clientY - cube.offsetTop;
    });
});

// Add event listener to the container for mouse move and up
container.addEventListener('mousemove', (e) => {
    if (selectedCube) {
        let x = e.clientX - container.offsetLeft - offset.x;
        let y = e.clientY - container.offsetTop - offset.y;

        // Boundary check
        x = Math.max(0, Math.min(x, container.offsetWidth - selectedCube.offsetWidth));
        y = Math.max(0, Math.min(y, container.offsetHeight - selectedCube.offsetHeight));

        selectedCube.style.top = `${y}px`;
        selectedCube.style.left = `${x}px`;
    }
});

container.addEventListener('mouseup', () => {
    selectedCube = null;
});

