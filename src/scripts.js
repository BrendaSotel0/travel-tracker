import './css/styles.css';
import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';
import {fetchData, postData} from './apiCalls';
import domUpdates from './domUpdates';
import TripRepo from './TripRepo';


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
      allTrips = new TripRepo(data[1].trips)
      destinations = data[2].destinations;
    })
    .then(() => {
      getCurrentYear();
      getTraveler();
      currentTraveler.calculateAnnualTripsCost(thisYear, destinations);
      updateUserName();
      updateDomAnnualSpent();
      currentTraveler.sortTrips();
      updateDomTripBoard();
      updateDestinationsForm(destinations);
      updateTripEstimateValue();

    })
};

const getTraveler = () => {
  currentTraveler = new Traveler(travelers[49])
  currentTraveler.getTravelersTrips(allTrips, destinations) 
}; 

const getCurrentYear = () => {
  const today = new Date();
  thisYear = new Date(today).getFullYear();
}; 

const updateDomAnnualSpent = () => {
  const annualSpent = currentTraveler.calculateAnnualTripsCost(thisYear, destinations);
  domUpdates.updateHeaderText(annualSpent);
};

const updateUserName = () => {
  const userName = currentTraveler.name.split(' ')[0]
  domUpdates.updateHeaderGreeting(userName);
};

const updateDomTripBoard = () => {
  domUpdates.updateTripBoard(currentTraveler, destinations);
};

const updateDestinationsForm = (destinationData) => {
  domUpdates.updateDestinationSelection(destinationData)
};

const findInputDestination = () => {
  const inputDestinationDetails = destinations.find(destination => {
    return destination.destination === destinationsInput.value;
  })
  return inputDestinationDetails;
};

const calculateTripEstimate = () => {
  const destinationInput = findInputDestination();
  const requestedTravelQuote = 
  (durationInput.value * destinationInput.estimatedLodgingCostPerDay) + 
  (travelersInput.value * destinationInput.estimatedFlightCostPerPerson)
  const estimateWithPercent = Math.round(requestedTravelQuote * 1.1); 
  updateTripEstimateValue(estimateWithPercent);
};

const updateTripEstimateValue = (estimatedQuote) => {
    domUpdates.updateTripEstimate(estimatedQuote);
}

const addTripRequest = () => {
  let tripRequest = {
    id: Date.now(),
    userID: currentTraveler.id,
    destinationID: parseInt(findInputDestination().id),
    travelers: parseInt(travelersInput.value),
    date: formDate.value.split("-").join("/"),
    duration: parseInt(durationInput.value),
    status: 'pending',
    suggestedActivities: []
  };
  postData(tripRequest).then((data) => {
    domUpdates.resetDom();
    getTheData();
  })
}

const formDate = document.getElementById('formDate');
const durationInput = document.getElementById('formDuration');
const travelersInput = document.getElementById('formNumberOfTravelers');
const estimateButton = document.getElementById('estimateTripTotalBtn');
const destinationsInput = document.getElementById('destinationSelector');
const confirmButtom = document.getElementById('tripConfirmationBtn');
window.addEventListener("load", getTheData);
estimateButton.addEventListener("click", calculateTripEstimate);
confirmButtom.addEventListener("click", addTripRequest);

//This is my accessibility branch
