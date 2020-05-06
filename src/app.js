// TODO: Build an awesome garage!

// ==== GET ALL CARS ====
// get list of all cars in garage
// get the cars list from the DOM
// iterate over list of cars
//    for each car:
//    build HTML for the car
//    add it to the DOM

const url = 'https://wagon-garage-api.herokuapp.com/abitbol-and-sons/cars';

const addCarHtml = (car) => {
  const html = `
    <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
      </div>
      <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong> ${car.owner}</p>
        <p><strong>Plate:</strong> ${car.plate}</p>
      </div>
    </div>`;

  const list = document.querySelector('.cars-list');
  list.insertAdjacentHTML('beforeend', html);
}


const loadAllCars = () => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      data.forEach(addCarHtml);
    });
};

// ==== ADD A NEW CAR ====
// select form in DOM
// add event listener for submit event
// prevent default
// get input from form fields
// fetch url
  // POST
  // JSON body
  // content-type header
// extract info from response data
// insert into DOM (list)

const form = document.getElementById('new-car');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    "brand": document.querySelector('#brand').value,
    "model": document.querySelector('#model').value,
    "owner": document.querySelector('#owner').value,
    "plate": document.querySelector('#plate').value
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(addCarHtml);
});


loadAllCars();
