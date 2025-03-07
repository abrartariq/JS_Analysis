// Try to force real results
var str = [], tmp, ret, re, testStrings = [];
var i = 65536;

function randomChar(){
	return String.fromCharCode( (25 * Math.random()) + 97 );
}

for ( var i = 0; i < 16384; i++ )
	str.push( randomChar() );

str = str.join("");
str += str;
str += str;

function generateTestStrings(count){
	var t, nest;
	if ( testStrings.length >= count )
		return testStrings.slice(0, count);
	for ( var i = testStrings.length; i < count; i++ ) {
		// Make all tested strings different
		t = randomChar() + str + randomChar();
		nest = Math.floor(4 * Math.random());
		for ( var j = 0; j < nest; j++ ) {
			t = randomChar() + t + randomChar();
		}
		// Try to minimize benchmark order dependencies by
		// exercising the strings
		for ( var j = 0; j < t.length; j += 100 ) {
			ret = t[j];
			ret = t.substring(j, j + 100);
		}
		testStrings[i] = t;
	}
	return testStrings;
}

	// TESTS: split

		// It's impossible to specify empty regexp by simply
		// using two slashes as this will be interpreted as a
		// comment start. See note to ECMA-262 5th 7.8.5.
		re = /(?:)/;
		tmp = generateTestStrings(30);

		for ( var i = 0; i < 30; i++ )
			ret = tmp[i].split( re );

		re = /a/;
		tmp = generateTestStrings(30);

		for ( var i = 0; i < 30; i++ )
			ret = tmp[i].split( re );

		re = /.*/;
		tmp = generateTestStrings(100);

		for ( var i = 0; i < 100; i++ )
			ret = tmp[i].split( re );
    
	// TESTS: Compiled RegExps

		re = /aaaaaaaaaa/g;
		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 100; i++ )
			ret = tmp[i].match( re );
	
		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 100; i++ )
			ret = re.test( tmp[i] );
    
		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, "" );

		tmp = generateTestStrings(50);
	
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, "asdfasdfasdf" );

		re = new RegExp("aaaaaaaaaa", "g");
		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 100; i++ )
			ret = tmp[i].match( re );

		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 100; i++ )
			ret = re.test( tmp[i] );

		tmp = generateTestStrings(50);
    
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, "" );

		tmp = generateTestStrings(50);
	
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, "asdfasdfasdf" );

		tmp = generateTestStrings(50);
	
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, function(all){
			return "asdfasdfasdf";
		});

	// TESTS: Variable Length
	
		re = /a.*a/;
		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 100; i++ )
			ret = tmp[i].match( re );

		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 100; i++ )
			ret = re.test( tmp[i] );

		tmp = generateTestStrings(50);
    
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, "" );

		tmp = generateTestStrings(50);
	
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, "asdfasdfasdf" );

		re = new RegExp("aaaaaaaaaa", "g");
		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 100; i++ )
			ret = tmp[i].match( re );

	
		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 100; i++ )
			ret = re.test( tmp[i] );

    
		tmp = generateTestStrings(50);
    
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, "" );

	
		tmp = generateTestStrings(50);
	
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, "asdfasdfasdf" );

	
		tmp = generateTestStrings(50);
	
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, function(all){
			return "asdfasdfasdf";
		});

	
	// TESTS: Capturing
	
		re = /aa(b)aa/g;
		tmp = generateTestStrings(100);
	
		for ( var i = 0; i < 100; i++ )
			ret = tmp[i].match( re );

	
		tmp = generateTestStrings(50);
	
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, "asdfasdfasdf" );

	
		tmp = generateTestStrings(50);
	
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, "asdf\\1asdfasdf" );

	
		tmp = generateTestStrings(50);
	
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, function(all,capture){
			return "asdf" + capture + "asdfasdf";
		});

	
		tmp = generateTestStrings(50);
	
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( re, function(all,capture){
			return capture.toUpperCase();
		});

	
	// TESTS: Uncompiled RegExps
	
		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 100; i++ )
			ret = tmp[i].match( /aaaaaaaaaa/g );

		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 100; i++ )
			ret = (/aaaaaaaaaa/g).test( tmp[i] );

    
		tmp = generateTestStrings(50);
    
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( /aaaaaaaaaa/g, "" );

	
		tmp = generateTestStrings(50);
	
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( /aaaaaaaaaa/g, "asdfasdfasdf" );

	
		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 100; i++ )
			ret = tmp[i].match( new RegExp("aaaaaaaaaa", "g") );

	
		tmp = generateTestStrings(100);
    
		for ( var i = 0; i < 100; i++ )
			ret = (new RegExp("aaaaaaaaaa", "g")).test( tmp[i] );

    
		tmp = generateTestStrings(50);
    
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( new RegExp("aaaaaaaaaa", "g"), "" );

	
		tmp = generateTestStrings(50);
	
		for ( var i = 0; i < 50; i++ )
			ret = tmp[i].replace( new RegExp("aaaaaaaaaa", "g"), "asdfasdfasdf" );


