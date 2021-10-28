// <!-- Function 1-->
  (function () {
    var n = 1;
    window.ShowStep1 = function () {
      document.getElementById("Step1" + "-" + n++).style.visibility = "visible";
      if (!document.getElementById("Step1" + "-" + n)) {
        document.getElementById("step1").disabled = true;
      }
      document.getElementById("reset1").disabled = false;
    }
    window.ResetSteps1 = function () {
      document.getElementById("step1").disabled = false;
      document.getElementById("reset1").disabled = true;
      var i = 1, step1; n = 1;
      while (step1 = document.getElementById("Step1" + "-" + i)) {
        step1.style.visibility = "hidden";
        i++
      }
    }
  })();
  
// <!-- Function 2-->
  (function () {
    var n = 1;
    window.ShowStep2 = function () {
      document.getElementById("Step2" + "-" + n++).style.visibility = "visible";
      if (!document.getElementById("Step2" + "-" + n)) {
        document.getElementById("step2").disabled = true;
      }
      document.getElementById("reset2").disabled = false;
    }
    window.ResetSteps2 = function () {
      document.getElementById("step2").disabled = false;
      document.getElementById("reset2").disabled = true;
      var i = 1, step2; n = 1;
      while (step2 = document.getElementById("Step2" + "-" + i)) {
        step2.style.visibility = "hidden";
        i++
      }
    }
  })();
  
// <!-- Function 3-->
  (function () {
    var n = 1;
    window.ShowStep3 = function () {
      document.getElementById("Step3" + "-" + n++).style.visibility = "visible";
      if (!document.getElementById("Step3" + "-" + n)) {
        document.getElementById("step3").disabled = true;
      }
      document.getElementById("reset3").disabled = false;
    }
    window.ResetSteps3 = function () {
      document.getElementById("step3").disabled = false;
      document.getElementById("reset3").disabled = true;
      var i = 1, step3; n = 1;
      while (step3 = document.getElementById("Step3" + "-" + i)) {
        step3.style.visibility = "hidden";
        i++
      }
    }
  })();
  
//  <!-- Function 4-->
  (function () {
    var n = 1;
    window.ShowStep4 = function () {
      document.getElementById("Step4" + "-" + n++).style.visibility = "visible";
      if (!document.getElementById("Step4" + "-" + n)) {
        document.getElementById("step4").disabled = true;
      }
      document.getElementById("reset4").disabled = false;
    }
    window.ResetSteps4 = function () {
      document.getElementById("step4").disabled = false;
      document.getElementById("reset4").disabled = true;
      var i = 1, step4; n = 1;
      while (step4 = document.getElementById("Step4" + "-" + i)) {
        step4.style.visibility = "hidden";
        i++
      }
    }
  })();
  
// <!-- Function 5-->
  (function () {
    var n = 1;
    window.ShowStep5 = function () {
      document.getElementById("Step5" + "-" + n++).style.visibility = "visible";
      if (!document.getElementById("Step5" + "-" + n)) {
        document.getElementById("step5").disabled = true;
      }
      document.getElementById("reset5").disabled = false;
    }
    window.ResetSteps5 = function () {
      document.getElementById("step5").disabled = false;
      document.getElementById("reset5").disabled = true;
      var i = 1, step2; n = 1;
      while (step5 = document.getElementById("Step5" + "-" + i)) {
        step5.style.visibility = "hidden";
        i++
      }
    }
  })();
  
// <!-- Function 6-->
  (function () {
    var n = 1;
    window.ShowStep6 = function () {
      document.getElementById("Step6" + "-" + n++).style.visibility = "visible";
      if (!document.getElementById("Step6" + "-" + n)) {
        document.getElementById("step6").disabled = true;
      }
      document.getElementById("reset6").disabled = false;
    }
    window.ResetSteps6 = function () {
      document.getElementById("step6").disabled = false;
      document.getElementById("reset6").disabled = true;
      var i = 1, step6; n = 1;
      while (step6 = document.getElementById("Step6" + "-" + i)) {
        step6.style.visibility = "hidden";
        i++
      }
    }
  })();