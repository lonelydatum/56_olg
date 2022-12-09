(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power2.out"
});

var READ = {
	t1: 3,
	t2a: 2.3,
	t2b: 2
};

var w = size.w;
var h = size.h;

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
				document.getElementById("banner").addEventListener('mouseover', mouseover);
			}
		} });
	tl.set(".frame1", { opacity: 1 });
	return tl;
}

function start() {
	var tl = init();

	gsap.to(".man", { scale: 1.07, duration: 5 });

	logo();

	tl.from(".t1", { duration: .3, opacity: 0, x: "-=100" }, "+=.7");
	tl.add("t1", "+=" + READ.t1);
	tl.to([".t1", ".man"], { duration: .2, opacity: 0 }, "t1");

	var tlHideOLG = new TimelineMax();
	tlHideOLG.set(['#triangleRed'], { attr: { points: "5.76 240.21 17.19 240.26 55.04 240.26 5.76 240.21" }, duration: 0.01, delay: 0 });
	tlHideOLG.set('#GL_playForOntario', { opacity: 0 });
	tlHideOLG.set(['.group-O'], { y: 80 });
	tlHideOLG.set(['.group-L'], { y: 80 });
	tlHideOLG.set(['.group-G'], { y: 80 });
	tl.add(tlHideOLG, "t1");

	tl.to("#GL_blueWedge", { y: 100, duration: .3 }, "-=.2");
	tl.to("#GL_blueWedge", { y: 0, duration: .5 }, "+=.3");
	tl.add(logo(), "-=.4");

	tl.add(hand(), "-=.3");

	tl.set(".frame2", { opacity: 1 });
	tl.from(".txt-get-started", { duration: .3, opacity: 0 }, "+=.38");
	tl.from(".olg-ca", { duration: .3, opacity: 0 }, "+=.3");
	tl.from(['#EF_cta'], 0.5, { opacity: 0, y: "+=20'", onComplete: mouseover }, '+=.25');
}

function hand() {
	var tl = new TimelineMax();
	var obj = size.w > size.h ? { y: "+=" + size.h } : { x: "+=" + size.w };

	tl.from(".hand", _extends({ duration: .3 }, obj), 0);
	tl.from(".t2a", { duration: .4, x: "-=" + size.w }, 0);
	tl.to(".t2a", { duration: .3, opacity: 0, x: "+=100" }, "+=" + READ.t2a);
	tl.from(".t2b", { duration: .4, opacity: 0, x: "-=100" });

	tl.add("t2", "+=" + READ.t2b);
	tl.to(".t2b", { duration: .2, opacity: 0 }, "t2");
	tl.to(".hand", _extends({ duration: .25, opacity: 0 }, obj), "t2");
	return tl;
}

function mouseover(e) {
	gsap.to(['#EF_cta'], { duration: .4, yoyo: true, scale: .535, repeat: 1,
		onComplete: function onComplete() {
			// viewport.addEventListener('mouseover', mouseover)
		}
	});
}

function logo1() {}

function logo() {
	gsap.set(['#GL_logo'], { y: -6, x: 1 });
	var tl = new TimelineMax();
	tl.set('#GL_playForOntario', { opacity: 0 });
	tl.set(['.group-O'], { y: 80 });
	tl.set(['.group-L'], { y: 80 });
	tl.set(['.group-G'], { y: 80 });
	tl.set(['#triangleRed'], { attr: { points: "5.76 240.21 17.19 240.26 55.04 240.26 5.76 240.21" }, duration: 0.01, delay: 0 });
	tl.to('#triangleRed', { delay: 0.25, duration: .5, attr: { points: "17.19 202.41 17.19 240.26 55.04 240.26 17.19 202.41" } });

	var tlBall = new TimelineMax();

	tlBall.to(['.group-O'], { duration: 0.5, y: 0, ease: 'back.out(4.5)' });
	tlBall.to(['.group-L'], { duration: 0.5, y: 0, ease: 'back.out(4.5)' }, '-=0.45');
	tlBall.to(['.group-G'], { duration: 0.5, y: 0, ease: 'back.out(4.5)' }, '-=0.45');

	tlBall.to(['#GL_playForOntario'], { opacity: 1, duration: 0.4 }, .6);
	tl.add(tlBall, .2);

	return tl;
}

exports.size = size;
exports.init = init;
exports.start = start;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

gsap.set("#EF_cta", { x: -150, y: -156, transformOrigin: "300px 312px" });
// gsap.set(".man", {x:-150, y:-125, transformOrigin:"300px 250px"})
(0, _commonJsCommonJs.start)();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
