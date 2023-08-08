import $ from 'jquery';
import DataSource from '../datas/data-source';

class AppMoviePoster extends HTMLElement {
  set movie(movie) {
    this.d_movie = movie;
    this.render();
  }

  render() {
    const htmlMoviePoster = `
      <div class="card bg-dark text-white rounded-0">
        <img src="https://image.tmdb.org/t/p/w185${this.d_movie.poster_path}" class="card-img rounded-0">
        <div class="card-img-overlay">
          <h5 class="card-title">${this.d_movie.title}</h5>
        </div>
        <div class="poster-detail">
        </div>
        <div class="poster-detail-text fw-bold"><i class="fa fa-play-circle fs-1"></i><br><span class="fs-6">Detail</span></div>
      </div>
    `;
    $(this).html(htmlMoviePoster);

    $(this).on('click', async () => {
      try {
        const movieModalElement = document.querySelector('app-movie-detail-modal');
        movieModalElement.openModal(this.d_movie.title);

        const result = await DataSource.detailMovie(this.d_movie.id);
        movieModalElement.movie = result;
      } catch (message) {
        alert(message);
      }
    });
  }
}

customElements.define('app-movie-poster', AppMoviePoster);
