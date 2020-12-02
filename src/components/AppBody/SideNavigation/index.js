import React from "react";
import {sideNavigationDropdownInit} from 'side-navigation-pattern/src/side-navigation-dropdown';

class Sidebar extends React.Component {
  constructor(props) {
    
    super(props);
    sideNavigationDropdownInit();

    
  }
  
  render() {
    
    
    return (
<nav aria-label="Animal" class="side-navigation heirarchy" data-analytics-location="Side Navigation">
    <div class="side-nav-title">Page Title</div>
    <a class="current-selection" aria-expanded="false" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="Choose a category">
        Choose a category
        <i aria-hidden="true" class="icon-chevron-down"></i>
    </a>
    <ul id="side-nav-list4" class="nav-list -level1" tab-index="-1">
    <li>
        <a class="selected nav-no-link" aria-current="page" href="index.html" data-analytics-type="Link" data-analytics-click="Page Title">
            Page Title
        </a>
        <ul class="nav-list -level2">
        <li>
            <a href="index.html" data-analytics-type="Link" data-analytics-click="Individual and Family">Individual and Family</a>
        </li>
        <li>
            <a href="index.html" data-analytics-type="Link" data-analytics-click="Small business">Small business</a>
        </li>
        <li>
            <a href="index.html" data-analytics-type="Link" data-analytics-click="Small business workforce">Small business workforce</a>
        </li>
        <li>
            <a href="index.html" data-analytics-type="Link" data-analytics-click="Large business">Large business</a>
        </li>
        </ul>
    </li>
    </ul>
</nav>
    );
  }
}


export default Sidebar;