import React, { Component } from 'react';
//above is same as:
//const Component = React.Component

//functional component:
// const SearchBar = () => {
// 	return <input />
// }

//class-based component: ---> Only class-based components have state
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' }; //only class-based components have state
	}
	render() { //define render method
		return (
			<div className="search-bar">
				<input
					value = {this.state.term} 
					onChange={event => this.onInputChange(event.target.value)} />
					
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term: term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar; 


