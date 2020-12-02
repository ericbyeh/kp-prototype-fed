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

class GenericTemplate4 extends React.Component {
 
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
                <h3>Commission payment guidelines</h3>
                  <p>Put more money in your pocket by selling Kaiser Permanente group plans. With our affordable rates, wide variety of plans, and top-notch quality care, we're positioning you for success - while bringing better health and value to your clients.</p>
                    <p><a  href="#"> 2020 Group plan compensation schedule (PDF) </a> <br></br><br></br></p>
                    <h3>Agent of Record Information</h3>
                  <p>For our employer groups that are being serviced by a Consultant, an Agent of Record (AOR) form must be filled out and signed by the group. A Consultant is defined as a partner to the group who is not receiving any compensation directly from Kaiser Permanente. At this time, all AOR forms must have a wet signature on them to be accepted and processed.</p>
                    <p><a  href="#">Download a blank AOR form (PDF) </a><br></br><br></br></p>
                    <h3>5500 (Schedule A) Documents</h3>
                    <p> <strong>Broker Compensation Disclosure Reporting</strong></p>
                  <p>Broker Compensation Disclosure Reporting (5500 Central Team) within Customer & Member Services (C&MS) is responsible for producing various broker compensation disclosure reports as required by law.</p>
                    <p>ERISA 5500 Schedule A Reports can be requested from <a  href="#">5500-Central-Team@kp.org</a><br></br></p>

                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default GenericTemplate4;