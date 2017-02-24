const $ = require('jQuery');
const expect = require('expect');
const {Provider} = require('react-redux');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodo, {Todo} from 'Todo';
import ConnectedTodoList, {TodoList} from 'TodoList';

describe('TodoList', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo component for each todo item', () => {
		const todos = [{
			id: 1,
			text: 'Do something',
			completed: false,
			completedAt: undefined,
			createdAt: 500
		}, {
			id: 2,
			text: 'Check mail',
			completed: false,
			completedAt: undefined,
			createdAt: 500
		}];
		const store = configure({
			todos
		});
		const provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList/>
			</Provider>
		);
		const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

		expect(todosComponents.length).toBe(todos.length);
	});

	it('should render empty message if no todos', () => {
		const todos = [];
		const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		const $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container__message').length).toBe(1);
	});
});
