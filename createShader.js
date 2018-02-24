function createShader (gl, type) {
	let glsl = document.querySelector('#' + type + '-shader')
	if (!glsl) {
		throw new Error('cannot find ' + type + ' shaderSource!')
	}
	let shaderSource = glsl.text
	let shaderType = type === 'vertex' ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER
	let shader = gl.createShader(shaderType)
	gl.shaderSource(shader, shaderSource)
	gl.compileShader(shader)
	console.log(shader)
	let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
	if (!success) {
		throw new Error('cannot compile shader!')
	}
	return shader
}