export default class Hand {
  constructor(deck_id) {
    this.deck_id = deck_id;

    this.element = document.createElement('ul');
    this.element.classList.add('hands-list');
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
    const listItems = this.data.cards.map((card) => {
      // make element look like:
      // <li class="hands-list__item">
      //   <figure class="card">
      //     <div class="img-container">
      //       <img src="http://www.placekitten.com/200/300" alt="" class="img-container__img">
      //     </div>
      //     <h3 class="number">8</h3>
      //   </figure>
      // </li>
      const element = document.createElement('li');
      element.innerText = card.value;
      element.innerHTML = `
      <li class="hands-list__item">
        <figure class="card">
          <div class="img-container">
            <img src="${card.image}" alt="" class="img-container__img">
          </div>
          <h3 class="number"></h3>
        </figure>
      </li>`;

      return element;
    });

    listItems.forEach((listItem) => {
      this.element.appendChild(listItem)
    });
  }
}
