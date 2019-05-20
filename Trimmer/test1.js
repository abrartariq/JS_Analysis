var img = new Image();
var div = document.getElementById('x');
 
 
img.onload = function() {
 
  div.innerHTML += '<img src="'+img.src+'" />'; 
 
};
 
let a  ='image.jpg';

img.src = a;

function ReplacingImage(){
     
  document.getElementById("x").src="image2.png"

}

var img = document.createElement("img");
     
img.src = "image.png";
var src = document.getElementById("x");
 
src.appendChild(img);

var edit_save = document.getElementById("edit-save");
edit_save.onclick = function(){
    this.src = "../template/save.png";
}

$(".image2").attr("src","image1.jpg");
/************************************************************************************** */

/// Cheching Regex

var letterRE = new RegExp('[a-zA-Z]', 'g'),
    digitRE = RegExp('[0-9]');

var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g;
var reEmptyStringLeading = /\b__p \+= '';/g,
    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
/************************************************************************************** */

///Checking DOM Insertion
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.insertBefore(para, child);
document.body.appendChild(btn);
document.getElementById("myDIV").appendChild(para);
element.insertAdjacentHTML( 'afterend', newElement )
$('body').prepend('<p id="foo">Some HTML</p>');
$('div').append('<input type="text"..etc ');
/************************************************************************************** */

console.log("Hi")