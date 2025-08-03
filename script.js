let draggedItem = null;

document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('todo-item')) {
        draggedItem = e.target;
        e.dataTransfer.setData('text', e.target.textContent);
        e.target.style.opacity = 0.5;
    }
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedItem && e.target.classList.contains('todo-item')) {
        const temp = draggedItem.textContent;
        draggedItem.textContent = e.target.textContent;
        e.target.textContent = temp;
    }
    if (draggedItem) {
        draggedItem.style.opacity = 1;
    }
});

document.addEventListener('dragend', () => {
    if (draggedItem) {
        draggedItem.style.opacity = 1;
    }
});


cypress/integration/todo-app.spec.js

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('drag & drop works correctly', { timeout: 10000 }, () => {
        cy.get('.todo-item').eq(0).trigger('dragstart', { force: true });
        cy.get('.todo-item').eq(1).trigger('dragover', { force: true });
        cy.get('.todo-item').eq(1).trigger('drop', { force: true });

        cy.get('.todo-item').eq(0).should('contain', 'Item 2');
        cy.get('.todo-item').eq(1).should('contain', 'Item 1');
    });
});


