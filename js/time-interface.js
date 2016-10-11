$(document).ready(function(){
  window.setInterval(function(){
    $('#time').text(moment());
  }, 1000);
});
