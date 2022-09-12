const btnsub = document.getElementById("button-sub");
const funame = document.getElementById("fname").value;
console.log("qwodihpoief");

function submitbtn(){
    
    if (funame=="abed") {
      console.log("Input not valid");
    } else {
        console.log("Input ok");
    }
   // document.getElementById("demo").innerHTML = text;
  }

  btnsub.addEventListener('click',submitbtn);
 
