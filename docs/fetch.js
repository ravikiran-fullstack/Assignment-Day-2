function retrieveCountriesDataFetch(){
  document.getElementById('xmlRequestButton').disabled = true;
  document.getElementById('loadingSpinner').classList = 'lds-default u-center-block';
  const url = 'https://restcountries.eu/rest/v2/all';

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.getElementById('loadingSpinner').classList.remove('lds-default');
      createCountriesDataTable(data)
    })
    .catch(err => console.log(err));
}