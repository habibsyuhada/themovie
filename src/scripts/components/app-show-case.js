import $ from 'jquery';
import './app-movie-poster';

class AppShowCase extends HTMLElement {
  set movies(movies) {
    this.d_movies = movies;
    this.render();
  }

  render() {
    const htmlShowCase = `
      <div class="container">
        <h1 class="article-title mb-4">THE MOST POPULER MOVIE</h1>
        <div id="list_show_case" class="row">
        </div>
      </div>
    `;
    $(this).html(htmlShowCase);
    $.each(this.d_movies, (index, item) => {
      const moviePoster = document.createElement('app-movie-poster');
      moviePoster.movie = item;
      $(moviePoster).addClass('col-6 col-md-3 col-lg-2');
      $(this).find('#list_show_case').append(moviePoster);
    });
  }
}

customElements.define('app-show-case', AppShowCase);
