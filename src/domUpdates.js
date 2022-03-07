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
    `
    })

    if (traveler.upcomingTrips.length === 0) {
      currentTripMessage.innerHTML = `<p> It doesn't look like you have any upcoming adventures</p>`
    } else {
    traveler.upcomingTrips.forEach((trip) => {
      upcomingTripsBoard.innerHTML += `
        <div class="destination-container">
          <img class="trip-board-img" src="${trip.destination.image}" 
            alt="${trip.destination.alt}">
          <h3 class="current-trip-message">${trip.destination.destination}</h3>
        </div>
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

}

export default domUpdates;
