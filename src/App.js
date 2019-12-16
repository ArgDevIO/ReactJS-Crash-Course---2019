import React from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';

import './App.css';

class App extends React.Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Learn Vanilla JS',
				completed: false
			},
			{
				id: 2,
				title: 'Learn ReactJS',
				completed: false
			},
			{
				id: 3,
				title: 'Learn ExpressJS',
				completed: false
			}
		]
	};

	// Toggle Complete
	toggleComplete = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	deleteItem = id => {
		this.setState({
			todos: [...this.state.todos.filter(todo => todo.id !== id)]
		});
	};
	//57:00min
	render() {
		return (
			<div className='App'>
				<Header />
				<Todos
					todos={this.state.todos}
					toggleComplete={this.toggleComplete}
					deleteItem={this.deleteItem}
				/>
			</div>
		);
	}
}

export default App;
