var view = {
  displayMessage: function (msg) {
    var messageArea = document.querySelector('.message-area');
    messageArea.innerHTML = msg;
  },

  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.classList.add('hit');
  },

  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.classList.add('miss');
  },
};
