import $ from 'jquery';
import Modal from 'bootstrap/js/dist/modal';

class AppMovieDetailModal extends HTMLElement {
  set movie(movie) {
    this.d_movie = movie;
    this.render();
  }

  openModal(titleMovie) {
    this.innerHTML = `
      <div class="modal fade" id="movieModal" tabindex="-1" aria-labelledby="movieModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content rounded-0">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="movieModalLabel">${titleMovie}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="text-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal"><i class="fa fa-times"></i> Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
    const movieModal = new Modal(document.getElementById('movieModal'), {
      keyboard: false,
    });
    movieModal.toggle();
  }

  render() {
    const movieGenres = [];
    $.each(this.d_movie.genres, (index, item) => {
      movieGenres.push(item.name);
    });
    const movieGenresText = movieGenres.join(', ');
    const modalBody = `
      <div class="row">
        <div class="col-md-4">
          <img src="https://image.tmdb.org/t/p/w342${this.d_movie.poster_path}" class="card-img rounded-0">
        </div>
        <div class="col-md-8">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td class="fw-bold">Title</td>
                <td>${this.d_movie.title}</td>
              </tr>
              <tr>
                <td class="fw-bold">Genre</td>
                <td>${movieGenresText}</td>
              </tr>
              <tr>
                <td class="fw-bold text-nowrap">Release Date</td>
                <td>${this.d_movie.release_date}</td>
              </tr>
              <tr>
                <td class="fw-bold">Status</td>
                <td>${this.d_movie.status}</td>
              </tr>
              <tr>
                <td class="fw-bold">Overview</td>
                <td>${this.d_movie.overview}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;

    $(this).find('.modal-body').html(modalBody);
  }
}

customElements.define('app-movie-detail-modal', AppMovieDetailModal);
