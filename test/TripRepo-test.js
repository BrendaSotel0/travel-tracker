import chai from 'chai';
import TripRepo from '../src/triprepo';
const expect = chai.expect;

describe('TripRepo', function () {

  let tripData;
  let trip;

  beforeEach(() => {
    trip = new TripRepo(tripData);
  });

  it('should be a function', () => {
    expect(TripRepo).to.be.a('function');
  });

  it('should be an instance of trip repo', () => {
    expect(trip).to.be.an.instanceOf(TripRepo);
  });

  it('should have a trips array', () => {
    expect(trip.trips).to.eql([])
  });

  // it('should have a method that creates a trip', () => {
  //   expect(trip.createTrips()).to.equal();
  // })

  //test if it can create a trip and push it into this.trips
  //trip start date isn't before today

});