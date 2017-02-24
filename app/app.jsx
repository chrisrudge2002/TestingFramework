import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import * as actions from 'actions';
import firebase from 'app/firebase/';
import Router from 'app/router/';

const store = require('configureStore').configure();

// Redirect based on auth status
firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(actions.login(user.uid));
		store.dispatch(actions.startAddTodos());
		hashHistory.push('/todos');
	} else {
		store.dispatch(actions.logout());
		hashHistory.push('/');
	}
});

// Load foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		{Router}
	</Provider>,
	document.getElementById('app')
);