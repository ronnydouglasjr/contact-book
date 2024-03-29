const form = document.querySelector('#form');
let line = '';

form.addEventListener('submit', function(event) {
  let lines = '';
  event.preventDefault();

  const name = document.getElementById('name');
  const numbers = document.getElementById('numbers');

  line += '<tr>';
  line += '<td>' + name.value + '</td>';
  line += '<td>' + numbers.value + '</td>';
  line += '</tr>';
  
  const table = document.querySelector('#tbody');

  lines += line;

  table.innerHTML = lines;

  name.value = '';
  numbers.value = '';
});