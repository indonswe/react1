import React, { useEffect, useState } from 'react';
import todoService from '../api/service';

export default function TodoDetails(props) {
	const [todoItem, setTodoItem] = useState({
		item: '',
		isLoading: true,
	});

	useEffect(() => {
		async function fetchData() {
			let theItem = await todoService.getById(props.id);
			//console.log('component TodoDetails mounted', todoItem);

			setTodoItem({ item: theItem, isLoading: false });
			//console.log('component TodoDetails mounted', todoItem); // ...
		}
		fetchData();
	}, [props.id]);

	return (
		<React.Fragment>
			<h3>Id:{props.id}</h3>
			{todoItem.isLoading ? <h1>Loading data</h1> : <h3>Title:{todoItem.item.title}</h3>}
		</React.Fragment>
	);
}
