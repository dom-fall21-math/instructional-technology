
// GeoGebra Parameters for Graph 
// Learn more about all of Parameters at: https://wiki.geogebra.org/en/Reference:GeoGebra_App_Parameters
var parameters = 
  {"id": "app1",
  "width":1000,
  "height":600,
  "showMenuBar":false, // All feature that one to download, save, etc...
  "showAlgebraInput":true, // The left input math box. This is a must
  "showToolBar":false, // Additional Top Shape Features Tools
  "customToolBar":
  "0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
  "showToolBarHelp":false,
  "showResetIcon":true, // Resets graphs and inputs
  "enableLabelDrags":false,
  "enableShiftDragZoom":true, // Helps drag graph
  "enableRightClick":false, // Allows UI edit features
  "errorDialogsActive":false,
  "useBrowserForJS":false,
  "allowStyleBar":false, // Gives input bar addition features
  "preventFocus":false,
  "showZoomButtons":true,
  "capturingThreshold":3,
  
// add code here to run when the applet starts
"appletOnLoad":function(api){ /* api.evalCommand('Segment((1,2),(3,4))');*/ },
  "showFullscreenButton":false,
  "scale":1,
  "disableAutoScale":false,
  "allowUpscale":false,
  "clickToLoad":false,
  "appName":"classic",
  "buttonRounding":0.7,
  "buttonShadows":false,
  "language":"en",
  
  // use this instead of ggbBase64 to load a material from geogebra.org
  // "material_id":"RHYH3UQ8",
  
  // use this instead of ggbBase64 to load a .ggb file
  // "filename":"myfile.ggb",
  "ggbBase64":"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",
};

// is3D=is 3D applet using 3D view, AV=Algebra View, SV=Spreadsheet View, CV=CAS View, EV2=Graphics View 2, CP=Construction Protocol, PC=Probability Calculator DA=Data Analysis, FI=Function Inspector, macro=Macros
var views = {
  'is3D': 0,
  'AV': 1,
  'SV': 0,
  'CV': 0,
  'EV2': 0,
  'CP': 0,
  'PC': 0,
  'DA': 0,
  'FI': 0,
  'macro': 0
  
};

var applet1 = new GGBApplet(parameters, '5.0', views);
window.onload = function() {
	applet1.inject('ggbApplet1');
};

applet1.setPreviewImage(
  'data:image/gif;base64,R0lGODlhAQABAAAAADs=',
  'https://www.geogebra.org/images/GeoGebra_loading.png',
  'https://www.geogebra.org/images/applet_play.png'
);

$(function() {
  $('.show-button').click(function() {
    $('.content-div').not('#btn' + $(this).attr('target')).hide();
    $('#btn' + $(this).attr('target')).fadeToggle(300);
  });
});

  //  Use a closure to hide the local variable
  //
(function () {
  var n = 1;

  //
  //  Make the current step be visible, and increment the step.
  //  If it is the last step, disable the step button.
  //  Once a step is taken, the reset button is made available.
  //
  window.ShowStep = function () {
    document.getElementById("Set" + $(this).attr('target') + "-" + n++).style.visibility = "visible";
    if (!document.getElementById("Set" + $(this).attr('target') + "-" + n)) {document.getElementById("step").disabled = true}
    document.getElementById("reset").disabled = false;
  }

  //
  //  Enable the step button and disable the reset button.
  //  Hide the steps.
  //
  window.ResetSteps = function () {
    document.getElementById("step").disabled = false;
    document.getElementById("reset").disabled = true;
    var i = 1, step; n = 1;
    while (step = document.getElementById("Set" + $(this).attr('target') + "-" + i)) {step.style.visibility = "hidden"; i++}
  }
})();

MathJax = {
  tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
  chtml: {
    displayAlign: 'left'
  },
  startup: {
    ready: function () {
      //
      //  Do the usual startup (which does a typeset)
      //
      MathJax.startup.defaultReady();
      //
      //  When that is all done, un-hide the page
      //
      MathJax.startup.promise.then(function () {
        document.getElementById("hidden").disabled = true;
      });
    }
  }
};

