import {READ, init, olg, size, chev, bb2, cluserF} from '../../_common/js/common.js'



function HOR(){
	// import {init, olg, size, chev, bb, bb2, READ} from '../../_common/js/common.js'




	TweenLite.set([".bring" ], {
		transformOrigin:`${size.w}px ${size.h}px`,
		x: -size.w/2,
		y: -size.h/2,
		scale: .5
	})

	const tl = init()
	
	const HEIGHT = size.h*.7

	tl.from(".o",  {duration:.3, opacity:0}, "+=.2")
	tl.from(".proline", {scale:1, duration:.25, opacity:0, ease:'back.out'}, "+=.2")
	tl.to(".proline", {duration:.25, opacity:0}, "+=1")
	

	tl.add("t1-in", "+=.2")
	tl.from(".t1a", {duration:.2, opacity:0, y:`-=${HEIGHT}`}, "t1-in")	
	tl.from(".t1b", {duration:.2, opacity:0, y:`+=${HEIGHT}`}, "t1-in")	

	tl.add("t2-out", `+=${READ.t1}`)
	tl.to([".t1a", ".t1b"], {duration:.2, opacity:0}, "t2-out")
	



	tl.from(".bring", {scale:1, duration:.25, opacity:0, ease:'back.out'}, "+=.2")
	tl.to(".bring", {duration:.25, opacity:0}, "+=1.3")


	tl.from(".t2", {duration:.25, opacity:0}, "+=.2")
	tl.to(".t2", {duration:.25, opacity:0}, `+=${READ.t2}`)

	tl.from(".bring2", {duration:.25, opacity:0}, "+=.1")
	tl.from([".cta", ".proline-end"], {duration:.25, opacity:0}, "+=.3")
	
	
	
	tl.add("end", "+=.3")
	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")




	// tl.play("t2-out")
}

HOR()


module.exports = {};

