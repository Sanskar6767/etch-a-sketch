const start = document.querySelector('.start-button');
const clear = document.querySelector('.clear-button');
let size ;
let area = document.querySelector('.playing-area');
const colorPicker = document.querySelector('#favcolor'); // Select the color picker
let color = colorPicker.value;


start.addEventListener('click', initialisation);

function initialisation() {
    do {
        size = prompt("How many grids would you like? max= 100");
    }
    while (size >100);
    console.log(`${size}`);
    area.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    area.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    createGrid(size);

}

colorPicker.addEventListener('input', function() {
    color = this.value;
});


function createGrid(size){
    area.innerHTML = '';

    
    for (let i = 0; i< size*size; i++){
        let divi = document.createElement('div');
        divi.classList.add('grid-item');
        area.appendChild(divi);
    }

    const gridItems = document.querySelectorAll('.playing-area .grid-item');

    gridItems.forEach(item =>{
        item.addEventListener('mouseenter', (event) =>{
            item.style.backgroundColor = color;
        });
    });
}


clear.addEventListener('click', clearGrid);
function clearGrid() {
    area.innerHTML = '';
}