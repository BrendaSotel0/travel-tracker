class Traveler {
  constructor(dataSet) {
    this.id = dataSet.id;
    this.name = dataSet.name;
    this.travelerType = dataSet.travelerType;
  }

  displayFirstName() {
    const firstName = this.name.split(' ');
    return firstName[0];
  }

}

export default Traveler;