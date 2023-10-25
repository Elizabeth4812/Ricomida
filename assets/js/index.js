
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

$(function () {
  $('[data-toggle="popover"]').popover()
});

$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})


$('#element').popover('toggle')

$(document).ready(function(){
    $("#texto1").dblclick(function(){
      $(this).hide();
    });
});

$("#ingredientes").click(function(){
  $(this).css({
  "color": "red",
  "font-size": "2em"
  });
});

var bootstrapButton = $.fn.button.noConflict();
$.fn.bootstrapBtn = bootstrapButton;

