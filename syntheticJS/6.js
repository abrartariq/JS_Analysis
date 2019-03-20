var img = new Image();
var div = document.getElementById('x');
 
img.onload = function() {
  div.innerHTML += '<img src="'+img.src+'" />'; 
};
 
img.src = 'image.png';
