import filter_singularity from './singularity_filter/index.js'

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
		name: 'Moe',
		title: 'Mother of All Maids',
	},
	{
		name: 'Van Diesel',
		role: 'Hollywood Actor',
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
		name: 'Yasuke',
		title: 'First Black Samurai',
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
	{
		name: 'Van Diesel',
		role: 'Hollywood Actor',
	},
]

console.log(filter_singularity(z, a))
