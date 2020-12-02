import React from 'react';
import BreadCrumb from "../AppBody/BreadCrumbs";
import PrintUtility from "../AppBody/PrintUtility";
//Pattern code
//JSON data
//import forms from './FilterData/FormsData';


class Forms extends React.Component {
  render() {
    return (
<div className="main-body">
  <div className="main-body__container">
    <div className="rows">
      <div className="columns-10">
        <BreadCrumb BreadCrumbTextParentPage='Overview' BreadCrumbText1='Plans and coverage' BreadCrumbText2='Frequently Asked Questions'/>
      </div>
      <div className="columns-2">
        <PrintUtility/>
      </div>
    </div>
  </div>
  <div className="main-body__container">
    <div className="rows">
      <div className="columns-11--center">
      <h1 className= "styling-1"> Forms and documents</h1>
         <p>Vestibulum et tortor nisl. Morbi in nisl tincidunt <a hre="#" target="_blank"> Get a Quote</a>, consequat eros euismod, Applying for coverage feugiat lectus. Cras a dui nec nunc mattis fermentum Enrollment information.</p>
      </div>
    </div>
  </div>
  <div className="main-body__container--full-width">
    <div className="main-body__row">
      <div className="columns-12">
        <div className="filter-menu">
          <div className="filter-menu__group">
            <div className="filter-menu__group-inner">
              <div className="filter-menu__group-input--inline">
                <label htmlFor="filterOne">Region:</label>
                <div className="filter-menu__dropdown">
                  <select className="select-filter" id="filterOne">
                    <option value="">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="East Coast">Maryland / Virginia / Washington D. C.</option>
                    <option value="West Coast">Oregon / SW Washington / Washington</option>
                  </select>
                  <span aria-hidden="true" className="icon-chevron-down"></span>
                </div>
              </div>
              <div className="filter-menu__group-input--inline">
                <label htmlFor="filterOne">LINE OF BUSINESS:</label>
                <div className="filter-menu__dropdown">
                  <select className="select-filter" id="filterTwo">
                    <option value="">All</option>
                    <option value="Individual and family">Individual and family</option>
                    <option value="Small business">Small business</option>
                    <option value="Large business">Large business</option>
                    <option value="Broker">Broker</option>
                    <option value="Employer">Employer </option>
                  </select>
                  <span span aria-hidden="true" className="icon-chevron-down"></span>
                </div>
              </div>
              <div className="filter-menu__group-input--inline">
                <label htmlFor="filterTwo">TOPIC:</label>
                <div className="filter-menu__dropdown">
                  <select className="select-filter" id="filterThree">
                    <option value="">All</option>
                    <option value="Enrollment and change">Enrollment and change</option>
                    <option value="Support forms">Support Forms</option>
                    <option value="Other forms and support">Other forms and support </option>
                  </select> 
                  <span aria-hidden="true" className="icon-chevron-down"></span>
                </div>
              </div>
              <button className="filter-menu__button" data-analytics-type="button" data-analytics-click="Primary Button">Filter</button>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="main-body__container">
    <div className="filter-menu__row">
      <div className="filter-menu__notification">
        <div className="notification -system-error" data-analytics-location="Notification">
          <div className="-main">
            <span id="msg_error4" tabIndex="-1" className="screenreader-only">Error</span>
            <div aria-hidden="true" className="-icon"></div>
            <div className="-body">
              <p className="styling-6 -medium">You can include action buttons in notifications that can be retried or dismissed</p>
              <p>We were unable to determinin your location. The region has been defaulted to California. The region can be changed at any time.</p>
              <div className="-action-buttons -inline">
                <button className="link">Allow sharing location</button> <span className="divider-vertical-wrap"><i className="divider-vertical"></i></span> <button className="link">Dismiss</button>
              </div>
            </div>
          </div>
        </div>
      </div>   
      <div className="filter-menu__articles" id="filterMenuArticles"></div>
      <div className="columns-11--center"> 
        <h5 className="main-body__heading-5"> Additional information</h5>
        <ul className= "main-body__list--dolphin">
        <li>Cras et nulla venenatis, semper tellus in, malesuada justo. Cras in tortor porttitor, tincidunt ex sodales, malesuada eros.</li> 
        <li> Cras et nulla venenatis, semper tellus in, malesuada justo. Cras in tortor porttitor, tincidunt ex sodales, malesuada eros. Duis aliquet eu mi quis congue. Nam volutpat ullamcorper turpis eget facilisis. Donec nec massa mattis, dapibus sapien et, maximus lorem. Vestibulum ullamcorper, lorem eu aliquet volutpat, elit dui posuere diam.</li> 
        <li> Nulla condimentum suscipit viverra. Maecenas quam mauris, egestas et odio eu, cursus pretium turpis. Maecenas imperdiet, mauris et sollicitudin tincidunt, mauris tellus interdum urna, vitae feugiat massa est ac ipsum. Aenean sodales interdum congue. In eget eros nulla. Morbi rutrum elit in ex commodo viverra. Donec quis massa non odio hendrerit blandit eget nec sem.</li>
        <li> Cras et nulla venenatis, semper tellus in, malesuada justo. Cras in tortor porttitor, tincidunt ex sodales, malesuada eros.</li> 
        </ul>
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default Forms;

