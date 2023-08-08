import $ from 'jquery';

class AppSearch extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  get value() {
    return $('#searchElement').val();
  }

  set clickEvent(event) {
    this.d_clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <h1 class="article-title mb-4 text-orange">SEARCH YOUR MOVIE</h1>
        <div class="input-group">
          <input id="searchElement" type="text" class="form-control" placeholder="Serach by Title">
          <button id="searchButton" class="btn btn-outline-secondary" type="button"><i class="fa fa-search"></i> Search</button>
        </div>
      </div>
    `;
    $('#searchButton').on('click', this.d_clickEvent);
  }
}

customElements.define('app-search', AppSearch);
