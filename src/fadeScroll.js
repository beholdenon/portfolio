import $ from "jquery";

export default function fadeScroll() {
	window.onscroll = function() {
		let w=window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		x = w.innerWidth || e.clientWidth || g.clientWidth,
		y = w.innerHeight || e.clientHeight || g.clientHeight,
		scrollTop = w.pageYOffset,
		perc = scrollTop / 2 / (w.innerHeight / 2);

		document.getElementById("landing").style.filter = "blur(" + perc * 8 + "px)";
		document.getElementById("landing").style.filter = "opacity(" + 1 - perc + ")";
	};	
}