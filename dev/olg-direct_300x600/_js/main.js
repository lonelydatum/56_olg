


import {init, olg, size, chev, bb2, cluserF} from '../../_common/js/common.js'



function start(){
	const tl = init()
	tl.add(cluserF())


	tl.to([".o-shadow", ".proline", ".o"], {duration:.1, opacity:0}, "+=.1")
	tl.from(".bring",  {duration:.25, x:"-=100", opacity:0})
	tl.add(chev())



	
	tl.to(".chev_1a", {duration:.3, opacity:0}, "+=.1")
	tl.from(".proline-end",  {duration:.3, opacity:0}, "+=.1")
	tl.to(".chev_1b", {duration:.3, opacity:0}, "+=.3")
	


	
	tl.add(bb2())

}



start()



module.exports = {};

