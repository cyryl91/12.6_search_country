$(function() { //jquery begin
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);  //albo na koncu

function searchCountries() {
  	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
  	$('<li>').text(item.name)
  			 .appendTo(countriesList);
  	$('<li>').text(item.capital)
  			 .appendTo(countriesList);
  	$('<li>').text(item.population)
  			 .appendTo(countriesList);
   		//Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
});
}


}



});  //jquery end