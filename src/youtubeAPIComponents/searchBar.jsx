import React, { Component } from 'react'

class SearchBar extends Component {
    state={
        term:''
    };

    handleChange = (e) => {
        this.setState({ term: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        //TODO: make sure we call call back ffrom parent component
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(
            <div className="ui segment search-bar">
                <form className='ui form' onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <label>Video Search</label>
                        <input type="text" onChange={this.handleChange} value={this.state.term}/>
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;