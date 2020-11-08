function resetCountriesData(){
  document.getElementById('xmlRequestButton').disabled = false;
  document.getElementById('fetchRequestButton').disabled = false;
  document.getElementById('countriesTable').innerHTML = '';
}

function createCountriesDataTable(countriesDataObj) {
  const countriesTable = document.querySelector("#countriesTable");
  const thead = createCustomElement('thead', null);//  document.createElement("thead");
  const tr = createCustomElement('tr', null); //document.createElement("tr");

  tr.appendChild(createCustomElement('td', 'Name'));
  tr.appendChild(createCustomElement('td', 'Capital'));
  tr.appendChild(createCustomElement('td', 'Flag'));

  thead.appendChild(tr);
  countriesTable.appendChild(thead);

  const tbody = createCustomElement('tbody', null); //document.createElement("tbody");

  for (let countryData of countriesDataObj) {
       
    let tr = document.createElement('tr');
    tr.appendChild(createCustomElement('td', countryData.name));
    tr.appendChild(createCustomElement('td', countryData.capital));

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

function createCustomElement(ele, text){
  const element = document.createElement(ele);
  
  if(text !== null){
    const textEle = document.createTextNode(text);
    element.appendChild(textEle);
  }

  return element;
}