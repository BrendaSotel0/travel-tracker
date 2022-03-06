class Destination {
  constructor(destinationDataSet) {
    this.id = destinationDataSet.id;
    this.destination = destinationDataSet.destination;
    this.estimatedLodgingCostPerDay = destinationDataSet.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = destinationDataSet.estimatedFlightCostPerPerson;
    this.image = destinationDataSet.image;
    this.alt = destinationDataSet.alt;
  }
}
            

export default Destination;