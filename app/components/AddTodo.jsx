import {connect} from 'react-redux';
import React from 'react';

import {startAddTodo} from 'actions';

export class AddTodo extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();

		const {dispatch} = this.props;
		const todoText = this.refs.todoText.value;

		if (todoText.length > 0) {
			this.refs.todoText.value = '';
			dispatch(startAddTodo(todoText));
		} else {
			this.refs.todoText.focus();
		}
	}
	render() {
		return (
			<div className="container__footer">
				<form ref="form" onSubmit={this.handleSubmit} className="add-todo-form">
					<input type="text" ref="todoText" placeholder="What do you need to do?"/>
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		);
	}
}

export default connect()(AddTodo);
