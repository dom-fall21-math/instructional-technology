// <!-- Function -->
(function () {
    window.ShowStep = function (el, id) {
      //go through all the elements with id id-n and set the first non visible one to visible
      const steps = document.querySelectorAll('[id^="' + id + '"]');
      for (let i = 0; i < steps.length; i++) {
         if (steps[i].style.visibility != 'visible') {
           steps[i].style.visibility = 'visible';
           break;
         }
       }
      el.nextElementSibling.disabled = false;
    }
    window.ResetSteps = function (el, id, reset) {
      el.disabled = false;
      //go through all the elements with id id-n and set them all to hidden
      const steps = document.querySelectorAll('[id^="' + id + '"]');
      for (let i = 0; i < steps.length; i++) {
           steps[i].style.visibility = 'hidden';
         }      
    } 
  })();