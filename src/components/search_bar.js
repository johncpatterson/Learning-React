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
    const defaultSearchText = {
      term:'Search for any YouTube video... 📺'
    };
		this.state = defaultSearchText; //only class-based components have state
	}
  //clear default form text on form focus
  formOnFocus() {
    this.setState( { term:''} );
  }
  //add default form text on form blur
  formOnBlur() {
    this.setState( {term:'Search for any YouTube video... 📺'} );
  }

  onInputChange(term) {
		this.setState( {term: term} );
		this.props.onSearchTermChange(term);
	}

	render() { //define render method
		return (
			<div className="search-bar">
				<input
          onFocus={event => this.formOnFocus(event.target.value)}
          onBlur={event => this.formOnBlur(event.target.value)}
					value = {this.state.term} 
					onChange={event => this.onInputChange(event.target.value)} 
        />
			</div>
		);
	}

	
}

export default SearchBar; 


