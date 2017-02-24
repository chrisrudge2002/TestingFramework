import {connect} from 'react-redux';
const moment = require('moment');
import React from 'react';

import {startToggleTodo} from 'actions';

export class Todo extends React.Component {
	render() {
		const {id, text, completed, createdAt, completedAt, dispatch} = this.props;
		const todoClassName = completed ? 'todo todo-completed' : 'todo';
		const renderDate = () => {
			let message = 'Created ';
			let timestamp = createdAt;

			if (completed) {
				message = 'Completed ';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do YYY @ h:mm a');
		};

		return (
			<div className={todoClassName} onClick={() => {dispatch(startToggleTodo(id, !completed));}}>
				<div>
					<input type="checkbox" checked={completed} readOnly ref="completed"/>
				</div>
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
			</div>
		);
	}
}

export default connect()(Todo)