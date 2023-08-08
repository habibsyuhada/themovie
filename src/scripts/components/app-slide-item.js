import $ from 'jquery';

class AppSlideShow extends HTMLElement {
  set slide(slide) {
    this.d_slide = slide;
    this.render();
  }

  render() {
    const htmlSlideItem = `
      <div class="carousel-item">
        <img src="https://image.tmdb.org/t/p/original${this.d_slide.backdrop_path}" class="d-block">
        <div class="carousel-caption d-none d-md-block">
          <h4>${this.d_slide.title}</h4>
          <p>${this.d_slide.overview}</p>
        </div>
      </div>
    `;
    $(this).html(htmlSlideItem);
  }
}

customElements.define('app-slide-item', AppSlideShow);
