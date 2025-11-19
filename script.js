const container = document.getElementById("container");
const resizeBtn = document.getElementById("resizeBtn");

function createGrid(size) {
  container.innerHTML = ""; // پاک کردن گرید قبلی

  const cellSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.dataset.opacity = 0;

    cell.addEventListener("mouseover", function () {
      // رنگ تصادفی
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);

      // تیره شدن تدریجی تا 100%
      let opacity = parseFloat(cell.dataset.opacity);
      if (opacity < 1) {
        opacity += 0.1;
        cell.dataset.opacity = opacity;
      }

      cell.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    });

    container.appendChild(cell);
  }
}

resizeBtn.addEventListener("click", () => {
  let size = prompt("Enter grid size (1-100):");

  if (size === null) return;

  size = parseInt(size);

  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(size);
});

createGrid(16);
