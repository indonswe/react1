let newData = [
	{
		id: 3,
		name: 'Hamburgare',
		instructions: 'cook it',
		ingredients: [
			{
				id: 1,
				name: 'milk',
				measurement: 'LITER',
				amount: 1.0,
			},
			{
				id: 2,
				name: 'egg',
				measurement: 'PIECES',
				amount: 4.0,
			},
			{
				id: 3,
				name: 'wheat flour',
				measurement: 'DECILITER',
				amount: 4.0,
			},
		],
		category: {
			id: 2,
			name: 'Brunsh',
		},
	}
]
class update {
	async getNewData() {
		return newData;
	}
	}
export default new update();