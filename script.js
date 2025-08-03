class DraggableCube {
    constructor(cube) {
        this.cube = cube;
        this.isDragging = false;
        this.offsetX = 0;
        this.cube.addEventListener('mousedown', (e) => this.startDrag(e));
        document.addEventListener('mouseup', () => this.stopDrag());
        document.addEventListener('mousemove', (e) => this.drag(e));
    }

    startDrag(e) {
        this.isDragging = true;
        this.offsetX = e.clientX - this.cube.getBoundingClientRect().left;
        this.offsetY = e.clientY - this.cube.getBoundingClientRect().top;
    }

    stopDrag() {
        this.isDragging = false;
    }

    drag(e) {
        if (this.isDragging) {
            const container = this.cube.parentNode;
            let x = e.clientX - this.offsetX - container.getBoundingClientRect().left;
            let y = e.clientY - this.offsetY - container.getBoundingClientRect().top;
            x = Math.max(0, Math.min(x, container.offsetWidth - this.cube.offsetWidth));
            y = Math.max(0, Math.min(y, container.offsetHeight - this.cube.offsetHeight));
            this.cube.style.position = 'absolute';
            this.cube.style.top = `${y}px`;
            this.cube.style.left = `${x}px`;
        }
    }
}

const cubes = document.querySelectorAll('.item');
cubes.forEach((cube, index) => {
    cube.style.position = 'absolute';
    cube.style.top = `${(index % 5) * 60}px`;
    cube.style.left = `${Math.floor(index / 5) * 60}px`;
    new DraggableCube(cube);
});

