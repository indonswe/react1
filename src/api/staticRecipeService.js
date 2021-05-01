let theData = [
	{
		id: 1,
		name: 'Fiffikaka',
		instructions: 'blend all and heat it up',
		ingredients: [
			{
				id: 1,
				name: 'milk',
				measurement: 'DECILITER',
				amount: 6.0,
			},
			{
				id: 2,
				name: 'egg',
				measurement: 'PIECES',
				amount: 3.0,
			},
			{
				id: 3,
				name: 'wheat flour',
				measurement: 'DECILITER',
				amount: 2.5,
			},
			{
				id: 4,
				name: 'baking powder',
				measurement: 'MILLILITER',
				amount: 15.0,
			},
			{
				id: 5,
				name: 'salt',
				measurement: 'MILLILITER',
				amount: 5.0,
			},
			{
				id: 6,
				name: 'sugar',
				measurement: 'DECILITER',
				amount: 4.5,
			},
			{
				id: 7,
				name: 'butter',
				measurement: 'GRAM',
				amount: 225.0,
			},
			{
				id: 8,
				name: 'vanilla powder',
				measurement: 'MILLILITER',
				amount: 22.0,
			},
			{
				id: 9,
				name: 'cocoa',
				measurement: 'DECILITER',
				amount: 1.5,
			},
		],
		category: {
			id: 1,
			name: 'Pastries',
		},
	},
	{
		id: 2,
		name: 'Pancakes',
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
	},
];
const theIngredients = [
	{
		id: 1,
		name: 'milk',
	},
	{
		id: 2,
		name: 'egg',
	},
	{
		id: 3,
		name: 'wheat flour',
	},
	{
		id: 4,
		name: 'baking powder',
	},
	{
		id: 5,
		name: 'salt',
	},
	{
		id: 6,
		name: 'sugar',
	},
	{
		id: 7,
		name: 'butter',
	},
	{
		id: 8,
		name: 'vanilla powder',
	},
	{
		id: 9,
		name: 'cocoa',
	},
];
class staticRecipeService {
	async getAllRecipes() {
		return theData;
	}
	async getRecipe(id) {
		return theData.find((item) => item.id === id);
	}
	async getAllIngredients() {
		return theData;
	}
	async getIngredient(id) {
		return theIngredients.find((item) => item.id === id);
	}
}
export default new staticRecipeService();