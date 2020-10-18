/*eslint-env browser*/

//STEP 1
function oldSchoolEvent() {
    window.alert("I have been clicked");
  }
  
//STEP 2
  window.addEventListener('DOMContentLoaded', init, false);
  function init() {
    var myButton1 = document.getElementById("myButton1");
    myButton1.onclick = function(){
      window.alert("I have been clicked");
    };
    var myButton2 = document.getElementById("myButton2");
    myButton2.addEventListener('click', oldSchoolEvent);
    var myButton3 = document.getElementById("myButton3");
    myButton3.addEventListener('click', function() {
      window.alert("I have been clicked");
    });
 }
//STEP 3
  
//STEP 4
  
//STEP 5
  