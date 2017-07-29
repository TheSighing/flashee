class DeckModel {
  //TODO Elaborate on this model to make sure it includes all of the needs
  // of a result set returned by chimeera and possibly make it take a chimeera
  // result as an argument rather than separating the information in the
  // function signature
  constructor(title, data, completed) {
    this.title = title;
    this.completed = completed || false;
    this.createdAt = new Date();
    //TODO THis should be an array of Card using Card Model via some function
    // that puts the cards into the deck ie deckConstructor(data) and assigns
    // result here
    this.cards = data || []
  }
}

module.exports = DeckModel;
