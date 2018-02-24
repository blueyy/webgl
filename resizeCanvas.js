function resizeCanvasToDisplaySize (canvas) {
	let width = canvas.clientWidth
	let height = canvas.clientHeight
	if (width !== canvas.width || height !== canvas.height) {
		canvas.width = width
		canvas.height = height
	}
}