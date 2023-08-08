class DataSource {
  static slideShowContent() {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=f58e8a855ffc564e8c264167cdbb4518&page=1')
      .then((response) => response.json())
      .then((responseJson) => Promise.resolve(responseJson))
      .catch((error) => Promise.reject(error));
  }

  static searchMovie(keyword, page) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=f58e8a855ffc564e8c264167cdbb4518&language=en-US&query=${keyword}&page=${page}`)
      .then((response) => response.json())
      .then((responseJson) => Promise.resolve(responseJson))
      .catch((error) => Promise.reject(error));
  }

  static detailMovie(idMovie) {
    return fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=f58e8a855ffc564e8c264167cdbb4518&language=en-US`)
      .then((response) => response.json())
      .then((responseJson) => Promise.resolve(responseJson))
      .catch((error) => Promise.reject(error));
  }
}

export default DataSource;
