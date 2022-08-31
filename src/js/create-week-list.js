const newsWeekApiService = new MovieApiService();

const videoList = document.querySelector('.videos');

document.addEventListener('DOMContentLoaded', ready);

function ready(e) {
  newsWeekApiService.fetchTrendWeekMovie().then(data => {
    insertContent(data.hits);
  });
}
