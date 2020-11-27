/*eslint-disable */
import React from 'react';

//Patterns
import BreadCrumb from "../../AppBody/BreadCrumbs";
import ContentToggle2 from '../../AppBody/ContentToggle/indexExtra';
import PrintUtility from "../../AppBody/PrintUtility";
import Sidebar from '../../AppBody/SideNavigation';
import RegionPicker from "../../AppBody/RegionPicker";

class GenericTemplate1 extends React.Component {
 
  render() {
    return (
      <div className="main-body">
        <div className="main-body__container">
          <div className="row">
            <div className="columns-10">
              <BreadCrumb BreadCrumbTextParentPage='Marketing and sales material' BreadCrumbText1='Sales materials' BreadCrumbText2='Page Title'/>
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
                  <h1 class= "styling-1">Page title</h1>
                  <RegionPicker/>
                  <p>Get the information you need to win your clients’ trust and business. Download and share the following sales tools with your team, prospects, and clients.</p>
                </div>
                <div className="columns-10">
                <ContentToggle2
                  Title1= 'Selecting health plan and care delivery options'
                  Content1= 'There are various options for group plan coverage. Medical, prescription drug, vision, and alternative medicine are possible options. Some options may be available only to larger groups. View large business plans and products available in your region'
                  Title2= 'What are the requirements for a large business group plan?'
                  Content2= 'The requirements for large business group plans vary by region. View the group plan requirements for your region.'
                  Title3= 'Who should I call if I have questions?'
                  Content3= 'You may call your sales representative or the Kaiser Permanente sales department in your region. View regional contact information.' 
                  Title4= 'Who will let me know about my rate quote?'
                  Content4= 'It will be emailed to the address provided on your quote request.'
                  Title5= 'Who should I call if I have questions?'
                  Content5= 'You may call your sales representative or the Kaiser Permanente sales department in your region. View regional contact information.' /> 
                <div className="columns-10">
                <p class="-dolphin">If you have questions, please email the Broker Services Team at KPIF@kp.org or call 1-844-394-3978.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

export default GenericTemplate1;