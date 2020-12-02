import React from 'react';
import BreadCrumb from "../AppBody/BreadCrumbs";
import PrintUtility from "../AppBody/PrintUtility";
//Patterns
import filterMenu from 'filter-menu-pattern/src/filter-menu';
//JSON data
import forms from './FilterData/PlansData';


class Plans extends React.Component {
  componentDidMount() {
    this._handleLoad();
  }

  _handleLoad() {
    filterMenu(forms);
  }
 

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
        <h1 className= "styling-1"> Small Business plans</h1>
        <p>Vestibulum et tortor nisl. Morbi in nisl tincidunt <a hre="#" target="_blank"> Get a Quote</a>, consequat eros euismod, Applying for coverage feugiat lectus. Cras a dui nec nunc mattis fermentum Enrollment information.</p>
      </div>
    </div>
  </div>
  <div className="main-body__container--full-width">
    <div className="rows">
      <div className="columns-12">
        <div className="filter-menu">
          <div className="filter-menu__group">
          <div className="rows">

            <div className="filter-menu__group-inner--large-padding">
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
                <label htmlFor="filterOne">YEAR:</label>
                <div className="filter-menu__dropdown">
                  <select className="select-filter" id="filterTwo">
                    <option value="">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                  </select>
                  <span aria-hidden="true" className="icon-chevron-down"></span>
                </div>
              </div>
              <div className="filter-menu__group-input--inline">
                <label htmlFor="filterTwo">TOPIC:</label>
                <div className="filter-menu__dropdown">
                  <select className="select-filter" id="filterThree">
                    <option value="">All</option>
                    <option value="Platinum 70 HMO">Platinum 70 HMO</option>
                    <option value="Plan - A">Plan - A</option>
                    <option value="Plan - B">Plan - B </option>
                  </select> 
                  <span aria-hidden="true" className="icon-chevron-down"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div className="main-body__container">
    <div className="filter-menu__row">
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

export default Plans;

