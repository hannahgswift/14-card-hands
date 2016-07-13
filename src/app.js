export default class App {
  constructor(appElement) {
    this.appElement = appElement;
    this.appElement = document.createElement('div');
    this.appElement.classList.add('hands-list__item');
    this.appElement.innerHTML = `
    <figure class="card">
      <div class="img-container">
        <img src="http://www.placekitten.com/200/300" alt="" class="img-container__img">
      </div>
      <h3 class="number">8</h3>
    </figure>`;
  }

  start() {
    fetch(`https://card-proxy.herokuapp.com/decks/new`)
      .then((res) => res.json())
      .then((data) => {
        data.results.forEach((card) => {
          // Make a new playingCard

          // Put the playingCard where the user can see it...
          this.appElement.querySelector('.hands-list').appendChild(card.appElement);

          // Tell the playingCard to fill in...
        });
      });
  }
}
