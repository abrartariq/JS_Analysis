(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);


(lib.t4 = function() {
	this.initialize(img.t4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1940,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.t4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.t4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4_1, new cjs.Rectangle(0,0,1940,500), null);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.t3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(0,0,1940,500), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.t2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(0,0,1940,500), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.t1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(0,0,1940,500), null);


(lib.logo2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo2_1, new cjs.Rectangle(0,0,1940,500), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,1940,500), null);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,1940,500), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,970,250), null);


// stage content:
(lib.WF189305970x250ImpactNonSub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var clickTag = "%%CLICK_URL_ESC%%%%DEST_URL%%";

		var TLM = new TimelineMax( {repeat:0, repeatDelay:0, delay: 0} );

		TLM.to(this.t1, .4, {alpha:0, ease: Linear.easeNone}, "+= 1.75")
		.from(this.t2, .7, {alpha:0, ease: Linear.easeNone})

		.to(this.t2, .4, {alpha:0, ease: Linear.easeNone}, "+= 1.75")
		.from(this.t3, .7, {alpha:0, ease: Linear.easeNone})

		.to([this.t3, this.logo], .4, {alpha:0, ease: Linear.easeNone}, "+= 1.75")
		.from([this.t4, this.logo2], .7, {alpha:0, ease: Linear.easeNone})
		.from(this.cta, .7, {alpha:0, ease: Linear.easeNone}, "+= .3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhH8gRBMCP5AAAMAAAAiDMiP5AAAg");
	this.shape.setTransform(485,125,1.053,1.147);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// t4.png
	this.t4 = new lib.t4_1();
	this.t4.name = "t4";
	this.t4.parent = this;
	this.t4.setTransform(485,125,0.5,0.5,0,0,0,970,250);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// t3.png
	this.t3 = new lib.t3_1();
	this.t3.name = "t3";
	this.t3.parent = this;
	this.t3.setTransform(485,125,0.5,0.5,0,0,0,970,250);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// t2.png
	this.t2 = new lib.t2_1();
	this.t2.name = "t2";
	this.t2.parent = this;
	this.t2.setTransform(485,125,0.5,0.5,0,0,0,970,250);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t1.png
	this.t1 = new lib.t1_1();
	this.t1.name = "t1";
	this.t1.parent = this;
	this.t1.setTransform(485,125,0.5,0.5,0,0,0,970,250);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// logo.png
	this.logo = new lib.logo_1();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(485,125,0.5,0.5,0,0,0,970,250);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// logo-2.png
	this.logo2 = new lib.logo2_1();
	this.logo2.name = "logo2";
	this.logo2.parent = this;
	this.logo2.setTransform(485,125,0.5,0.5,0,0,0,970,250);

	this.timeline.addTween(cjs.Tween.get(this.logo2).wait(1));

	// cta.png
	this.cta = new lib.cta_1();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(485,125,0.5,0.5,0,0,0,970,250);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// bg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(485,125,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484,124,972,252);
// library properties:
lib.properties = {
	id: '0952966768604481926167236DB4B458',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://mwcm.nyt.com/dam/mkt_assets/crs/banners/WF-189305/970x250-Impact-NonSub/images/cta.png", id:"cta"},
		{src:"https://mwcm.nyt.com/dam/mkt_assets/crs/banners/WF-189305/970x250-Impact-NonSub/images/logo2.png", id:"logo2"},
		{src:"https://mwcm.nyt.com/dam/mkt_assets/crs/banners/WF-189305/970x250-Impact-NonSub/images/logo.png", id:"logo"},
		{src:"https://mwcm.nyt.com/dam/mkt_assets/crs/banners/WF-189305/970x250-Impact-NonSub/images/t1.png", id:"t1"},
		{src:"https://mwcm.nyt.com/dam/mkt_assets/crs/banners/WF-189305/970x250-Impact-NonSub/images/t2.png", id:"t2"},
		{src:"https://mwcm.nyt.com/dam/mkt_assets/crs/banners/WF-189305/970x250-Impact-NonSub/images/t3.png", id:"t3"},
		{src:"https://mwcm.nyt.com/dam/mkt_assets/crs/banners/WF-189305/970x250-Impact-NonSub/images/t4.png", id:"t4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0952966768604481926167236DB4B458'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;