function searchCars() {
	const model = document.getElementById("model").value;

	fetch(`https://api.api-ninjas.com/v1/cars?limit=100&make=${model}`, {
		headers: {
			'X-Api-Key': 'VRYC7BxjprtVfIFDKzO7hA==j88Hh5KnTyRl11P9'
		}
	})
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then(data => displayResults(data))
	.catch(error => console.log(error));
}

function displayResults(data) {
	const results = document.getElementById("results");

	if (data.length === 0) {
		results.innerHTML = "Aucun résultat trouvé.";
	} else {
		let html = "<ul>";
		data.forEach(car => {
			html += `<li><b>${car.make} ${car.model}</b><br> Année : ${car.year} | Type de carburant : ${car.fuel_type} | Cylinders : ${car.cylinders} | MPG en ville : ${car.city_mpg} | MPG sur autoroute : ${car.highway_mpg} |</li>`;
		});
		html += "</ul>";
		results.innerHTML = html;
	}
}


//fetch(`https://api.api-ninjas.com/v1/cars?limit=10&make=${make}&model=${model}`