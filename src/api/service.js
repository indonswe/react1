let theData = [
	{
		id: 'Example-TodoItem-1',
		title: 'Finish Assignment!',
		description: 'The assignment is to create TodoItems.',
		deadline: '2020-01-01T17:00:00',
		done: false,
		assignee: {
			id: 'Example-User-1',
			firstName: 'Simon',
			lastName: 'Elbrink',
		},
	},
	{
		id: 'Example-TodoItem-2',
		title: 'Create More Assignments!',
		description: 'Spawn new ideas with teammates.',
		deadline: '2020-01-02T08:00:00',
		done: false,
		assignee: {
			id: 'Example-User-3',
			firstName: 'Fredrik',
			lastName: 'Odin',
		},
	},
	{
		id: 'Example-TodoItem-3',
		title: 'Create More Exercises!',
		description: 'Spawn new ideas with teammates.',
		deadline: '2020-01-03T08:00:00',
		done: false,
		assignee: {
			id: 'Example-User-3',
			firstName: 'Fredrik',
			lastName: 'Odin',
		},
	},
];
class todoService {
	getAll() {
		return theData;
	}
}
export default new todoService();
