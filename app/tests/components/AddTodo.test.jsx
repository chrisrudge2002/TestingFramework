const $ = require('jQuery');
const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

import {startAddTodo} from 'actions';
const {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should dispatch ADD_TODO action when valid todo text', () => {
		const todoText = 'Check mail';
		const action = startAddTodo(todoText);
		const spy = expect.createSpy();
		const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		const $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should not dispatch ADD_TODO action if no todo text entered', () => {
		const todoText = '';
		const spy = expect.createSpy();
		const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		const $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});
