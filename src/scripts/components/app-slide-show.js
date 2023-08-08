import $ from 'jquery';
import './app-slide-item';

class AppSlideShow extends HTMLElement {
  set slides(slides) {
    this.d_slides = slides;
    this.render();
  }

  render() {
    const htmlSlideShow = `
      <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
        </div>
        <div class="carousel-inner">
        </div>
      </div>
    `;
    $(this).html(htmlSlideShow);
    $.each(this.d_slides, (index, item) => {
      const slideItem = document.createElement('app-slide-item');
      slideItem.slide = item;
      $(this).find('.carousel-inner').append(slideItem);

      const btnSlideItem = `
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}"></button>
      `;
      $(this).find('.carousel-indicators').append(btnSlideItem);
    });
    $(this).find('.carousel-item:first').addClass('active');
    $(this).find('.carousel-indicators button:first').addClass('active');
  }
}

customElements.define('app-slide-show', AppSlideShow);
