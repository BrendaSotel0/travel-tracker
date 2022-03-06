import './css/styles.css';
import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';
import fetchData from './apiCalls';
import domUpdates from './domUpdates';



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
    })
    .then(() => {
      getCurrentYear();
      getTraveler();
      currentTraveler.displayFirstName();
      currentTraveler.calculateAnnualTripsCost(thisYear, destinations);
      updateUserName();
      updateDomAnnualSpent();
      currentTraveler.sortTrips();
    })

}
const getTraveler = () => {
  currentTraveler = new Traveler(travelers[43])
  currentTraveler.getTravelersTrips(allTrips) 
} 

// const todaysDate = () => {
//   thisDay = Date.now()
// }

// const todaysDate = () => {
//   today = new Date().toLocaleDateString()
//   .split('/').reverse().join('/0');
//   console.log('TODAY', today)
// }

const getCurrentYear = () => {
  const today = new Date();
  thisYear = new Date(today).getFullYear();
} 

getTheData();
console.log("TRAVELERS", travelers)


const updateDomAnnualSpent = () => {
  const annualSpent = currentTraveler.calculateAnnualTripsCost(thisYear, destinations);
  domUpdates.updateHeaderText(annualSpent);
};

const updateUserName = () => {
  const userName = currentTraveler.displayFirstName();
  domUpdates.updateHeaderGreeting(userName);
}

// Once we have our trips, we want to have a method that will divide the dates into past, present, and future. These will be used to render to dom. 
// An argument of the current date should be used for this sorting method
// may consider adding additional properties of trips(past, present, future trips) to the traveller class
