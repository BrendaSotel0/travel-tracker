import chai from 'chai';
import Traveler from '../src/traveler';
import TripRepo from '../src/TripRepo';
const expect = chai.expect;

describe('Traveler', () => {

  let travelerData; 
  let traveler1;
  let tripData;
  let allTrips1;
  let destinations;
  let destinationData;

  beforeEach(() => {
    travelerData = {
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer"
    };

    tripData = [
      {
        "id": 117,
        "userID": 1,
        "destinationID": 28,
        "travelers": 3,
        "date": "2021/01/09",
        "duration": 15,
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

    destinationData = [
      {
        "id": 28,
        "destination": "San Juan, Puerto Rico",
        "estimatedLodgingCostPerDay": 70,
        "estimatedFlightCostPerPerson": 900,
        "image": "https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
        "alt": "white and brown concrete buildings near sea under white clouds during daytime"
      },
      {
        "id": 2,
        "destination": "Stockholm, Sweden",
        "estimatedLodgingCostPerDay": 100,
        "estimatedFlightCostPerPerson": 780,
        "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "city with boats on the water during the day time"
      },
      {
        "id": 3,
        "destination": "Sydney, Austrailia",
        "estimatedLodgingCostPerDay": 130,
        "estimatedFlightCostPerPerson": 950,
        "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "alt": "opera house and city buildings on the water with boats"
      }
    ]

    traveler1 = new Traveler(travelerData);
    allTrips1 = new TripRepo(tripData);
    destinations = destinationData;

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

  it('should find a destination based on a trip id', () => {
    const foundDestination = traveler1.findDestinationInfo(28, destinations);
    expect(foundDestination).to.eql({
      id: 28,
      destination: 'San Juan, Puerto Rico',
      estimatedLodgingCostPerDay: 70,
      estimatedFlightCostPerPerson: 900,
      image: 'https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80',
      alt: 'white and brown concrete buildings near sea under white clouds during daytime'
    });
  });

  it('should return an array of trips that are pending', () => {
    traveler1.getTravelersTrips(allTrips1, destinations);
    traveler1.sortPendingTrips();
    expect(traveler1.sortPendingTrips().length).to.eql(0);
  });

  it('should return an array of trips that are upcoming', () => {
    traveler1.getTravelersTrips(allTrips1, destinations);
    traveler1.sortUpcomingTrips();
    expect(traveler1.sortUpcomingTrips().length).to.eql(0);
  });

});