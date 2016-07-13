import Hand from 'hand';

export default class App {
  constructor(appElement) {
    this.appElement = appElement;
    console.log('hihihi');
  }

  start() {
    return fetch(`https://card-proxy.herokuapp.com/decks/new`)
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < 5; i++) {
          const newHand = new Hand(data.deck_id);
          this.appElement.querySelector('.app-container')
            .appendChild(newHand.element);

          newHand.getData().then(() => {
            newHand.render();
          });
        }
        console.log('YELLOW');
      });
  }

}
