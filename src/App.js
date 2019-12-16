import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import uuid from 'uuid';

import './App.css';

class App extends React.Component {
	state = {
		todos: [
			{
				id: uuid.v4(),
				title: 'Learn Vanilla JS',
				completed: false
			},
			{
				id: uuid.v4(),
				title: 'Learn ReactJS',
				completed: false
			},
			{
				id: uuid.v4(),
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

	addTodo = title => {
		const newTodo = {
			id: uuid.v4(),
			title,
			completed: false
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<div className="container">
						<Route
							exact
							path="/"
							render={props => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									<Todos
										todos={this.state.todos}
										toggleComplete={this.toggleComplete}
										deleteItem={this.deleteItem}
									/>
								</React.Fragment>
							)}
						/>
						<Route path="/about" component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
