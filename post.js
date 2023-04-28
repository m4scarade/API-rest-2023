
const form = document.querySelector('#addVehicleForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const make = document.querySelector('#make').value;
  const model = document.querySelector('#model').value;
  const year = document.querySelector('#year').value;
  const performance = document.querySelector('#performance').value;
  const Puissance = document.querySelector('#Puissance').value;
  const option = document.querySelector('#option').value;
  const color = document.querySelector('#color').value;

  fetch('https://v07qg.mocklab.io/car', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ make, model, year, performance, Puissance, option, color })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Véhicule ajouté:', data);
    form.reset();
  })
  .catch(error => console.error('Erreur:', error));
});
