class Traveler {
  constructor(dataSet) {
    this.id = dataSet.id;
    this.name = dataSet.name;
    this.travelerType = dataSet.travelerType;
    this.trips = [];
  }

  displayFirstName() {
    const firstName = this.name.split(' ');
    return firstName[0];
  }

  getTravelersTrips(allTrips) {
    return allTrips.filter(trip => {
      if (trip.userID === this.id) {
        this.trips.push(trip)
      }
    })
  }

  filterCurrentYearTrips(currentYear) {
    return this.trips.filter(trip => {
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