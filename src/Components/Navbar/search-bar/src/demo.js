import React from 'react';
import ReactDOM from 'react-dom';
import autoBind from 'react-autobind';

import Searchinput from './components/search-bar';
import styles from './demo.css';
import words from './words.json';

class Searchbar extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      suggestions: []
    };

    autoBind(this, 'handleChange', 'handleClear', 'handleSelection');
  }

  handleClear() {
    this.setState({
      suggestions: []
    });
  }

  handleChange(input) {
    this.setState({
      suggestions: words.filter(word => word.startsWith(input))
    });
  }

  handleSelection(value) {
    if (value) {
      console.info(`Selected "${value}"`);
    }
  }

  handleSearch(value) {
    if (value) {
      console.info(`Searching "${value}"`);
    }
  }

  suggestionRenderer(suggestion, searchTerm) {
    return (
      <span>
        <span>{searchTerm}</span>
        <strong>{suggestion.substr(searchTerm.length)}</strong>
      </span>
    );
  }

  render() {
    return (
      <Searchinput
        autoFocus
        renderClearButton
        renderSearchButton
        placeholder="select an SAT word"
        onChange={this.handleChange}
        onClear={this.handleClear}
        onSelection={this.handleSelection}
        onSearch={this.handleSearch}
        suggestions={this.state.suggestions}
        suggestionRenderer={this.suggestionRenderer}
        styles={styles}
      />
    );
  }
}
export default Searchbar;

