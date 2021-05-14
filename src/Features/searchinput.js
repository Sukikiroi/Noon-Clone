import React, { Component } from "react";
import SearchInput, { createFilter } from "react-search-input";
import Productcard from "../Components/Cards for Desktop/Productcard";
import emails from "./mails";

const KEYS_TO_FILTERS = ["company", "ticker", "timeElapsed"];

class Searchinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  render() {
    const filteredEmails = emails.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredEmails.map((email) => {
          return <Productcard />;
        })}
      </div>
    );
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
}
export default Searchinput;
