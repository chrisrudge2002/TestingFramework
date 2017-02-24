import React from 'react';
import * as Redux from 'react-redux';

import AddTodo from 'AddTodo';
import Search from 'Search';
import {startLogout} from 'actions';
import TodoList from 'TodoList';

export class TodoApp extends React.Component {
	constructor() {
		super();
		this.onLogout = this.onLogout.bind(this);
	}
	onLogout(e) {
		const {dispatch} = this.props;
		e.preventDefault();

		dispatch(startLogout());
	}
	render() {
		return (
			<div>
				<div className="page-actions">
					<a href="#" onClick={this.onLogout}>Logout</a>
				</div>

				<h1 className="page-title">Todo App</h1>

				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<Search/>
							<TodoList/>
							<AddTodo/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Redux.connect()(TodoApp);
