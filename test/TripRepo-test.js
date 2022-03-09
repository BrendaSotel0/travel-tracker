import chai from 'chai';
import TripRepo from '../src/triprepo';
const expect = chai.expect;

describe('TripRepo', function () {

  let tripData;
  let trip;

  beforeEach(() => {

    tripData = [
      {
        "id": 1,
        "userID": 44,
        "destinationID": 49,
        "travelers": 1,
        "date": "2022/09/16",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 2,
        "userID": 35,
        "destinationID": 25,
        "travelers": 5,
        "date": "2022/10/04",
        "duration": 18,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 3,
        "userID": 3,
        "destinationID": 22,
        "travelers": 4,
        "date": "2022/05/22",
        "duration": 17,
        "status": "approved",
        "suggestedActivities": []
      }
    ];

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

  it('should have a method that pushes into the trips array', () => {
    trip.createTrips();
    expect(trip.trips.length).to.equal(3);
  });

});