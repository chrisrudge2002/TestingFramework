const $ = require('jQuery');
const expect = require('expect');
const {Provider} = require('react-redux');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const configureStore = require('configureStore');
import {TodoApp} from 'TodoApp';
import TodoList from 'TodoList';

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should render TodoList', () => {
		const store = configureStore.configure();
		const provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<TodoApp/>
			</Provider>
		);

		const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
		const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

		expect(todoList.length).toBe(1);
	});
});
