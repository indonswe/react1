import React, { useEffect } from 'react';

export default function TodoItemRow(props) {
	useEffect(() => {
		console.log('component TodoItem mounted');
	}, []);

	let item = props.itemData;
	console.log({item});
	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.instructions}</td>
			<td>{item.category.name}</td>
			<td>
				<input
					type='button'
					className='btn btn-warning btn-sm'
					//value='Show details'
					value={item.id}
					//value = 'item.id'
					
					onClick={() => props.itemClick(item)}
				/>
			</td>
		</tr>
	);
	/*return (
		<tr>
			<td>{item.deadline}</td>
			<td>{item.title}</td>
			<td>{item.assignee.firstName}</td>
			<td>
				<input
					type='button'
					className='btn btn-warning btn-sm'
					//value='Show details'
					value = 'item.id'
					onClick={() => props.itemClick(item.id)}
				/>
			</td>
		</tr>
	);*/
}
