const domUpdates = {

  updateHeaderText(annulSpent) {
    const headerMessage = document.querySelector('.header-message');
    headerMessage.innerHTML = `You've spent $${annulSpent} on trips this year!`;
  },

  updateHeaderGreeting(userName) {
    const headerGreeting = document.querySelector('.header-greeting');
    headerGreeting.innerHTML = `Hello, ${userName}`;
  }

}

export default domUpdates;
