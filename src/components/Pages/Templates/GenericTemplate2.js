/*eslint-disable */
import React from 'react';

//Patterns
import BreadCrumb from "../../AppBody/BreadCrumbs";
import PrintUtility from "../../AppBody/PrintUtility";
import RegionPicker from "../../AppBody/RegionPicker";

class GenericTemplate2 extends React.Component {

  render() {
    return (
      <div className="main-body">
        <div className="main-body__container">
          <div className="row">
            <div className="columns-10">
              <BreadCrumb BreadCrumbTextParentPage='Overview' BreadCrumbText1='Link 1' BreadCrumbText2='Link 2'/>
            </div>
            <div className="columns-2">
              <PrintUtility/>
            </div>
          </div>
          <div className="rows">
            <div className="columns-2">
            </div>
            <div className="columns-10">
              <div className="rows">
              <div className="columns-10">
                <h1 class= "styling-1"> Compensation</h1>
                <p>Explore new sales opportunities that can turn prospects into clients. With medical commissions for large and small groups, plus rewards for all your lines of business, you can increase your earnings potential — while bringing better health and value to your clients.</p>
                <RegionPicker/>
                <hr></hr>
              </div>                
              <div className="columns-10">
                <h3>Signin to view more</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button class="button" data-analytics-type="button" data-analytics-click="Primary Button">Primary Button</button> <button class="button -inverted" data-analytics-type="button" data-analytics-click="Secondary Button">Secondary Button</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenericTemplate2;