// import DeckModel from './DeckModel';

module.exports = {
  getSearchFromApiAsync : function(term) {
    fetch('https://chimeera.herokuapp.com/chimeerapi/' + term, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((responseJson) => {
        // console.log("Result from search API async: ", responseJson);

        return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }
};
