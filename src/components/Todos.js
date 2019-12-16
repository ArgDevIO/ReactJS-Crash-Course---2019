import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
	render() {
		return this.props.todos.map(todo => (
			<TodoItem
				key={todo.id}
				todo={todo}
				completed={todo.completed}
				toggleComplete={this.props.toggleComplete}
				deleteItem={this.props.deleteItem}
			/>
		));
	}
}

// PropTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired
};

export default Todos;
