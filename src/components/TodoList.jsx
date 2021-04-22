import React from 'react';
import TodoItemRow from './TodoItemRow';

export default function TodoList(props) {
	console.log(props.list);
	return (
		<div>
			<table className='table bg-light mt-2'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Title</th>
						<th>Assignee</th>
					</tr>
				</thead>
				<tbody>
					{props.list.map((todoItem) => (
						<TodoItemRow key={todoItem.id} itemData={todoItem} />
					))}
				</tbody>
			</table>
		</div>
	);
}
