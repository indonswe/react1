import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';
import todoService from '../api/service';
import TodoCreate from './TodoCreate';

export default class Home extends Component {
	state = { data: [], isLoading: true, showDetails: false, selectId: '', showCreate: false };

	async componentDidMount() {
		let theList = await todoService.getAll();
		this.setState({ data: theList, isLoading: false });
		console.log('mounting Home component');
	}

	displayDetails = (id) => {
		console.log('clicked id', id);
		this.setState({
			showDetails: true,
			selectId: id,
			showCreate: false,
		});
	};

	displayCreate = () => {
		this.setState({ showCreate: true });
	};

	render() {
		return (
			<div className='flex-container'>
				<div className='col bg-primary'>
					{this.state.isLoading ? (
						<h1>Loading data</h1>
					) : (
						<div>
							<TodoList list={this.state.data} itemClick={this.displayDetails} />
							<input
								type='button'
								className='btn btn-danger btn-sm'
								value='Create new todo'
								onClick={() => {
									this.setState({ showDetails: false, showCreate: true });
								}}
							/>
						</div>
					)}
				</div>
				<div className='col bg-secondary'>
					{this.state.showDetails ? (
						<TodoDetails id={this.state.selectId} />
					) : this.state.showCreate ? (
						<TodoCreate />
					) : (
						<h1>Welcome</h1>
					)}
				</div>
			</div>
		);
	}
}
