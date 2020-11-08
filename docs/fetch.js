function retrieveCountriesDataFetch(){
  document.getElementById('xmlRequestButton').disabled = true;
  const url = 'https://restcountries.eu/rest/v2/all';

  fetch(url)
    .then(res => res.json())
    .then(data => {createCountriesDataTable(data)})
    .catch(err => console.log(err));
}