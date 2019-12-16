import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		};
	};

	checked = e => {
		document.addEventListener(
			'mousedown',
			event => {
				if (event.detail > 1) event.preventDefault();
			},
			false
		);
		this.props.toggleComplete(Number(e.target.id));
	};

	render() {
		const { id, title, completed } = this.props.todo;

		return (
			<div style={this.getStyle()}>
				<input
					type="checkbox"
					checked={completed}
					onChange={this.props.toggleComplete.bind(this, id)}
					style={{ cursor: 'pointer' }}
				/>
				<span style={{ cursor: 'pointer' }} id={id} onClick={this.checked}>
					{' ' + title}
				</span>
				<button style={btnStyle} onClick={this.props.deleteItem.bind(this, id)}>
					X
				</button>
			</div>
		);
	}
}

// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired
};

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 8px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
};

export default TodoItem;
