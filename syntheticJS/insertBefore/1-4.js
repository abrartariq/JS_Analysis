var img1 = document.getElementById("x");
for (var i = 0; i < 16; i++) {
	var newItem = document.createElement('div')
	img1.insertBefore(newItem,img1.childNodes[0])
}