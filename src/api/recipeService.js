import axios from 'axios';
class recipeService {
	async getAllRecipes() {
        console.log('gAR');
		return await axios
			.get('https://lexjava-recipes.herokuapp.com/api/recipes')
			.then((response) => {
				console.log(response);
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}
	async getRecipe(id) {
		return await axios
			.get('https://lexjava-recipes.herokuapp.com/api/recipes/' + id)
			.then((response) => {
				console.log(response);
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}
}
export default new recipeService();