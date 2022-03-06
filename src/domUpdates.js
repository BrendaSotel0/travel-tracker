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
  }

}

export default domUpdates;
