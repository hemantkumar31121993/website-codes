function go(image) {
	window.location.href=image.alt+'.html';
}
function change(image) {
	image.src="tabs/"+image.alt+"high.png";
}
function restore(image) {
	image.src="tabs/"+image.alt+"low.png";
}


