export default deepClone = (obj) => {
	if (typeof obj !== 'object' || obj === null) {
		return obj
	}
	let result = obj instanceof Array ? [] : {}

	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			result[key] = deepClone(obj[key])
		}
	}
	return result
}
