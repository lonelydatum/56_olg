(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power4.out"
});

var READ = {
	t1: 2,
	t2: 3
};

var w = size.w;
var h = size.h;

TweenLite.set([".o", ".proline"], {
	transformOrigin: size.w + "px " + size.h + "px",
	x: -size.w / 2,
	y: -size.h / 2,
	scale: .5
});

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });
	return tl;
}

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
	TweenLite.set("#olg", { opacity: 1 });
	var tl = new TimelineMax();

	tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
	tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

	// tl.timeScale(2)

	return tl;
}

function bb() {
	var tl = bb_a();

	tl.to([".o-shadow", ".proline", ".o"], { duration: .1, opacity: 0 }, "f1-out");

	tl.from(".bring", { duration: .25, x: "-=100", opacity: 0 });
	tl.add(chev());
	return tl;
}

function bb2() {
	var tl = init();

	tl.from(".t2", { duration: .3, opacity: 0 }, "+=.5");
	tl.to(".t2", { duration: .3, opacity: 0 }, "+=" + READ.t2);

	tl.add("cta", "+=.2");

	tl.from(".cta", { duration: .3, opacity: 0 }, "cta");

	tl.add("end", "+=.3");
	tl.add(olg(), "end");
	tl.from(".footer", { duration: .5, opacity: 0 }, "end");
	return tl;
}

function chev() {
	var tl = new TimelineMax();

	tl.add("chev", "+=.1");
	tl.to(".zero", { duration: .3, opacity: 0 }, "chev");
	tl.from(".chev_1", { duration: .3, opacity: 0 }, "chev");
	tl.from(".chev_2", { duration: .3, opacity: 0 }, "-=.2");
	tl.from(".chev_3", { duration: .3, opacity: 0 }, "-=.2");
	return tl;
}

function HOR() {

	TweenLite.set([".bring"], {
		transformOrigin: size.w + "px " + size.h + "px",
		x: -size.w / 2,
		y: -size.h / 2,
		scale: .5
	});

	var tl = init();

	var HEIGHT = size.h * .7;

	tl.from(".o", { duration: .3, opacity: 0 }, "+=.2");
	tl.from(".proline", { scale: 1, duration: .25, opacity: 0, ease: 'back.out' }, "+=.2");
	tl.to(".proline", { duration: .25, opacity: 0 }, "+=1");

	tl.add("t1-in", "+=.2");
	tl.from(".t1a", { duration: .2, opacity: 0, y: "-=" + HEIGHT }, "t1-in");
	tl.from(".t1b", { duration: .2, opacity: 0, y: "+=" + HEIGHT }, "t1-in");

	tl.add("t2-out", "+=" + READ.t1);
	tl.to([".t1a", ".t1b"], { duration: .2, opacity: 0 }, "t2-out");

	tl.from(".bring", { scale: 1, duration: .25, opacity: 0, ease: 'back.out' }, "+=.2");
	tl.to(".bring", { duration: .25, opacity: 0 }, "+=1.3");

	tl.from(".t2", { duration: .25, opacity: 0 }, "+=.2");
	tl.to(".t2", { duration: .25, opacity: 0 }, "+=" + READ.t2);

	tl.from(".proline-end", { duration: .25, opacity: 0 }, "+=.1");
	// tl.to(".proline-end", {duration:.25, opacity:0}, "+=.3")

	tl.from(".cta", { duration: .25, opacity: 0 }, "+=.3");

	tl.add("end", "+=.3");
	tl.add(olg(), "end");
	tl.from(".footer", { duration: .5, opacity: 0 }, "end");
}

function cluserF() {
	var tl = init();
	tl.from(".o", { duration: .3, scale: 1, ease: 'back.out', opacity: 0 }, "+=.2");
	tl.add("proline", "+=.4");
	tl.from(".o-shadow", { duration: .1, opacity: 0 }, "proline");
	tl.from(".proline", { scale: 1, duration: .25, opacity: 0, ease: 'back.out' }, "proline");

	tl.to(".proline", { duration: .2, opacity: 0 }, "+=1");

	tl.add("t1-in");
	tl.from(".t1a", { x: "-" + size.w, duration: .2 }, "t1-in");
	tl.from(".t1b", { x: "" + size.w, duration: .2 }, "t1-in");

	tl.add("t2-in", "+=" + READ.t1);
	tl.to([".t1a", ".t1b", ".o"], { duration: .2, opacity: 0 }, "t2-in");
	// tl.to(".t1b", { duration:.2, opacity:0}, "t2-in")

	return tl;
}

exports.size = size;
exports.init = init;
exports.olg = olg;
exports.chev = chev;
exports.bb = bb;
exports.bb2 = bb2;
exports.READ = READ;
exports.HOR = HOR;
exports.cluserF = cluserF;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function HOR() {
	// import {init, olg, size, chev, bb, bb2, READ} from '../../_common/js/common.js'

	TweenLite.set([".bring"], {
		transformOrigin: _commonJsCommonJs.size.w + "px " + _commonJsCommonJs.size.h + "px",
		x: -_commonJsCommonJs.size.w / 2,
		y: -_commonJsCommonJs.size.h / 2,
		scale: .5
	});

	var tl = (0, _commonJsCommonJs.init)();

	var HEIGHT = _commonJsCommonJs.size.h * .7;

	tl.from(".o", { duration: .3, opacity: 0 }, "+=.2");
	tl.from(".proline", { scale: 1, duration: .25, opacity: 0, ease: 'back.out' }, "+=.2");
	tl.to(".proline", { duration: .25, opacity: 0 }, "+=1");

	tl.add("t1-in", "+=.2");
	tl.from(".t1a", { duration: .2, opacity: 0, y: "-=" + HEIGHT }, "t1-in");
	tl.from(".t1b", { duration: .2, opacity: 0, y: "+=" + HEIGHT }, "t1-in");

	tl.add("t2-out", "+=" + _commonJsCommonJs.READ.t1);
	tl.to([".t1a", ".t1b"], { duration: .2, opacity: 0 }, "t2-out");

	tl.from(".bring", { scale: 1, duration: .25, opacity: 0, ease: 'back.out' }, "+=.2");
	tl.to(".bring", { duration: .25, opacity: 0 }, "+=1.3");

	tl.from(".t2", { duration: .25, opacity: 0 }, "+=.2");
	tl.to(".t2", { duration: .25, opacity: 0 }, "+=" + _commonJsCommonJs.READ.t2);

	tl.from(".bring2", { duration: .25, opacity: 0 }, "+=.1");
	tl.from([".cta", ".proline-end"], { duration: .25, opacity: 0 }, "+=.3");

	tl.add("end", "+=.3");
	tl.add((0, _commonJsCommonJs.olg)(), "end");
	tl.from(".footer", { duration: .5, opacity: 0 }, "end");

	// tl.play("t2-out")
}

HOR();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
