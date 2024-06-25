const playArea = document.getElementById('mainContainer');
const size = 16 ** 2
const input = document.getElementById('inputBox').value;
const btn = document.getElementById('sizeBtn');

function createGrid(size) {
  clearGrid();
  for (var i = 0; i < size; i++) {
    const box = document.createElement('div');
    box.id = i;
    const pixelSize = (600 / (Math.pow(size, 0.5)))
    box.style.height = `${pixelSize}px`;
    box.style.width = `${pixelSize}px`;
    playArea.appendChild(box);
  }
};
createGrid(size)

playArea.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
});

btn.addEventListener("click", () => {
  const input = document.getElementById('inputBox').value;
  const newSize = input ** 2
  if (input > 100 || input < 16) {
    alert("Please enter a number between 16 and 100")
  } else {
    console.log(newSize)
    createGrid(newSize)
  }
})

function clearGrid() {
  const boxes = document.querySelectorAll('div');
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  })
  let e = document.getElementById("mainContainer");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}