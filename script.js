class DraggableCube {
    constructor(cube) {
        this.cube = cube;
        this.isDragging = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.cube.addEventListener('mousedown', (e) => this.startDrag(e));
        document.addEventListener('mouseup', () => this.stopDrag());
        document.addEventListener('mousemove', (e) => this.drag(e));
    }

    startDrag(e) {
        this.isDragging = true;
        const rect = this.cube.getBoundingClientRect();
        this.offsetX = e.clientX - rect.left;
        this.offsetY = e.clientY - rect.top;
    }

    stopDrag() {
        this.isDragging = false;
    }

    drag(e) {
        if (this.isDragging) {
            const container = this.cube.parentNode;
            const containerRect = container.getBoundingClientRect();
            let x = e.clientX - this.offsetX - containerRect.left;
            let y = e.clientY - this.offsetY - containerRect.top;
            x = Math.max(0, Math.min(x, container.offsetWidth - this.cube.offsetWidth));
            y = Math.max(0, Math.min(y, container.offsetHeight - this.cube.offsetHeight));
            this.cube.style.position = 'absolute';
            this.cube.style.top = `${y}px`;
            this.cube.style.left = `${x}px`;
        }
    }
}

const cubes = document.querySelectorAll('.item');
cubes.forEach((cube) => new DraggableCube(cube));
