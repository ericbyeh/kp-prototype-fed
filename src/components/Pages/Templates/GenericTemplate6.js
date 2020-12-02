/*eslint-disable */
import React from 'react';

//Patterns
import BreadCrumb from "../../AppBody/BreadCrumbs";
import ContentToggle2 from '../../AppBody/ContentToggle/indexExtra';
import PrintUtility from "../../AppBody/PrintUtility";
import SocialShare from "../../AppBody/SocialShare";
import Sidebar from '../../AppBody/SideNavigation';
import RegionPicker from "../../AppBody/RegionPicker";
import TableComponent from '../../AppBody/Table';

class GenericTemplate6 extends React.Component {
 
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
        <div className="columns-2"></div>
        <div className="columns-10">
          <div className="rows">
            <div className="columns-10">
              <h1 class= "styling-1"> Brokers new to Kaiser Permanente </h1>
              <h4>Explore new sales opportunities that can turn prospects into clients. With medical commissions for large and small groups, plus rewards for all your lines of business, you can increase your earnings potential — while bringing better health and value to your clients.</h4>
              <div class="navigational-picker region-body-picker">
                <div class="regionBodyPicker">
                  <button aria-expanded="false" aria-haspopup="listbox" class="navigational-select-dropdown">
                    <span class="screenreader-only">Your Region</span>
                    <span class="navigational-select-dropdown-value">Hawaii</span>
                    <i aria-hidden="true" class="icon-chevron-down"></i>
                  </button>
                  <ul class="navigational-select-dropdown__list" role="listbox" data-analytics-location="Region Picker">
                    <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="N. California" tabindex="-1">
                      <a href="#" data-analytics-type="link" data-analytics-click="N. California">California - Northern</a>
                    </li>
                    <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="S. California" tabindex="-1">
                      <a href="#" data-analytics-type="link" data-analytics-click="S. California">California - Southern</a>
                    </li>
                    <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="Colorado - D/B/N/M" tabindex="-1">
                      <a href="#" data-analytics-type="link" data-analytics-click="Colorado - D/B/N/M">Colorado - Denver / Boulder / Northern / Mountain areas</a>
                    </li>
                    <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="S. Colorado" tabindex="-1">
                      <a href="#" data-analytics-type="link" data-analytics-click="S. Colorado">Colorado - Southern</a>
                    </li>
                    <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="Georgia" tabindex="-1">
                      <a hhref="#" data-analytics-type="link" data-analytics-click="Georgia">Georgia</a>
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
            </div>              
            <div className="columns-10">
              <h3>Get started with our Broker Essentials Onboarding Guide</h3>
              <p>Review our <a href="#">  Broker Essentials Onboarding Guide</a> to familiarize yourself with Kaiser Permanente and the resources you need to grow your business.</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default GenericTemplate6;