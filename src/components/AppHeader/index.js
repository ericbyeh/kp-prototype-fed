import React from "react";
import {
  HashRouter,
  Link,
  BrowserRouter,
  Route
} from "react-router-dom";
import { navigationTrayPattern } from 'navigation-tray-pattern/src/navigation-tray-pattern';
import { initializeDeps } from 'navigation-tray-pattern/src/peer-dep'


class AppHeader extends React.Component {
  componentDidMount() {
    this._handleLoad();
  }

  _handleLoad() {
    initializeDeps();
    navigationTrayPattern({parentSelector: '.kp-header', parentHtml: '.kp-global-menu'});  
  }

  render() {
    return (
<header id="kp-header" class="kp-header theme-nt-mobile-dark-mode" data-analytics-location="kp-header">
<div class="kp-header__top-header">
  <div class="kp-header__rows-container">
    <div class="kp-header__util-links" data-analytics-location="utility-links">
      <div class="link-list__container">
        <ul class="link-list">
          <li><a href="#">Discover the KP difference</a></li>
        </ul>
      </div>
      <div class="navigational-picker region-body-picker">
        <div class="regionBodyPicker">
          <button aria-expanded="false" aria-haspopup="listbox" class="navigational-select-dropdown">
            <span class="screenreader-only">Your Region</span>
            <span class="navigational-select-dropdown-value">N. California</span>
            <i aria-hidden="true" class="icon-chevron-down"></i>
          </button>
          <ul class="navigational-select-dropdown__list" role="listbox" data-analytics-location="Region Picker">
            <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="California" tabindex="-1">
              <a href="/california-ste" data-analytics-type="link" data-analytics-click="California">California</a>
            </li>
            <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="Colorado - D/B/N/M" tabindex="-1">
              <a href="https://healthy.kaiserpermanente.org/" data-analytics-type="link" data-analytics-click="Colorado">Colorado</a>
            </li>
            <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="Georgia" tabindex="-1">
              <a href="https://healthy.kaiserpermanente.org/" data-analytics-type="link" data-analytics-click="Georgia">Georgia</a>
            </li>
            <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="Hawaii" tabindex="-1">
              <a href="#" data-analytics-type="link" data-analytics-click="Hawaii">Hawaii</a>
            </li>
            <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="Md. / Va. / D.C." tabindex="-1">
              <a href="#" data-analytics-type="link" data-analytics-click="Md. / Va. / D.C.">Maryland / Virginia / Washington, D.C.</a>
            </li>
            <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="Ore. / Wash." tabindex="-1">
              <a href="#" data-analytics-type="link" data-analytics-click="Ore. / Wash.">Oregon / Washington</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="link-list__container">
        <ul class="link-list">
          <li><a href="#">Register</a></li>
        </ul>
      </div>
    </div>
    <a href="/" class="kp-header__branding" id="accessCare" data-analytics-type="image" data-analytics-click="kp-logo">
      <div class="primary screen-only">
        <img className="logo-long" src="../logo.svg" alt="kp-logo" />
        <img className="logo-short" src="../kp-icon.svg" alt="kp-logo" />
        <img className="logo-icon" src="../KPLogoIconBlue.svg" alt="kp-logo" />
      </div>
      <span class="screenreader-only" lang="en-US">Kaiser Permanente Home</span>
    </a>
    <div class="kp-header__mobile-buttons">
      <button class="-tertiary button mobile-search-button" id="mobile-search-button" aria-labelledby="navigation-search-text" data-analytics-location="mobile-menu-button">
        <span id="navigation-search-text" class="screenreader-only">Navigation Menu - Opens a Simulated Dialog</span>
        <i class="icon-search icon-md"></i>
      </button>
      <button class="-tertiary button mobile-menu-trigger-open" aria-labelledby="mobile-menu-text-open">
        <span id="mobile-menu-text-open" class="screenreader-only">
          Button Open - press enter or select to open global menu
        </span>
        <i class="icon-menu icon-md"></i>
      </button>
    </div>

    <div class="kp-header__component-container">
      <div id="signonheader" class="kp-header__signon-container ng-scope" get-kpa-app-name="Sign On Header">
        <button class="button" data-analytics-type="button" data-analytics-click="Primary Button">
        Sign on
        </button>
      </div>
    </div>
  </div>
</div>
  
<div class="kp-global-menu" role="region" id="kp-global-menu">
  <div class="kp-global-menu__inner">
    <div class="kp-global-menu__container">
      <div class="kp-global-menu__mobile-buttons">
        <div class="kp-global-menu__mobile-buttons__inner">
          <button class="mobile-menu-button-close -tertiary" aria-labelledby="navigation-menu-close-text-close">
            <span id="navigation-menu-close-text-close" class="screenreader-only">
              Button close - press enter or select to close menu
            </span>
            <i class="icon-close"></i>
          </button>
        </div>
      </div>

      <div class="kp-global-menu__navigation-container navigation-tray-pattern">
        <nav role="navigation" class="" aria-label="global" id="logged_out_topnav">
          <ul class="kp-global-menu__primary-links-list unstyled-list">
            <li class="kp-global-menu__menu-item">
              <a href="http://kp.org" class="kp-global-menu__menu-item__link">Overview</a>
            </li>
            <li class="kp-global-menu__menu-item kp-global-menu__menu-item__tray-menu">
              <a href="kp.org" class="kp-global-menu__menu-item__link">Broker</a>
              <div class="tray-menu sub-menu">
                <div class="tray-menu__row">
                  <div class="tray-menu__row__column-3 tray-menu__row__title">
                    <p class="styling-3 tray-menu__heading">
                      Broker &amp; Agent Is a very long title look at this watch out
                    </p>
                  </div>
                  <div class="tray-menu__row__column-4 tray-menu__row__content">
                    <p class="styling-8 tray-menu__sub-heading">
                      Working with Us
                    </p>
                    <ul class="unstyled-list list-2-col tray-menu__list">
                      <li class="tray-menu__item"><a href="#">Page name Page name Page name Page name Page name Page name Page name Page name Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                    </ul>
                  </div>
                  <div class="tray-menu__row__column-2 tray-menu__row__content">
                    <p class="styling-8 tray-menu__sub-heading">
                      Working Title
                    </p>
                    <ul class="unstyled-list tray-menu__list">
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                    </ul>
                  </div>
                  <div class="tray-menu__row__column-2 tray-menu__row__content">
                    <p class="styling-8 tray-menu__sub-heading">
                      Broker Tools and Resources
                    </p>
                    <ul class="tray-menu__list">
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                      <li class="tray-menu__item"><a href="#">Page name</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="kp-global-menu__menu-item">
              <a href="kp.org" class="kp-global-menu__menu-item__link">Employer</a>
              <ul class="secondary-menu sub-menu">
                <li class="sub-menu__item"><a href="#">Page name</a></li>
                <li class="sub-menu__item"><a href="#">Page name</a></li>
                <li class="sub-menu__item"><a href="#">Page name</a></li>
                <li class="sub-menu__item"><a href="#">Page name</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div class="peripheral-content">
        <div class="peripheral-content__device">
          <div class="peripheral-content__device__buttons">
            <button class="button" data-analytics-type="button" data-analytics-click="Primary Button">Sign in to access care</button>
            <hr></hr>
            <button class="button -tertiary" data-analytics-type="button" data-analytics-click="Primary Button">Español</button>
          </div>
          <div class="navigational-picker region-picker">
            <div class="regionPicker">
              <button aria-expanded="false" aria-haspopup="listbox" class="navigational-select-dropdown"><span class="screenreader-only">Your Region</span> <span class="navigational-select-dropdown-value">N. California</span> <i aria-hidden="true" class="icon-chevron-down"></i></button>
              <ul class="navigational-select-dropdown__list" data-analytics-location="Region Picker" role="listbox">
                <li aria-selected="false" class="navigational-select-value region-select-value" data-value="N. California" tabindex="-1">
                  <a data-analytics-click="N. California" data-analytics-type="link" href="#">California - Northern</a>
                </li>
                <li aria-selected="false" class="navigational-select-value region-select-value" data-value="S. California" tabindex="-1">
                  <a data-analytics-click="S. California" data-analytics-type="link" href="#">California - Southern</a>
                </li>
                <li aria-selected="false" class="navigational-select-value region-select-value" data-value="Colorado - D/B/N/M" tabindex="-1">
                  <a data-analytics-click="Colorado - D/B/N/M" data-analytics-type="link" href="#">Colorado - Denver / Boulder / Northern / Mountain areas</a>
                </li>
                <li aria-selected="false" class="navigational-select-value region-select-value" data-value="S. Colorado" tabindex="-1">
                  <a data-analytics-click="S. Colorado" data-analytics-type="link" href="#">Colorado - Southern</a>
                </li>
                <li aria-selected="false" class="navigational-select-value region-select-value" data-value="Georgia" tabindex="-1">
                  <a data-analytics-click="Georgia" data-analytics-type="link">Georgia</a>
                </li>
                <li aria-selected="false" class="navigational-select-value region-select-value" data-value="Hawaii" tabindex="-1">
                  <a data-analytics-click="Hawaii" data-analytics-type="link" href="#">Hawaii</a>
                </li>
                <li aria-selected="false" class="navigational-select-value region-select-value" data-value="Md. / Va. / D.C." tabindex="-1">
                  <a data-analytics-click="Md. / Va. / D.C." data-analytics-type="link" href="#">Maryland / Virginia / Washington, D.C.</a>
                </li>
                <li aria-selected="false" class="navigational-select-value region-select-value" data-value="Ore. / Wash." tabindex="-1">
                  <a data-analytics-click="Ore. / Wash." data-analytics-type="link" href="#">Oregon / Washington</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="peripheral-content__desktop">
          <button class="peripheral-content__desktop__search-button desktop-search-button search-bar-icon icon-search" id="site-search-button" data-track-link="Search Start" data-track-category="Search Global Header" aria-labelledby="search-btn-text-id">
            <span class="search-btn-text " id="search-btn-text-id">Search</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="kp-header__search-container">
  <div class="autocomplete-container">
  <div class="autocomplete-search -global hidden" data-recommended-links="true" data-recommended-links-url="" data-recommended-links-announcement="displaying recommended links" data-recommended-links-tracking="Recommended Links" data-search-suggestions="true" data-search-suggestions-url="" data-search-suggestions-announcement="displaying search suggestions" data-search-suggestions-tracking="Suggested Queries" data-reset-announcement="no recommendations or suggestions" data-search-result-icon="false" data-min-characters="1" data-max-results="50" data-analytics-location="Autocomplete Search">
  <button class="autocomplete-search__close icon-close" aria-label="Cancel"></button>
  <form class="autocomplete-search__form" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" method="get" onsubmit="return false" action="">
    <label class="autocomplete-search__label screenreader-only" aria-hidden="true">Search by drug name, type and use the arrow keys, or swipe forward, to browse available matches</label>
    <div class="autocomplete-search__combobox clear-input-field">
      <div class="container">
        <i class="icon-search" aria-hidden="true"></i>
        <input class="autocomplete-search__input clear-input-textbox" type="search" />
      </div>
      <div class="container container--global">
        <div class="autocomplete-search__listbox -hidden"></div>
        <button class="clear-input-button" aria-label="clear this input field" type="button"><span aria-hidden="true" class="close-icon">X</span></button>
      </div>
    </div>  
    <button class="autocomplete-search__submit button" aria-label="Submit Search" type="submit" data-analytics-type="button" data-analytics-click="Search"><i class="icon-search" aria-hidden="true"></i>Search</button>  
  </form>
  <div class="autocomplete-search__manual" aria-hidden="true">
    <p>Popular short links</p>
  </div>
  <div class="autocomplete-search__manual-search" aria-hidden="true">
    <p>Search Suggestions</p>
  </div>
  </div>
  </div>
</div>
</header>
   );
  };
};

export default AppHeader;
