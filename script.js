const playArea = document.getElementById('mainContainer');
const size = 16 ** 2
function createGrid(size) {
  for (var i = 0; i < size; i++) {
    const box = document.createElement('div');
    box.id = i;
    playArea.appendChild(box);
  }
};
createGrid(size)

playArea.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
});