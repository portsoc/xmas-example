var
addSnowToPage = function () {

	"use strict";
	var
		loop = 750,
		flakes = 6,
		maxscale = 5,
		html = "<div id='sn'>",
		offset = 2*screen.height,
		audio = new Audio('lib/jingle.ogg'),
		anim,
		scale,
		flake,
		xpos,
		ypos,
		speed,
		delay,
		toggleSnowfall = function(e) {
	    if (e.code == "KeyS" || e.keyCode == 83) {
        sn.classList.toggle("hidden");
				if (sn.classList.contains("hidden")) {
					audio.pause();
				} else {
					audio.play();
				}
	    }
		};

	while (--loop>0) {
		flake = 1 + Math.round(Math.random() * (flakes-1) );
		xpos = Math.random() * screen.width * 2;
		ypos = Math.random() * offset - offset;
		scale = Math.random() * maxscale;
		speed = Math.round( (maxscale*50)-(scale*50) );
		delay = Math.round( Math.random() * maxscale );
		anim = Math.round( Math.random() ) + 1;

		html += "<img src='img/sf"+flake+".svg' class=f"+anim+" style='width: "+scale+"ex; position: absolute; top:"+ypos+"px; left:"+xpos+"px; animation-delay: "+delay+"s; animation-duration: "+speed+"s; opacity: 0;'>";
	}
	document.body.innerHTML += html + "</div>";
    sn.classList.toggle("hidden");

	return { toggleSnowfall: toggleSnowfall };
},




prepareSnowfall = function() {
	"use strict";
	var snow = addSnowToPage();
	document.addEventListener("keyup", snow.toggleSnowfall);
};


window.addEventListener("load", prepareSnowfall);
