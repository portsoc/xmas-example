var
addSnowToPage = function () {

	"use strict";
	var
		loop = 750,
		flakes = 6,
		maxscale = 5,
		html = "<div id='sn'>",
		offset = 2*screen.height,
		anim,
		scale,
		flake,
		xpos,
		ypos,
		speed,
		delay;

	while (--loop>0) {
		flake = 1 + Math.round(Math.random() * (flakes-1) );
		xpos = Math.random() * screen.width * 2;
		ypos = Math.random() * offset - offset;
		scale = Math.random() * maxscale;
		speed = Math.round( (maxscale*50)-(scale*50) );
		delay = Math.round( Math.random() * maxscale );
		anim = Math.round( Math.random() ) + 1;

		console.log(xpos, ypos);

		html += "<img src='img/sf"+flake+".svg' class=f"+anim+" style='width: "+scale+"ex; position: absolute; top:"+ypos+"px; left:"+xpos+"px; animation-delay: "+delay+"s; animation-duration: "+speed+"s; opacity: 0;'>";
	}
	document.body.innerHTML += html + "</div>";
    sn.classList.toggle("hidden");
},


toggleSnowfall = function(e) {
	"use strict";
    if (e.code == "KeyS") {
        sn.classList.toggle("hidden");
    }
},

prepareSnowfall = function() {
	"use strict";
	addSnowToPage();
	document.addEventListener("keyup", toggleSnowfall);
};


window.addEventListener("load", prepareSnowfall);
