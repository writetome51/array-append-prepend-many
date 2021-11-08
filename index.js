export const appendMany = (values, array) => {
	// Tested to be faster than array.push(...values):
	for (
		let i = 0, lastI = array.length - 1, valsLen = values.length;
		i < valsLen;
		++i
	) {
		array[++lastI] = values[i];
	}
}


export const prependMany = (values, array) => {
	// Tested to be faster than array.unshift(...values):
	array.splice(0, 0, ...values)
}
