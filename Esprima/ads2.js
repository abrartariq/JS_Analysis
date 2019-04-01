jserror_count = 0;
function reportError(msg,url,line) {
 par_url = parent.location.href;
 par_url = (par_url == location.href) ? "no parent" : par_url;
 query_string = "/javascript/jserrors.cgi"
   + "?url=" + escape(location.href)
   + "&parent=" + escape(par_url)
   + "&referrer=" + escape(document.referrer)
   + "&browser=" + escape(navigator.appName + " " + navigator.appVersion)
   + "&msg=" + escape(msg)
   + "&line=" + escape(line)
   + "&count=" + (++jserror_count);
 if (document.images) {
  reporter = new Image();
  reporter.src = query_string;
 }
 return true;
}
if (location.href.toLowerCase().indexOf("infohiway.com/javascript") != -1)
 window.onerror = reportError;







function createArray(size) {
 for (var i=0; i < size; i++) {
  this[i] = null }
 return this
}

function Product(descrip, money) {
 this.description = descrip;
 this.price = money;
}

function Category(name) {
 this.title = name;
 this.product = new createArray(1);
 this.product[0] = new Product("Please Select a Product", 0.00);
}

var category = new createArray(1);

// STEP NUMBER ONE
// enter the color for rows of the table
// (either javascript name or hex code)
color1 = "tan";
color2 = "blue";

// STEP NUMBER TWO:
// change the following declarations to fit your needs
//
// category[1] = new Category("Category Title Goes Here");
//  category[1].product[1] = new Product("Prod. 1 Name", price);
//  category[1].product[2] = new Product("Prod. 2 Name", price);
//  category[1].product[3] = new Product("Prod. 3 Name", price);
//
// category[2] = new Category("Category Title Goes Here");
//  category[2].product[1] = new Product("Prod. 1 Name", discount);
//  category[2].product[2] = new Product("Prod. 2 Name", discount);
//  category[2].product[3] = new Product("Prod. 3 Name", discount);
//
// NOTE: You must define both the category array and the product array
// consecutively starting at 1. Again, the index of both arrays starts at 1

category[1] = new Category("Category 1 Title");
 category[1].product[1] = new Product("Product 1 Name", 25.50);
 category[1].product[2] = new Product("Product 2 Name", 30);

category[2] = new Category("QUANTITY DISCOUNTS");
 category[2].product[1] = new Product("Take 10% off Category 1 Selection", 0.10);
 category[2].product[2] = new Product("Take 20% off Category 1 Selection", 0.20);

category[3] = new Category("FREQUENCY DISCOUNTS");
 category[3].product[1] = new Product("Take 10% off Category 1 Selection", 0.10);
 category[3].product[2] = new Product("Take 10% off Category 1 Selection", 0.20);

// ***** NO NEED TO CHANGE ANY CODE AFTER THIS COMMENT ***

function SetLengths() {
 var k=1;
 while(category[k] != null)
  k++
 category.length = k;
 for (i=1; i<category.length; i++) {
  var j=1;
  while (category[i].product[j] != null)
   j++;
  category[i].product.length = j;
 }
}

SetLengths();

function writeTableRow(i) {
 document.write('<tr bgcolor="' + ((i%2 == 0) ? color1 : color2) + '">');
 document.write('<td>' + category[i].title.toUpperCase() + ':<br>'
  + '<select size="1" name="menu' + i + '" onChange="update(' + i + ')">');
 len = category[i].product.length;
 for (j=0; j<len; j++) {
  if (j != 0)
   if (i == 1)
     document.write('<option>' + category[i].product[j].description + ' - $' + fix(category[i].product[j].price) + '</option>');
   else
     document.write('<option>' + category[i].product[j].description + '</option>');
  else
   document.write('<option selected value=" ">Please Select a Product</option>');
 }
 document.write('</select></td><td valign=bottom>'
  + '<input type="text" value="0.00" name="price' + i + '" '
  + 'size=12 maxlength=12 onFocus="document.form1.price' + i + '.blur()">'
  + '</td></tr>');
}

function writeTable() {
 document.write('<table cellspacing=5 cellpadding=10 border=0>');
 for (i=1; i<category.length; i++)
  writeTableRow(i);
 document.write('<tr bgcolor="' + ((category.length%2==0) ? color1 : color2)
  + '"><td align=right>GRAND TOTAL: </td><td><input type="text" '
  + 'name="total" size=12 maxlength=12 value="0.00"></td></tr></table>');
}

function update(num) {
 eval('selected = document.form1.menu' + num + '.selectedIndex;');
 cost = fix(category[num].product[selected].price);
 eval('document.form1.price' + num + '.value = cost;');
 var grand_total = parseFloat(document.form1.price1.value);
 for (i=2; i<category.length; i++)
  if(eval('parseFloat(document.form1.price' + i + '.value)'))
    grand_total *= (1-eval('parseFloat(document.form1.price' + i + '.value);'));
 document.form1.total.value = fix(grand_total);
}

function fix(num) {
 string = "" + num;
 if (string.indexOf('.') == -1)
  return string + '.00';
 seperation = string.length - string.indexOf('.');
 if (seperation > 3)
  return string.substring(0,string.length-seperation+3);
 else if (seperation == 2)
  return string + '0';
 return string;
}

function validate_form() {
 validity = true;
 if (document.form1.shopper_name.value == "") {
  alert('You must enter your name!');
  validity = false;
 }
 if (document.form1.email.value == "") {
  if (confirm("Do you want to enter your email address?"))
   valid = false;
  else
   document.form1.email.value = 'no email address';
 }
 if (document.form1.phone.value == "") {
  alert('You must enter your phone number!');
  validity = false;
 }
 if (document.form1.credit_card_number.value == "") {
  alert('You must enter the credit card number!');
  validity = false;
 } else if (document.form1.expiration_date.value == "") {
  alert('You must enter the expiration date!');
  validity = false;
 }
 if (document.form1.bill.value == "") {
  alert('You must enter a billing address!');
  validity = false;
 } else if (document.form1.mail.value == "") {
  if (!confirm("The mailing address is the same as the billing address?"))
   validity = false;
  else
   document.form1.mail.value = 'same as billing address';
 }
 if (validity)
  alert("Thank you for your order!");
 return validity;
}

