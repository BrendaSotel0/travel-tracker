import Trip from './Trip';

class TripRepo {
  constructor(rawTripData) {
    this.rawTripData = rawTripData;
    this.trips = [];
  }

  createTrips() {
    this.rawTripData.forEach(trip => {
      this.trips.push(new Trip(trip))
    })
  }
}

export default TripRepo;