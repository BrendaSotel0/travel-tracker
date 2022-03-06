import './css/styles.css';
import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';
import fetchData from './apiCalls';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/travel.jpg'

let travelers;
let allTrips;
let destinations;
let currentTraveler;
let thisYear;

const getTheData = () => {
  return Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
    .then(data => {
      travelers = data[0].travelers;
      allTrips = data[1].trips
      destinations = data[2].destinations;
      console.log("DESTINATIONS", destinations)
    })
    .then(() => {
      getCurrentYear();
      getTraveler();
      currentTraveler.calculateAnnualTripsCost(thisYear, destinations)
    })

}
const getTraveler = () => {
  currentTraveler = new Traveler(travelers[43])
  currentTraveler.getTravelersTrips(allTrips) 
} 

const getCurrentYear = () => {
  const today = new Date();
  thisYear = new Date(today).getFullYear();
} 

getTheData();
console.log("TRAVELERS", travelers)


// Once we have our trips, we want to have a method that will divide the dates into past, present, and future. These will be used to render to dom. 
// An argument of the current date should be used for this sorting method
// may consider adding additional properties of trips(past, present, future trips) to the traveller class
