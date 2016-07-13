export default class Hand {
  constructor(deck_id) {
    this.deck_id = deck_id;

    this.element = document.createElement('div');
    this.element.classList.add('hands-list-item');
    this.element.innerHTML = `
        <figure class="card">
          <div class="img-container">
            <img src="http://www.placekitten.com/200/300" alt="" class="img-container__img">
          </div>
          <h3 class="number">8</h3>
        </figure>`;

  }
  getData() {
    return fetch(`https://card-proxy.herokuapp.com/decks/${this.deck_id}/draw?count=5`)
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        console.log(this.data);
      });
  }
  render() {
  }
}
