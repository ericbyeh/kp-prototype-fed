import React from 'react'

class AutoCompleteSearch extends React.Component {

  render() {
    return (
      <div id="search-container">
      <div className="autocomplete-container">
        <div className="autocomplete-search -global hidden" data-analytics-location="Autocomplete Search" data-recommended-links="true" data-recommended-links-announcement="displaying recommended links" data-recommended-links-tracking="Recommended Links" data-recommended-links-url="//api.myjson.com/bins/plbbo" data-reset-announcement="no recommendations or suggestions" data-search-suggestions="true" data-search-suggestions-announcement="displaying search suggestions" data-search-suggestions-tracking="Suggested Queries" data-search-suggestions-url="//api.myjson.com/bins/159prk">
          <button aria-label="Cancel" className="autocomplete-search__close icon-close" data-as-close="#autocomplete-search-0" data-open="#kp-global-menu"></button>
          <form action="" autoComplete="off" className="autocomplete-search__form" method="get" onSubmit="return false" spellCheck="false">
            <label aria-hidden="true" className="autocomplete-search__label screenreader-only">Search by drug name, type and use the arrow keys, or swipe forward, to browse available matches</label>
            <div className="autocomplete-search__combobox clear-input-field">
              <div className="container">
                <i aria-hidden="true" className="icon-search"></i> 
                <input className="autocomplete-search__input clear-input-textbox" type="search"/>
              </div>
              <div className="container container--global">
                <div className="autocomplete-search__listbox -hidden"></div><button aria-label="clear this input field" className="clear-input-button" type="button"><span aria-hidden="true" className="close-icon">X</span></button>
              </div>
            </div><button aria-label="Submit Search" className="autocomplete-search__submit button" data-analytics-click="Search" data-analytics-type="button" type="submit"><i aria-hidden="true" className="icon-search"></i>Search</button>
          </form>
          <div aria-hidden="true" className="autocomplete-search__manual"></div>
          <div aria-hidden="true" className="autocomplete-search__manual-search"></div>
        </div>
      </div>
    </div>
    );
  }
}

export default AutoCompleteSearch;



