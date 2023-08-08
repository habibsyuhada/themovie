import $ from 'jquery';
import './app-movie-poster';

class AppSearchResult extends HTMLElement {
  set result(result) {
    this.d_result = result;
    this.render();
  }

  set clickEvent(event) {
    this.d_clickEvent = event;
  }

  render() {
    const htmlSearchResult = `
      <div class="container">
        <div id="list_search_result" class="row">
        </div>
        <div class="d-grid gap-2">
          <button id="loadMoreButton" type="button" class="btn btn-sm btn-secondary">Load More</button>
        </div>
      </div>
    `;
    if (this.d_result.page === 1) {
      $(this).html(htmlSearchResult);
    }
    $.each(this.d_result.results, (index, item) => {
      const moviePoster = document.createElement('app-movie-poster');
      moviePoster.movie = item;
      $(moviePoster).addClass('col-6 col-md-3 col-lg-2');
      $(this).find('#list_search_result').append(moviePoster);
    });

    $('#loadMoreButton').on('click', this.d_clickEvent);
    if (this.d_result.page >= this.d_result.total_pages) {
      $('#loadMoreButton').addClass('d-none');
    }
  }

  noDataFound() {
    const htmlSearchResult = `
      <div class="container">
        <div class="alert alert-danger" role="alert">
          No Data Found.
        </div>
      </div>
    `;
    $(this).html(htmlSearchResult);
  }
}

customElements.define('app-search-result', AppSearchResult);
