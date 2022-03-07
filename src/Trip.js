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

  findTripCost() {
    //the trips cost is duration * cost to say
    //and num of ppl * cost per flight
  }

}

export default Trip;