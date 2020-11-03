
$(function(){
  
  var $activeCard = $('#card_group .card:first-child');

  $activeCard.addClass('showing');
  
  $('#decline').on('click', function() {
    console.log('decline')
    goToCard('decline');
  });
   
  $('#accept').on('click', function() {
   console.log('accept')
    goToCard('accept');
  });
    
  function goToCard(action) {
    $activeCard.removeClass("showing")
    $activeCard = $activeCard.next(".card")

    //send data to controller
    if(action == "accept"){
    
    } else {

    }
    
    $activeCard.addClass("showing")

  }
});

