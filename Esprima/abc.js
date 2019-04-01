var a = $("<a>")
    .attr("href", "http://i.stack.imgur.com/L8rHf.png")
    .attr("download", "img.png")
    .appendTo("body");

a[0].click();

a.remove();
//Hi! window.location