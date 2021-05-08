import React, { useEffect } from 'react';
import TodoItemRow from './TodoItemRow';

export default function TodoList(props) {
	useEffect(() => {
		console.log('component TodoList mounted');
	}, []);

	return (
		<React.Fragment>
			<table className='table bg-light mt-2'>
				<thead>
					<tr>
						<th>Recipe</th>
						<th>Description</th>
						<th>Category</th>
					</tr>
				</thead>
				<tbody>
					{props.list.map((todoItem) => (
						<TodoItemRow key={todoItem.id} itemData={todoItem} itemClick={props.itemClick} />
					))}
				</tbody>
			</table>
		</React.Fragment>
	);
}
