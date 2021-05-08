import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';
import TodoCreate from './TodoCreate';
import recipeService from '../api/staticRecipeService';
import update from '../api/update';
import TryFormList from './TryFormList';
import TryForm from './TryForm';


export default class Home extends Component {
	state = { data: [], isLoading: true, showDetails: false, selectItem: '', showCreate: false };

	async componentDidMount() {
		//let theList = await todoService.getAll();
		let theList = await recipeService.getAllRecipes();
		let listUpdate = await update.getNewData();
		//this.setState({data:listUpdate, isLoading:false});
		this.setState({ data: theList.concat(listUpdate), isLoading: false });
		//this.setState({ data: theList, isLoading: false });
		//let newCreateList = await TodoCreate.state.value;
		//this.setState({data: theList.concat(newCreateList), isLoading = false});
		console.log('mounting Home component');
	}

	displayDetails = (item) => {
		console.log('clicked id', item);
		this.setState({
			showDetails: true,
			selectItem: item,
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
								value='Add new recipe'
								onClick={() => {
									this.setState({ showDetails: false, showCreate: true });
								}}
							/>
						</div>
						
					)}
				</div>
				<div className='col bg-secondary'>
					{this.state.showDetails ? (
						//<TodoDetails id={this.state.selectId} />
						<TodoDetails item={this.state.selectItem} />
					) : this.state.showCreate ? (
						<TodoCreate />
					) : (
						<h1>Welcome</h1>
					)}
				</div>
				<div>
							<TryForm list={this.state.data} itemClick={this.displayDetails} />
							<input
								type='button'
								className='btn btn-danger btn-sm'
								value='TryForm'
								onClick={() => {
									this.setState({ showDetails: false, showCreate: true });
								}}
							/>
						</div>
			</div>
			
		);
	}
}

