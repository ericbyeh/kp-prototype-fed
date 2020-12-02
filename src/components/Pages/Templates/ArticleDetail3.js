/*eslint-disable */
import React from 'react';

//Patterns
import BreadCrumb from "../../AppBody/BreadCrumbs";
import PrintUtility from "../../AppBody/PrintUtility";
import SocialShare from "../../AppBody/SocialShare";
import Sidebar from '../../AppBody/SideNavigation';
import RegionPicker from "../../AppBody/RegionPicker";

class ArticleDetail3 extends React.Component {
 
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
                    <h1 class= "styling-1"> Enrollment tools</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <RegionPicker/>
                    <h2 class= "styling-2"> New group forms</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="rows">
                      <div className="columns-6">
                        <h3 class= "styling-3"> Oregon</h3>
                        <hr></hr>
                        <ul class="link-list">                    
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SBG_OR_Employer_Application_2020.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="2020 Oregon Small Group Employer Application&nbsp;(PDF)"><span class="kpTooltipLink">2020 Oregon Small Group Employer Application</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_1'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_1">&nbsp;(PDF)</span></a> </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SB_OR_Employer_Application.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="2019 Oregon Small Group Employer Application&nbsp;(PDF)"><span class="kpTooltipLink">2019 Oregon Small Group Employer Application</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_2'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_2">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SBG_OR_Employee_Enrollment_Change_Form_2020.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="2020 Oregon Small Group Employee Application&nbsp;(PDF)"><span class="kpTooltipLink">2020 Oregon Small Group Employee Application</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_3'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_3">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SB_OR_Employee_Enrollment_Change_Form.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="2019 Oregon Small Group Employee Application&nbsp;(PDF)"><span class="kpTooltipLink">2019 Oregon Small Group Employee Application</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_4'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_4">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_OR_Additional_Dependent_Form_2020.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="2020 Oregon Employee Additional Dependent form&nbsp;(PDF)"><span class="kpTooltipLink">2020 Oregon Employee Additional Dependent form</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_5'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_5">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_OR_Additional_Dependent_Form.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="2019 Oregon Employee Additional Dependent form&nbsp;(PDF)"><span class="kpTooltipLink">2019 Oregon Employee Additional Dependent form</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_6'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_6">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SB_OR_Census_Form.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="Census form&nbsp;(PDF)"><span class="kpTooltipLink">Census form</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_7'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_7">&nbsp;(PDF)</span></a> </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SB_New_Sales_Business_Verification.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="Business Verification Statement&nbsp;(PDF)"><span class="kpTooltipLink">Business Verification Statement</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_8'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_8">&nbsp;(PDF)</span></a> </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_OR_SBG_New_Sales_Standard_Group_Profile_Form.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="2019 Oregon New Group profile form&nbsp;(PDF)"><span class="kpTooltipLink">2019 Oregon New Group profile form</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_9'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_9">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SBG_New_Group_checklist.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="New Group Checklist&nbsp;(PDF)"><span class="kpTooltipLink">New Group Checklist</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_10'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_10">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SBG_OR_Employer_Attestation_Declination_of_Coverage.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="Oregon Employer Attestation Declination of Coverage&nbsp;(PDF)"><span class="kpTooltipLink">Oregon Employer Attestation Declination of Coverage</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_11'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_11">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SBG_OR_Employee_Declination_of_Coverage.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="Oregon Employee Declination of Coverage&nbsp;(PDF)"><span class="kpTooltipLink">Oregon Employee Declination of Coverage</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_12'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_12">&nbsp;(PDF)</span></a>
                          </li>
                        </ul>
                      </div>
                      <div className="columns-6">
                        <h3 class= "styling-3"> Washington</h3>
                        <hr></hr>
                        <ul class="link-list">                    
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SBG_WA_Employer_Application_2020.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="2020 Washington Small Group Employer Application&nbsp;(PDF)"><span class="kpTooltipLink">2020 Washington Small Group Employer Application</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_13'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_13">&nbsp;(PDF)</span></a> </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SB_WA_Employer_Application.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="Employer Application for 2019 plan year&nbsp;(PDF)"><span class="kpTooltipLink">Employer Application for 2019 plan year</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_14'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_14">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SBG_WA_Employee_Enrollment_Change_Form_2020.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="2020 Washington Small Group Employee Application&nbsp;(PDF)"><span class="kpTooltipLink">2020 Washington Small Group Employee Application</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_15'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_15">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SB_WA_Employee_Enrollment_Change_Form.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="2019 Washington Small Group Employee Application&nbsp;(PDF)"><span class="kpTooltipLink">2019 Washington Small Group Employee Application</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_16'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_16">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SBG_WA_Additional_Dependent_Form_2020.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="2020 Washington Employee Additional Dependent form&nbsp;(PDF)"><span class="kpTooltipLink">2020 Washington Employee Additional Dependent form</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_17'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_17">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SB_WA_Additional_Dependent_Form.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="2019 Washington Employee Additional Dependent form&nbsp;(PDF)"><span class="kpTooltipLink">2019 Washington Employee Additional Dependent form</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_18'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_18">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SB_WA_Census_Form.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="Census form&nbsp;(PDF)"><span class="kpTooltipLink">Census form</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_19'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_19">&nbsp;(PDF)</span></a> </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SB_New_Sales_Business_Verification.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="Business Verification Statement&nbsp;(PDF)"><span class="kpTooltipLink">Business Verification Statement</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_20'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_20">&nbsp;(PDF)</span></a> </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SBG_New_Group_checklist.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="New Group Checklist&nbsp;(PDF)"><span class="kpTooltipLink">New Group Checklist</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_21'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_21">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SBG_WA_Employer_Attestation_Declination_of_Coverage.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="Washington Employer Attestation Declination of Coverage&nbsp;(PDF)"><span class="kpTooltipLink">Washington Employer Attestation Declination of Coverage</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_22'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_22">&nbsp;(PDF)</span></a>
                          </li>
                          <li>
                            <a lang="en" class="kpTooltipAnchor" href="/static/bcssp/pdfs/shared/nw/ever/KP_NW_SBG_WA_Employee_Declination_of_Coverage.pdf" data-analytics-feature="bcssp" data-analytics-location="kporg:bcssp:Broker:Selling plans:small-business:Enrollment tools" data-analytics-type="pdf" data-analytics-click="Washington Employee Declination of Coverage&nbsp;(PDF)"><span class="kpTooltipLink">Washington Employee Declination of Coverage</span><span class="kpTooltip" onmouseover="dojo.require('kpdj.Tooltip'); if(!this.tooltip){this.tooltip = new kpdj.Tooltip({connectId:['02C125C0-69D4-11E4-B7B1-95F6392AB8B9_23'], tooltipType:'pdf'});} this.tooltip.open();" id="02C125C0-69D4-11E4-B7B1-95F6392AB8B9_23">&nbsp;(PDF)</span></a>
                          </li>
                        </ul>
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

export default ArticleDetail3;