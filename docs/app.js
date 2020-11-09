function resetCountriesData(){
  document.getElementById('xmlRequestButton').disabled = false;
  document.getElementById('fetchRequestButton').disabled = false;
  document.getElementById('countriesTable').innerHTML = '';
}

function createCountriesDataTable(countriesDataObj) {
  const countriesTable = document.querySelector("#countriesTable");
  if(countriesTable){
    countriesTable.innerHTML = '';
  }
  const thead = createCustomElement('thead', null);//  document.createElement("thead");
  const tr = createCustomElement('tr', null); //document.createElement("tr");

  tr.appendChild(createCustomElement('td', 'Name'));
  tr.appendChild(createCustomElement('td', 'Capital'));
  tr.appendChild(createCustomElement('td', 'Continent'));
  tr.appendChild(createCustomElement('td', 'Population'));
  tr.appendChild(createCustomElement('td', 'Flag'));

  thead.appendChild(tr);
  countriesTable.appendChild(thead);

  const tbody = createCustomElement('tbody', null); //document.createElement("tbody");

  for (let countryData of countriesDataObj) {
    console.log(`Flag of the country ${countryData.name} is ${countryData.flag}`);       
    let tr = document.createElement('tr');
    tr.appendChild(createCustomElement('td', countryData.name));
    tr.appendChild(createCustomElement('td', countryData.capital));
    tr.appendChild(createCustomElement('td', countryData.region));
    tr.appendChild(createCustomElement('td', countryData.population));
    let flagTd = createCustomElement('td', null);
    let image = document.createElement('img');
    image.classList.add('flagStyle');
    image.setAttribute('src', countryData.flag);
    flagTd.appendChild(image);

    tr.appendChild(flagTd);
    tbody.appendChild(tr);
    countriesTable.appendChild(tbody);
  }
}

function createCustomElement(ele, text, style){
  const element = document.createElement(ele);
  
  if(text !== null){
    const textEle = document.createTextNode(text);
    element.appendChild(textEle);
  }

  if(style !== null){
    element.classList.add(style);
  }

  return element;
}