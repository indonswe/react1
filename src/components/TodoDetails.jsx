import React, { useEffect, useState } from 'react';
import todoService from '../api/service';
import todoServiceRecipe from '../api/staticRecipeService';

export default function TodoDetails(props) {
	const [todoItem, setTodoItem] = useState({
		item: '',
		isLoading: true,
	});

	useEffect(() => {
		async function fetchData() {
			//let theItem = await todoService.getById(props.id);
		
		//let theItem = await todoServiceRecipe.getRecipe(props.id);
			//console.log('component TodoDetails mounted', todoItem);
			let theItem = await props.item;

			setTodoItem({ item: theItem, isLoading: false });
			console.log({todoItem})
			//console.log('component TodoDetails mounted', todoItem); // ...
		}
		fetchData();
	}, [props.item]);

	/*return (
		<React.Fragment>
			<h3>Id:{props.id}</h3>
			{todoItem.isLoading ? <h1>Loading data</h1> : <h3>Title:{todoItem.item.ingredients(1).name}</h3>}
		</React.Fragment>
	);
	return (
		<React.Fragment>
			<h3>Id:{props.id}</h3>
			{todoItem.isLoading ? <h1>Loading data</h1> : <h3>Title:{todoItem.item.name}</h3>}
		</React.Fragment>
	);*/
	return (
		<React.Fragment>
			
		{todoItem.item.ingredients && todoItem.item.ingredients.map(delar =>
                        <tr key={delar.id}>
                            <td>{delar.name}</td>
                        </tr>
                    )}
	</React.Fragment>
	)


}
