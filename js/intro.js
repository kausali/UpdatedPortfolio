// header-content-inner

var showText = function (target, message, index, interval) {   
    if (index <= message.length) {
        
      $(target).append(message[index++]);
      setTimeout( function () 
      {
          showText(target, message, index, interval); 
        }, interval);
    }
  }
$(function () {
    // //var name = ('h1').append('Now is the time for all good men...');​
    // showText("#homeHeading", "KAUSALI LAMA", 0, 150);
    // setInterval(0,1000); 
  showText(".kausali1", "FULLSTACK DEVELOPER", 0, 150); 
  });


  