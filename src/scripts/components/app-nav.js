class AppNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark position-absolute top-0 w-100">
        <div class="container">
          <a class="navbar-brand" href="/"><span class="text-orange">T</span>he <span class="text-orange">M</span>ovie</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-nav', AppNav);
