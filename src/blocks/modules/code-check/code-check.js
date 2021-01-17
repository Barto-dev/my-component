const cellContainer = document.querySelector('.code-check__container');

const calculateCellPosition = () => {
  const cells = document.querySelectorAll('.code-check__cell');
  cells.forEach((el, idx) => {
    el.style.setProperty('--i', `${idx}`);
  });
};

const createCells = (container, numberCells = 4) => {
  for (let i = 1; i <= numberCells; i++) {
    const cell = document.createElement('span');
    cell.classList.add('code-check__cell');
    cellContainer.append(cell);
  }
  calculateCellPosition();
};

createCells(cellContainer);
