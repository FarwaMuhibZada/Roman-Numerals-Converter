const input = document.getElementById('number');
const convert = document.getElementById('convert-btn');
const output = document.getElementById('output');
const numerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];
input.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
      convert.click();
    }
    });
    convert.addEventListener('click', () => { 
    let value = input.value;
    if (!value){
      output.innerText = 'Please enter a valid number';
    }
    });