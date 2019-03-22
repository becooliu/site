export default function MapLoader() {
	return new Promise((resolve, reject) => {
		if (window.AMap) {
			resolve(window.AMap)
		} else {
			var script = document.createElement('script')
			script.type = 'text/javascript'
			script.async = true
			script.src =
				'http://webapi.amap.com/maps?v=1.3&key=7af825568db7ddb0b05fc6c99e3d4745'
			script.onerror = reject
			document.head.appendChild(script)
		}
		window.initAMap = () => {
			resolve(window.AMap)
		}
	})
}
