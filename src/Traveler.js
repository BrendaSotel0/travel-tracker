class Traveler {
  constructor(dataSet) {
    this.id = dataSet.id;
    this.name = dataSet.name;
    this.travelerType = dataSet.travelerType;
    this.trips = [];
    console.log("DS", this.name)
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


}


export default Traveler;