var button = document.getElementById('mybutton');
var button2 = document.getElementById('mybutton2');

/* button.onclick = function (c) {
        alert("Button clicked!");
    }; */

button.addEventListener('click', function(c){
    alert("Button clicked!");
});



button2.addEventListener('click', function(d){
    body.classList.toggle("red-background");
});
