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

class ArticleDetail1 extends React.Component {
 
  render() {
  
    const tableData = [{
      name: 'Marcel',
      surname: 'Michau',
      age: '24',
      gender: 'Male'
      }, {
      name: 'Joe',
      surname: 'Bloggs',
      age: '27',
      gender: 'Male'
      }, {
      name: 'Jane',
      surname: 'Doe',
      age: '22',
      Deductible: '$3 for generics and brands, and $3.70 for brand-name drugs'
      }];
      const tableData2 = [{
        ID: '7777001',
        Value: '$400',
        State: 'California',
        Deductible: '$83 deductible'
        }, {
        ID: '647501',
        Value: '$500',
        State: 'Colorado',
        Deductible: '$8.55 for generics and brands, and $3.35 for brand-name drugs'
      }, {
        ID: '66000991',
        Value: '$400',
        State: 'Washington',
        Deductible: '$0 deductible'
        }];
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
              <Sidebar/>
            </div>
            <div className="columns-10">
              <div className="rows">
                <div className="columns-10">
                  <h1 class= "styling-1"> Title</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <RegionPicker/>
                </div>
                <div className="columns-10">
                <ContentToggle2
                  Title1= 'What small group benefit plans are available?'
                  Content1= 'There are various options for group plan coverage. Medical, prescription drug, vision, and alternative medicine are possible options. Some options may be available only to larger groups. View large business plans and products available in your region'
                  Title2= 'What are the requirements for a large business group plan?'
                  Content2= 'The requirements for large business group plans vary by region. View the group plan requirements for your region.'
                  Title3= 'Who should I call if I have questions?'
                  Content3= 'You may call your sales representative or the Kaiser Permanente sales department in your region. View regional contact information.' 
                  Title4= 'Who will let me know about my rate quote?'
                  Content4= 'It will be emailed to the address provided on your quote request.'
                  Title5= 'Who should I call if I have questions?'
                  Content5= 'You may call your sales representative or the Kaiser Permanente sales department in your region. View regional contact information.' /> 
                  <div class="content-toggle -variation-1" data-behavior="accordion" data-analytics-location="Content Toggle">
                  <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">This accordion has a tables</span></a>
                  <div class="content">
                  <TableComponent data={tableData}/>
                  </div>
                  <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">And this one also has a table</span></a>
                  <div class="content">
                  <TableComponent data={tableData2}/>
                  </div>
                  <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">This is addtional copy</span></a>
                  <div class="content">
                  <p>The best place to start when deciding to use a Content Toggle is to evaluate common and critical use cases for your audience. Content Toggles are more suitable when people need only a few key pieces of content on a single page. By hiding most of the content, users can spend their time more efficiently focused on the few topics that matter. Understanding people’s scenarios will help you determine whether or not Content Toggles are appropriate.</p>
                  <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">When to to use a Content Toggle?</span></a>
                  <div class="content">
                  <p>The best place to start when deciding to use a Content Toggle is to evaluate common and critical use cases for your audience. Content Toggles are more suitable when people need only a few key pieces of content on a single page. By hiding most of the content, users can spend their time more efficiently focused on the few topics that matter. Understanding people’s scenarios will help you determine whether or not Content Toggles are appropriate.</p>
                  </div>
                  </div>
                  </div>
                <div className="columns-10">
                <p class="-dolphin">If you have questions, please email the Broker Services Team at KPIF@kp.org or call 1-844-394-3978.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="columns-10">
                <hr></hr>


                <div class="link-list-container">
                    <h4> Related Links</h4>
                    <ul class="link-list">
                      <li>
                        <a href="#" data-analytics-type="link" data-analytics-click="Seattle">Article 1</a>
                      </li>
                      <li>
                        <a href="#" data-analytics-type="link" data-analytics-click="San Francisco">Article 2</a>
                      </li>
                      <li>
                        <a href="#" data-analytics-type="link" data-analytics-click="Los Angeles">Article 3</a>
                      </li>
                    </ul>
                  </div>
                  <h5> Share</h5>
                  <SocialShare/>
                  <p class="-dolphin">If you have questions, please email the Broker Services Team at KPIF@kp.org or call 1-844-394-3978.</p>
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

export default ArticleDetail1;