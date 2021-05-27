//creating a button
var button = document.createElement("button");
button.innerHTML = "Do Something";

//appending
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

//add event listener
button.addEventListener ("click", function() {
    alert("did something");
  })
  function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block";
 }
 var new_row = document.createElement('div');
 new_row.className = "DOMDIVS";

 document.addEventListener('DOMContentLoaded', function() {
    var div = document.createElement('div');
    div.id = '1';
    div.innerHTML = 'Hi there!';
    div.className = 'border pad';

    document.addEventListener('DOMContentLoaded', function() {
        var div = document.createElement('div');
        div.id = '2';
        div.innerHTML = 'Hi there!';
        div.className = 'border pad';
     
        document.body.appendChild(div);
    }, false);

    document.addEventListener('DOMContentLoaded', function() {
        var div = document.createElement('div');
        div.id = '3';
        div.innerHTML = 'Hi there!';
        div.className = 'border pad';
     
        document.body.appendChild(div);
    }, false);

    document.addEventListener('DOMContentLoaded', function() {
        var div = document.createElement('div');
        div.id = 'd4';
        div.innerHTML = 'Hi there!';
        div.className = 'border pad';
     
        document.body.appendChild(div);
    }, false);

    document.addEventListener('DOMContentLoaded', function() {
        var div = document.createElement('div');
        div.id = '5';
        div.innerHTML = 'Hi there!';
        div.className = 'border pad';
     
        document.body.appendChild(div);
    }, false);
 
    document.body.appendChild(div);
}, false);

function chBackcolor(color) {
    document.body.style.background = color;
 }
<button onclick="document.body.style.backgroundColor = 'green';">Green</button>

document.getElementById("button").style.visibility = "hidden";
