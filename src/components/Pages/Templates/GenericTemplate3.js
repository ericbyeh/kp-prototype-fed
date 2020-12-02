/*eslint-disable */
import React from 'react';

//Patterns
import BreadCrumb from "../../AppBody/BreadCrumbs";
import ContentToggle2 from '../../AppBody/ContentToggle/indexExtra';
import PrintUtility from "../../AppBody/PrintUtility";
import SocialShare from "../../AppBody/SocialShare";
import Sidebar from '../../AppBody/SideNavigation';
import RegionPicker from "../../AppBody/RegionPicker";

class GenericTemplate3 extends React.Component {
 
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
                  <p class= "styling-4">Explore new sales opportunities that can turn prospects into clients. With medical commissions for large and small groups, plus rewards for all your lines of business, you can increase your earnings potential — while bringing better health and value to your clients.</p>
                  <RegionPicker/>
                </div>              
                <div className="columns-10">
                  <div class="content-toggle -variation-1" data-behavior="accordion" data-analytics-location="Content Toggle">
                    <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">Large Business</span></a>
                    <div class="content">
                      <h3>Medical payouts</h3>
                      <p>All new and renewing commissionable large groups (101+ full-time equivalent employees)1 in California are paid commissions based on a percent of the premium in accordance with your broker agreement and agreed upon by the policy holder.</p>
                      <table class="data-table table--grey-border">
            <caption class="styling-5 --dolphin --light">
              Employee Table
            </caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Salary ($)</th>
                <th scope="col">Extension</th>
                <th scope="col" data-format="date">Start Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><span class="mobile-only table-head">Name</span>Rob Derhak</th>
                <td><span class="mobile-only table-head">Salary ($)</span>74,500</td>
                <td><span class="mobile-only table-head">Extension</span>1159</td>
                <td data-date="11/17/1998"><span class="mobile-only table-head">Start Date</span>11/17/98</td>
              </tr>
              <tr>
                <th><span class="mobile-only table-head">Name</span>Chuck Garvey</th>
                <td><span class="mobile-only table-head">Salary ($)</span>96,000</td>
                <td><span class="mobile-only table-head">Extension</span>1056</td>
                <td data-date="11/21/1998"><span class="mobile-only table-head">Start Date</span>11/21/98</td>
              </tr>
              <tr>
                <th><span class="mobile-only table-head">Name</span>Al Schnier</th>
                <td><span class="mobile-only table-head">Salary ($)</span>92,000</td>
                <td><span class="mobile-only table-head">Extension</span>4653</td>
                <td data-date="06/07/2008"><span class="mobile-only table-head">Start Date</span>06/07/08</td>
              </tr>
              <tr>
                <th><span class="mobile-only table-head">Name</span>Vinnie Amico</th>
                <td><span class="mobile-only table-head">Salary ($)</span>47,000</td>
                <td><span class="mobile-only table-head">Extension</span>9844</td>
                <td data-date="12/16/2014"><span class="mobile-only table-head">Start Date</span>12/16/14</td>
              </tr>
              <tr>
                <th><span class="mobile-only table-head">Name</span>Jim Loughlin</th>
                <td><span class="mobile-only table-head">Salary ($)</span>55,000</td>
                <td><span class="mobile-only table-head">Extension</span>7745</td>
                <td data-date="04/20/2000"><span class="mobile-only table-head">Start Date</span>04/20/00</td>
              </tr>
            </tbody>
          </table>         
                <div className="columns-10">
                <p class="-dolphin"> <br></br>If you have questions, please email the Broker Services Team at KPIF@kp.org or call 1-844-394-3978.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3> Important information about our Medicare plans</h3>
                  <p>Kaiser Permanente Senior Advantage, our Medicare plan, is available to individuals and groups in California. However, unless you have a contract with Kaiser Permanente that explicitly authorizes you to sell our Medicare products, brokers aren’t authorized to market or sell our Medicare plan or products, and Kaiser Permanente doesn’t pay commissions for Medicare individual or group sales. If your clients request Medicare information, contact your Kaiser Permanente account representative.</p>

                </div>
                    </div>
                    <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">Rewards</span></a>
                    <div class="content">
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">Rules and conditions</span></a>
                    <div class="content">
                    <p>The best place to start when deciding to use a Content Toggle is to evaluate common and critical use cases for your audience. Content Toggles are more suitable when people need only a few key pieces of content on a single page. By hiding most of the content, users can spend their time more efficiently focused on the few topics that matter. Understanding people’s scenarios will help you determine whether or not Content Toggles are appropriate.</p>
                    <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">When to to use a Content Toggle?</span></a>
                    <div class="content">
                    <p>The best place to start when deciding to use a Content Toggle is to evaluate common and critical use cases for your audience. Content Toggles are more suitable when people need only a few key pieces of content on a single page. By hiding most of the content, users can spend their time more efficiently focused on the few topics that matter. Understanding people’s scenarios will help you determine whether or not Content Toggles are appropriate.</p>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="columns-10">
                  <div class="content-toggle -variation-1" data-behavior="accordion" data-analytics-location="Content Toggle">
                    <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">Small group</span></a>
                    <div class="content">
                      <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">Rewards</span></a>
                    <div class="content">
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">Rules and conditions</span></a>
                    <div class="content">
                    <p>The best place to start when deciding to use a Content Toggle is to evaluate common and critical use cases for your audience. Content Toggles are more suitable when people need only a few key pieces of content on a single page. By hiding most of the content, users can spend their time more efficiently focused on the few topics that matter. Understanding people’s scenarios will help you determine whether or not Content Toggles are appropriate.</p>
                    <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">When to to use a Content Toggle?</span></a>
                    <div class="content">
                    <p>The best place to start when deciding to use a Content Toggle is to evaluate common and critical use cases for your audience. Content Toggles are more suitable when people need only a few key pieces of content on a single page. By hiding most of the content, users can spend their time more efficiently focused on the few topics that matter. Understanding people’s scenarios will help you determine whether or not Content Toggles are appropriate.</p>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default GenericTemplate3;