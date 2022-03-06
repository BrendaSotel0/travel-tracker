const domUpdates = {

  updateHeaderText(annulSpent) {
    const headerMessage = document.querySelector('.header-message');
    headerMessage.innerHTML = `You've spent $${annulSpent} on trips this year!`;
  }

}

export default domUpdates;