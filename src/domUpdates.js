const domUpdates = {

  updateHeaderText(annulSpent) {
    const headerMessage = document.querySelector('.header-message');
    headerMessage.innerHTML = `You've spent $${annulSpent} on trips this year!`;
  },

  updateHeaderGreeting(userName) {
    const headerGreeting = document.querySelector('.header-greeting');
    headerGreeting.innerHTML = `Hello, ${userName}`;
  },

  updateTripBoard(traveler) {
    const pastTripsBoard = document.querySelector('#pastTripBoard');
    const upcomingTripsBoard = document.querySelector('#upcomingTripBoard');
    const pendingTripsBoard = document.querySelector('#pendingTripBoard');
    const currentTripMessage = document.querySelector('.current-trip-message');

    traveler.pastTrips.forEach((trip) => {
      pastTripsBoard.innerHTML += `
    <div class="destination-container">
      <img class="trip-board-img" src="${trip.destination.image}"
        alt="${trip.destination.alt}">
      <h3 class="current-trip-message">${trip.destination.destination}</h3>
    </div>
    <hr>
    `
    })

    if (traveler.upcomingTrips.length === 0) {
      currentTripMessage.innerHTML += `<p> It doesn't look like you have any upcoming adventures</p>`
    } else {
    traveler.upcomingTrips.forEach((trip) => {
      upcomingTripsBoard.innerHTML += `
        <div class="destination-container">
          <img class="trip-board-img" src="${trip.destination.image}" 
            alt="${trip.destination.alt}">
          <h3 class="current-trip-message">${trip.destination.destination}</h3>
        </div>
        <hr>
      `}
    )
    }
    traveler.pendingTrips.forEach((trip) => {
      pendingTripsBoard.innerHTML += `
    <div class="destination-container">
      <img class="trip-board-img" src="${trip.destination.image}"
        alt="${trip.destination.alt}">
      <h3 class="current-trip-message">${trip.destination.destination}</h3>
    </div>
    <hr>
    `
    })
  },

  updateDestinationSelection(destinations) {
    const destinationSelector = document.querySelector('.destination-selector');
    const getDestination = destinations.forEach(destination => {
      const destinationOption = document.createElement('option');
      destinationOption.innerText = destination.destination;
      destinationOption.value = destination.destination;
      destinationSelector.appendChild(destinationOption);
    });
  },

  updateTripEstimate(estimate) {
    const tripEstimate = document.querySelector('.new-trip-cost-header');
    tripEstimate.innerHTML = `Trip Estimate: $${estimate ? estimate : "0"}`
  },

  resetDom() {
    const pastTripsBoard = document.querySelector('#pastTripBoard');
    const upcomingTripsBoard = document.querySelector('#upcomingTripBoard');
    const pendingTripsBoard = document.querySelector('#pendingTripBoard');

    pastTripsBoard.innerHTML = `<h2 class="trip-board-header">Past Trips</h2>`;
    upcomingTripsBoard.innerHTML = `<h2 class="trip-board-header">Upcoming Trips</h2>`;
    pendingTripsBoard.innerHTML = `<h2 class="trip-board-header">Pending Trips</h2>`;
  },

  resetForm() {
    const formDate = document.getElementById('formDate');
    const durationInput = document.getElementById('formDuration');
    const travelersInput = document.getElementById('formNumberOfTravelers');
    const destinationsInput = document.getElementById('destinationSelector');
    formDate.value = '';
    durationInput.value = '';
    travelersInput.value = '';
    destinationsInput.value = '';
  },

  loginSubmit() {
    const loginPage = document.querySelector('.login-section');
    const dashboard = document.querySelector('.dashboard');
    loginPage.classList.add('hidden');
    dashboard.classList.remove('hidden')
  },

  invalidLogin() {
    const loginError = document.querySelector('.login-error');
    loginError.innerHTML = `Invalid login`
  },

}

export default domUpdates;
