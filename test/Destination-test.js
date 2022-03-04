
import chai from 'chai';
import Destination from '../src/destination'
const expect = chai.expect;

describe('Destination', () => {

  let destinationData;
  let destination;
  
  beforeEach(() => {
    destinationData = {
      "id": 1,
      "destination": "Lima, Peru",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 400,
      "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt": "overview of city buildings with a clear sky"
    };

    destination = new Destination(destinationData)

  })

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of destination', () => {
    expect(destination).to.be.an.instanceOf(Destination)
  })

  it('should store an id', () => {
    expect(destination.id).to.equal(1);
  })

  it('should store a destination name', () => {
    expect(destination.destination).to.equal("Lima, Peru");
  })

  it('should store a lodging cost per day', () => {
    expect(destination.estimatedLodgingCostPerDay).to.equal(70);
  })

  it('should store an estimated flight cost per person', () => {
    expect(destination.estimatedFlightCostPerPerson).to.equal(400);
  })

  it('should store a destination image', () => {
    expect(destination.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
  })

  it('should store alt text for image', () => {
    expect(destination.alt).to.equal("overview of city buildings with a clear sky");
  })
  
});