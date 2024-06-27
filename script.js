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
  ['I', 1],
];
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    convert.click();
  }
});
convert.addEventListener('click', () => {
  const inputValue = parseInt(input.value, 10);
  if (!inputValue) {
    output.innerText = 'Please enter a valid number';
  } else if (inputValue < 1) {
    output.innerText = 'Please enter a number greater than or equal to 1';
  } else if (inputValue > 3999) {
    output.innerText = 'Please enter a number less than or equal to 3999';
  } else {
    let result = '';
    let TempValue = inputValue;
    for (const [roman, number] of numerals) {
      while (TempValue >= number) {
        result += roman;
        TempValue -= number;
      }
    }
    output.innerText = result;
  }
});
