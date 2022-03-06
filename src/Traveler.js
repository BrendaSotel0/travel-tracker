class Traveler {
  constructor(dataSet) {
    this.id = dataSet.id;
    this.name = dataSet.name;
    this.travelerType = dataSet.travelerType;
    this.travelersTrips = [];
    this.pastTrips = [];
    this.currentTrips = [];
    this.upcomingTrips = [];
    this.pendingTrips = [];
    // present
  }

  displayFirstName() {
    const firstName = this.name.split(' ');
    return firstName[0];
  }

  getTravelersTrips(allTrips) {
    return allTrips.filter(trip => {
      if (trip.userID === this.id) {
        this.travelersTrips.push(trip)
      }
    })
  }

  sortPendingTrips() {
    const pending = this.travelersTrips.filter(trip => {
      if (trip.status === 'pending') {
      this.pendingTrips.push(trip)
      }
    });
    return pending;
  }

  sortPastTrips() {
    const past = this.travelersTrips.filter(trip => {
      const currentDate = Date.now();
      const tripDate = new Date(`${trip.date}`).getTime();
      if (currentDate > tripDate) {
        return trip;
      } 
    });
    this.pastTrips = past;
    return past;
  }

  sortUpcomingTrips() {
    const upcoming = this.travelersTrips.filter(trip => {
      const currentDate = Date.now();
      const tripDate = new Date(`${trip.date}`).getTime();
      if (currentDate < tripDate && trip.status === 'approved') {
        return trip;
      }
    });
    this.upcomingTrips = upcoming;
    return upcoming;
  }

  sortTrips() {
    this.sortPendingTrips();
    this.sortPastTrips();
    this.sortUpcomingTrips();
  }

  filterCurrentYearTrips(currentYear) {
    return this.travelersTrips.filter(trip => {
      const splitDate = parseInt(trip.date.split("/")[0])
      return splitDate === currentYear
    })
  }

  calculateAnnualTripsCost(year, destinations) {
    const thisYearsTrips = this.filterCurrentYearTrips(year);
    const result = thisYearsTrips.reduce((acc, trip) => {
      destinations.forEach(destination => {
        if (destination.id === trip.destinationID) {
          acc += (destination.estimatedLodgingCostPerDay * trip.duration) + (destination.estimatedFlightCostPerPerson * trip.travelers)
        }
      })
      return acc
    }, 0)
    return result * 1.1
      
  }

}


export default Traveler;