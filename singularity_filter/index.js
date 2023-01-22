/**
 * A utility function that filters two arrays of objects for unique objects
 * @param {object[]} x An array of objects
 * @param {object[]} y An array of objects
 * @returns {object[]} An array of objects unique to both x and y
 */
const filter_singularity = (x, y) => {
	const result = []

	const xObject = {},
		yObject = {}
	const xLen = x.length,
		yLen = y.length
	let xCounter = 0

	for (xCounter; xCounter < xLen; xCounter++) {
		let isSimilar = true,
			yCounter = 0
		const left = x[xCounter]

		for (yCounter; yCounter < yLen; yCounter++) {
			const right = y[yCounter]

			const mergedKeys = Object.keys({ ...left, ...right })
			const mergedLen = mergedKeys.length
			let mCounter = 0

			let differences = 0
			for (mCounter; mCounter < mergedLen; mCounter++) {
				const leftValue = left[mergedKeys[mCounter]],
					rightValue = right[mergedKeys[mCounter]]
				isSimilar = leftValue == rightValue
				if (!isSimilar) differences++
			}

			if (differences) {
				yObject[yCounter] === undefined || yObject[yCounter] !== null
					? (yObject[yCounter] = right)
					: (yObject[yCounter] = null)
				xObject[xCounter] === undefined || xObject[xCounter] !== null
					? (xObject[xCounter] = left)
					: (xObject[xCounter] = null)
			} else {
				yObject[yCounter] = null
				xObject[xCounter] = null
			}
		}
	}

	const yObjectKeys = Object.keys(yObject)
	const yObjectLen = yObjectKeys.length
	let yObjCounter = 0

	for (yObjCounter; yObjCounter < yObjectLen; yObjCounter++) {
		const yObjValue = yObject[yObjectKeys[yObjCounter]]
		if (yObjValue !== null) {
			result.push(yObjValue)
		}
	}

	const xObjectKeys = Object.keys(xObject)
	const xObjectLen = xObjectKeys.length
	let xObjCounter = 0

	for (xObjCounter; xObjCounter < xObjectLen; xObjCounter++) {
		const xObjValue = xObject[xObjectKeys[xObjCounter]]
		if (xObjValue !== null) {
			result.push(xObjValue)
		}
	}

	return result
}

export default filter_singularity
