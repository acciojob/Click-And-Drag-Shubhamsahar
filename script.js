const todoItems = document.querySelectorAll('.todo-item');

todoItems.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', item.textContent);
        item.style.opacity = 0.5;
    });

    item.addEventListener('dragend', () => {
        item.style.opacity = 1;
    });
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.addEventListener('drop', (e) => {
    e.preventDefault();
    const item = document.querySelector('.todo-item[style*="opacity: 0.5"]');
    const target = e.target.closest('.todo-item');
    if (target) {
        const itemText = item.textContent;
        const targetText = target.textContent;
        item.textContent = targetText;
        target.textContent = itemText;
    }
    item.style.opacity = 1;
});

