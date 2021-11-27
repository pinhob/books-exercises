const campos = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade'),
];

const tbody = document.querySelector('.table tbody');
const form = document.querySelector('.form');

form.addEventListener('submit', () => {
  event.preventDefault();

  const tr = document.createElement('tr');

  campos.forEach((campo) => {
    const td = document.createElement('td');

    td.textContent = campo.value;

    tr.appendChild(td);
  })

  const tdVolume = document.createElement('td');
  const quantidade = campos[1].value;
  const valor = campos[2].value;

  tdVolume.textContent = quantidade * valor;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr)

  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;
  campos[0].focus();
});

