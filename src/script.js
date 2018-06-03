$(function(){
    console.log($(".dropdown-trigger"));
    $(".dropdown-trigger").dropdown();
});
/*
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, options);
  });
*/
$(document).ready(function(){
    $('.parallax').parallax();
  });


  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

// activation du formulaire de contact
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
  });


