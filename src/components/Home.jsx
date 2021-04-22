import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';
import todoService from '../api/service';

export default class Home extends Component {
	state = { data: [] };

	async componentDidMount() {
		let theList = await todoService.getAll();
		this.setState({ data: theList });
	}

	render() {
		return (
			<div className='flex-container'>
				<div className='col bg-primary'>
					<TodoList list={this.state.data} />
				</div>
				<div className='col bg-secondary'>
					<TodoDetails />
				</div>
			</div>
		);
	}
}
