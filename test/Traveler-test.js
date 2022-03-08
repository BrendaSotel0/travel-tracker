import chai from 'chai';
import Traveler from '../src/traveler'
const expect = chai.expect;

describe('Traveler', () => {

  let travelerData; 
  let traveler1;

  beforeEach(() => {
    travelerData = {
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer"
    };

    traveler1 = new Traveler(travelerData);

  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of traveler', () => {
    expect(traveler1).to.be.an.instanceOf(Traveler);
  });

  it('should have a traveler ID', () => {
    expect(traveler1.id).to.equal(1);
  });

  it('should have a traveler name', () => {
    expect(traveler1.name).to.equal("Ham Leadbeater");
  });

  it('should have a traveler type', () => {
    expect(traveler1.travelerType).to.equal("relaxer");
  });

  it('should display travelers first name', () => {
    // expect(traveler1.displayFirstName()).to.equal("Ham")
  });

});