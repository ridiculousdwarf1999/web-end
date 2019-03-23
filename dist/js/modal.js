$(document).ready(function(){
  var link = $('#link');
  var modal = $('#modal');
  var close = $('#close');

  link.on('click', function(){
    modal.addClass('modal_active');
  });

  close.on('click', function(){
    modal.removeClass('modal_active');
  });
});