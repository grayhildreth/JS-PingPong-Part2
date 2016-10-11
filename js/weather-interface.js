var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The weather in " + city + " is " + response.weather.description + ", ");
        // "The wind speed is " + response.wind.speed + "MPH"<br>

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').append("with a wind speed of " + response.wind.speed + "MPH");

        // "The cloud cover is " + response.clouds.all + "%"<br>

      });
    });
  });
});
