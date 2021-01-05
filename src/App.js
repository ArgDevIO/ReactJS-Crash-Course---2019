import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

//import uuid from 'uuid';

import './App.css';

class App extends React.Component {
	state = {
		todos: []
	};

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(res => this.setState({ todos: res.data }));
	}

	// Toggle Complete
	toggleComplete = id => {
		console.log(id);
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
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
			this.setState({
				todos: [...this.state.todos.filter(todo => todo.id !== id)]
			})
		);
	};

	addTodo = title => {
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title,
				completed: false
			})
			.then(res => this.setState({ todos: [...this.state.todos, res.data] }));
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
						<Route path="/TodoListApp-ReactJS/about" component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;