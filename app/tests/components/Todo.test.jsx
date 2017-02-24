const $ = require('jQuery');
const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

import {startToggleTodo} from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});

	it('should dispatch UPDATE_TODO action on click', () => {
		const todoData = {
			id: 199,
			text: 'Write todo.test.jsx test',
			completed: true
		};
		const action = startToggleTodo(todoData.id, !todoData.completed);

		const spy = expect.createSpy();
		const todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
		const $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});
});
