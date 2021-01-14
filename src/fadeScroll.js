export default function fadeScroll() {
	window.onscroll = function() {
		let w = window,
		scrollTop = w.pageYOffset,
		perc = scrollTop / 2 / (w.innerHeight / 2);

		document.getElementById("landing").style.filter = "blur(" + perc * 8 + "px)";
		document.getElementById("landing").style.filter = "opacity(" + 1 - perc + ")";
	};	
}