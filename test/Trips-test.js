
import chai from 'chai';
import Trip from '../src/trip'
const expect = chai.expect;

describe('Trip', function() {

  let tripData;
  let trip;
  
  beforeEach(() => {
    tripData = {
      "id": 1,
      "userID": 44,
      "destinationID": 49,
      "travelers": 1,
      "date": "2022/09/16",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": []
    };

    trip = new Trip(tripData)

  })
  
  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of trip', () => {
    expect(trip).to.be.an.instanceOf(Trip);
  });
  
  it('should have a trip id', () => {
    expect(trip.id).to.equal(1);
  });
  
  it('should have a user ID', () => {
    expect(trip.userID).to.equal(44);
  });

  it('shoud have a destination ID', () => {
    expect(trip.destinationID).to.equal(49);
  });

  it('should have a number of travelers', () => {
    expect(trip.travelers).to.equal(1);
  });

  it('should have a date', () => {
    expect(trip.date).to.equal("2022/09/16");
  });

  it('should have a durartion', () => {
    expect(trip.duration).to.equal(8);
  });

  it('should have a status', () => {
    expect(trip.status).to.equal("approved");
  });
  
  it('should have a list of suggested activities', () => {
    expect(trip.suggestedActivities).to.deep.equal([]);
  })
  
});
