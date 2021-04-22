import React from 'react';

export default function TodoItemRow(props) {
	let item = props.itemData;
	console.log(props);
	return (
		<tr>
			<td>{item.deadline}</td>
			<td>{item.title}</td>
			<td>{item.assignee.firstName}</td>
		</tr>
	);
}
