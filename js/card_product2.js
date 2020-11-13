const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoeBackground');

let prevColor = "blue";
let animationsEnd = true;
/*------------------------------------------------*/

//function para seleccionar el size
function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}
//Añadiendo event click a todos los size
sizes.forEach(size => size.addEventListener('click', changeSize));

/*------------------------------------------------*/

//function para seleccionar el color y cambiar el color de algunos elementos
function changeColor(){

    if(!animationsEnd) return;


    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    //Eliminando la clase active de los colors y añadiendola al seleccionado
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    //Añadiendo el color referente a los elementos
    document.documentElement.style.setProperty('--primary', primary);

    //Eliminando la clase show de los shoes y añadiendola al seleccionado
    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');    

    //Eliminando la clase first de los gradients y añadiendola al seleccionado
    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');
    prevColor = color;


    animationsEnd = false;
    gradient.addEventListener('animationend', () => {
        animationsEnd = true;
    })
}
//Añadiendo event click a todos los color
colors.forEach(c => c.addEventListener('click', changeColor));


//manipulando el height del background

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        console.log(shoeHeight);
        shoeBg.style.height = `${shoeHeight}px`;
    }
    else{
        shoeBg.style.height = '475px';
    }
}

changeHeight();
window.addEventListener('resize', changeHeight)