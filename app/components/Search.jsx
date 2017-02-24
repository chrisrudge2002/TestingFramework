import {connect} from 'react-redux';
import React from 'react';

import {setSearchText, toggleShowCompleted} from 'actions';

export class Search extends React.Component {
	render() {
		const {dispatch, searchText, showCompleted} = this.props;

		return (
			<div className="container__header">
				<div>
					<input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
						const searchTxt = this.refs.searchText.value;
						dispatch(setSearchText(searchTxt));
					}}
					/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
							dispatch(toggleShowCompleted());
						}}
						/>
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {
			searchText: state.searchText,
			showCompleted: state.showCompleted
		};
	}
)(Search);
