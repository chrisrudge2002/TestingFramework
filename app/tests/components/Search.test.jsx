const $ = require('jQuery');
const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

import {Search} from 'Search';

describe('Search', () => {
	it('should exist', () => {
		expect(Search).toExist();
	});

	it('should dispatch SET_SEARCH_TEXT action on input change', () => {
		const searchText = 'Dog';
		const action = {
			type: 'SET_SEARCH_TEXT',
			searchText
		};
		const spy = expect.createSpy();
		const search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);

		search.refs.searchText.value = searchText;
		TestUtils.Simulate.change(search.refs.searchText);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should dispatch TOGGLE_SHOW_COMPLETED action when checkbox checked', () => {
		const action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		};
		const spy = expect.createSpy();
		const search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);

		search.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(search.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(action);
	});
});
