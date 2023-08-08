import $ from 'jquery';
import DataSource from '../datas/data-source';
import '../components/app-slide-show';
import '../components/app-show-case';
import '../components/app-search';
import '../components/app-search-result';
import '../components/app-movie-detail-modal';

const main = () => {
  const slideShowElement = document.querySelector('app-slide-show');
  const showCaseElement = document.querySelector('app-show-case');
  const searchElement = document.querySelector('app-search');
  const searchResultElement = document.querySelector('app-search-result');
  const totalSlideShow = 5;
  const totalShowCase = 10;
  let pageSearch = 0;
  let keywordSearch = '';

  const renderSlideShow = async () => {
    try {
      const result = await DataSource.slideShowContent();
      const slideContent = [];
      const showCaseContent = [];
      $.each(result.results, (index, item) => {
        if (index < totalSlideShow) {
          slideContent.push(item);
        }
        if (index < totalShowCase) {
          showCaseContent.push(item);
        }
      });
      slideShowElement.slides = slideContent;
      showCaseElement.movies = showCaseContent;
    } catch (message) {
      alert(message);
    }
  };
  renderSlideShow();

  const searchProcess = async () => {
    if (keywordSearch !== searchElement.value) {
      pageSearch = 0;
      keywordSearch = searchElement.value;
    }
    pageSearch += 1;
    try {
      const result = await DataSource.searchMovie(searchElement.value, pageSearch);
      if (result.total_results === 0) {
        searchResultElement.noDataFound();
      } else {
        searchResultElement.result = result;
      }
    } catch (message) {
      alert(message);
    }
  };

  searchElement.clickEvent = searchProcess;
  searchResultElement.clickEvent = searchProcess;
};

export default main;
