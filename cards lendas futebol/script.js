"use strict";

//////////////////////
//	modal  gallery  //
/////////////////////
(function() {
var modal = document.querySelector('.modal');//target modal,
var modalOverlay = document.querySelector('.modal-overlay');  //target modal overlay,
var closeButton = document.querySelector('.modal-overlay__close'); //target close button,
var modalImage = document.querySelector('.modal__img'); //target modal image,
var video = document.querySelector('.video__section');//target video;

 //add a 'click' event listener to video
   video.addEventListener('click', openModalEvent);

   //in the listener:
   //1. toggle the 'closed' class on the modal,
   function openModalEvent(evt){
   modal.classList.toggle('closed');

   //2. toggle the 'closed' class on the modal overlay, and
   modalOverlay.classList.toggle('closed');

  document.querySelector(".modal__img").src = "https://www.youtube.com/embed/ygr5AHufBN4?autoplay=1";
   //3. set the value of the src attribute of the modal image to the target of the event's src attribute.
   //To get the right size you'll need to use this on the src: .replace('300x200', '560x360')
  // modalImage.src = evt.target.src.replace('300x200', '560x360');
   }

//add a 'click' event listener to the close button
   closeButton.addEventListener('click', closeButtonEvent);

 //in the listener: 1. use stopPropagation() on the event (to stop bubbling),

 function closeButtonEvent(){
   closeButtonEvent.stopPropagation();
 //2. toggle the 'closed' class on the modal, and
   modal.classList.toggle('closed');

 //3. toggle the 'closed' class on the modal overlay.
   modalOverlay.classList.toggle('closed');
   }

//add a 'click' event listener to the modal overlay
   modalOverlay.addEventListener('click', closeModalVideo);

  // function closes modal & stops video
  function closeModalVideo() {
    closeModalEvent();
    stopVideo();
  }
  
  function stopVideo(){
    document.querySelector(".modal__img").src = "https://www.youtube.com/embed/ygr5AHufBN4";
  }
 //in the listener: 1. toggle the 'closed' class on the modal, and
 function closeModalEvent(){
   modal.classList.toggle('closed');

   //2. toggle the 'closed' class on the modal overlay.
   modalOverlay.classList.toggle('closed');
   }

})();




// when modal has been clicked out of  (add event listener that listens for click of modaloVERLAY) IFRAME SRC BECOMES "NONE"

//var modalvideo = document.querySelector('.modal__img').src;
// var modalvideo = "none"

/// document.getElementById("modal").src = ""

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_iframe_src2