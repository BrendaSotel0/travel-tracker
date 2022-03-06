class Trip {
  constructor(tripDataSet) {
    this.id = tripDataSet.id;
    this.userID = tripDataSet.userID;
    this.destinationID = tripDataSet.destinationID;
    this.travelers = tripDataSet.travelers;
    this.date = tripDataSet.date;
    this.duration = tripDataSet.duration;
    this.status = tripDataSet.status;
    this.suggestedActivities = tripDataSet.suggestedActivities;
    this.destination = null
  }

  // findTripCost() {

  // }

}

export default Trip;