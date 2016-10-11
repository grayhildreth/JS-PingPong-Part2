var apiKey = "5c9579248a48adf072eb05c27ccdf664";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The weather in " + city + " is " + response.weather.description + ".");
        // "The wind speed is " + response.wind.speed + "MPH"<br>
        // "The cloud cover is " + response.clouds.all + "%"<br>

    });
  });
});
