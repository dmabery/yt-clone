import React from 'react';

class SearchBar extends React.Component {

    state = { term: ""};

    // event handler that sets search term
    onInputChange = (e) => {
        this.setState({ term: e.target.value })

    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);



    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form
                onSubmit={this.onFormSubmit}
                className="ui form"
                >
                    <div className="field">
                        <label>Search bar</label>
                        <input
                        type="text"
                        onChange={this.onInputChange}
                        value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;