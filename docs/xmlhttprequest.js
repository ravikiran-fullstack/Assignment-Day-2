function retrieveCountriesDataXml() {
  document.getElementById('fetchRequestButton').disabled = true;
  document.getElementById('loadingSpinner').classList = 'lds-default u-center-block';
  let req = new XMLHttpRequest(); // 1. Create a new XMLHttpRequest object
  let countriesData;
  req.open("GET", "https://restcountries.eu/rest/v2/all"); // 2. Initialize it: GET-request for the URL

  req.send(); // 3. Send the request

  req.onload = function () {
    // 4. This will be called after the response is received
    if (req.status != 200) {
      console.log(`Error ${req.status}: ${req.statusText}`);
    } else {
      //console.log('response', JSON.parse(req.response));
      countriesData = JSON.parse(req.response);
      createCountriesDataTable(countriesData);
      document.getElementById('loadingSpinner').classList.remove('lds-default');
      //console.log(`Done, got ${req.response.length} bytes`);
    }
  };

  req.onerror = function () {
    console.log("Request failed", req);
  };
}


