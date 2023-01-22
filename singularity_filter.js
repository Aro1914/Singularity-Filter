const x = [
	{
		name: 'Emmanuel',
		title: 'Upcoming Cyber God',
	},
	{
		name: 'Map',
		title: 'The One Who Asks',
	},
]

const y = [
	{
		name: 'Mystery Man',
		title: 'That Which is Unique',
	},
	{
		name: 'Map',
		title: 'The One Who Asks',
	},
]

const z = [
	{
		name: 'Alice',
		title: 'The Test Subject',
	},
	{
		name: 'Bob',
		title: 'The Accomplice',
		role: 'Pair Tester',
		position: 2,
		sex: 'Male',
	},
]

const a = [
	{
		name: 'Alice',
		title: 'The Test Subject',
	},
	{
		name: 'Jane',
		title: 'The Test Subject',
		behavior: 'Logical',
	},
	{
		name: 'Bob',
		title: 'The Accomplice',
		role: 'Unknown',
		position: 2,
		sex: 'Male',
	},
]

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
				// console.log({ leftValue, rightValue, isSimilar })
				if (!isSimilar) differences++
			}

			if (differences) {
				yObject[yCounter] = right
				xObject[xCounter] = left
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

	const xObjectKeys = Object.keys(yObject)
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

console.log(filter_singularity(z, a))

/**
 * get the length of both arrays for looping
 *
 * for length of left;
 *  define isSimilar
 *  for length of right;
 *    merge the keys
 *      for length of merged keys
 *        isSimilar = x[left][mergedKey] !== y[right][mergedKey]
 *          if isSimilar is false break
 *      if isSimilar is true store index as key and object as value in outer right object
 *      else equate the current right index to null in the outer right object
 *  if isSimilar is true
 *  push left to outer left stack
 *
 * result = left stack
 *
 * for keys of right object,
 *  if key's value !== null
 *    push value to result
 *
 * there are two stacks, one for the left, one for the right
 *
 * within each loop get the length of the object
 *
 * check if that object is unique looping through the second arrays
 *
 * if that object is not similar to any other object on the other array, push to an internal stack, else pop from it if its length is more than One
 *
 * a single variable is used to monitor isSimilar, if equated to false, the inner loop breaks
 *
 * if the length of the right inner object is greater than the left, the inner loop breaks
 *
 * if an object is found to not equate to all on the left, it is sent to the left outer stack
 *
 * if a value is found
 *
 */
