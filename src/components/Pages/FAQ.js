/*eslint-disable */
import React from 'react';
import BreadCrumb from "../AppBody/BreadCrumbs";
import ContentToggle from '../AppBody/ContentToggle';
import ContentToggle2 from '../AppBody/ContentToggle/indexExtra';

import PrintUtility from "../AppBody/PrintUtility";
import SocialShare from "../AppBody/SocialShare";
//Patterns
import tabs from 'tabs-pattern/src/tabs';

class FAQ extends React.Component {
  componentDidMount() {
    this._handleLoad();
  }
  _handleLoad() {
    tabs();
  }
 
  render() {
    return (
      <div className="main-body">
        <div className="main-body__container">
        <div className="rows">
          <div className="columns-10">
          </div>
          <div className="columns-2">
            <PrintUtility/>
          </div>
          </div>
        <div className="rows">
          <div className="columns-2">
          </div>
          <div className="columns-9">
            <h1 class= "styling-1"> Frequently asked questions</h1>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
            <div class="tabs" data-analytics-location="Tabs" data-lang="en" data-panel-announcement-start="" data-panel-announcement-end="">
              <div class="tabs__nav">
                <ul class="tabs__list">
                  <li class="tabs__list-item">
                  <a class="tabs__link" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="Title">Broker & Agent</a>
                  </li>
                  <li class="tabs__list-item">
                  <a class="tabs__link" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="Title">Employer</a>
                  </li>
                </ul>
              </div>
              <div class="tabs__content">
                <div class="tabs__panel" data-analytics-location="Tabs Panel">
                <h2 class="styling-2">Broker & Agent</h2>
                <h3 class= "styling-3"> Client Support</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h4 > Accessing care - ID cards</h4>
                <div class="content-toggle" data-behavior="accordion" data-analytics-location="Content Toggle">
                  <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE">
                    <i class="expandable-heading-icon"></i> <span class="expandable-heading-text">How can new members recieve care?</span></a>
                  <div class="content">
                  <p>Identification cards are mailed to subscribers homes upon enrollemnt. If members need to obtain services before receiving their Kaiser Permanente ID cards, they should use a copy of their enrollemnt form and a photo ID,Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="#plans">labore et dolore magna aliqua.</a></p>
                  </div>
                </div>   
                <h4>Online Support</h4>
                  <ContentToggle
                  Title1= 'Are Online customers account services free?'
                  Content1= 'There are various options for group plan coverage. Medical, prescription drug, vision, and alternative medicine are possible options. Some options may be available only to larger groups. View large business plans and products available in your region'
                  Title2= 'When can my clients begin using online account services?'
                  Content2= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                  Title3= 'Do my clients have to go online for all their transactions?'
                  Content3= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/> 
                <h3 class= "styling-3"> Selling Plans</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h4> Selling small business plans</h4>
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
                <h4> Selling large business plans</h4>
                  <ContentToggle
                  Title1= 'Are Online customers account services free?'
                  Content1= 'There are various options for group plan coverage. Medical, prescription drug, vision, and alternative medicine are possible options. Some options may be available only to larger groups. View large business plans and products available in your region'
                  Title2= 'When can my clients begin using online account services?'
                  Content2= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                  Title3= 'Do my clients have to go online for all their transactions?'
                  Content3= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/> 
                </div>
                <div class="tabs__panel" data-analytics-location="Tabs Panel">
              <h2 class="styling-2">Employer</h2>
              <h3 class= "styling-3"> Client Support</h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ContentToggle
              Title1= 'What large group benefit plans are available?'
              Content1= 'There are various options for group plan coverage. Medical, prescription drug, vision, and alternative medicine are possible options. Some options may be available only to larger groups. View large business plans and products available in your region'
              Title2= 'What are the requirements for a large business group plan?'
              Content2= 'The requirements for large business group plans vary by region. View the group plan requirements for your region.'
              Title3= 'Who should I call if I have questions?'
              Content3= 'You may call your sales representative or the Kaiser Permanente sales department in your region. View regional contact information.' 
              Title4= 'Who will let me know about my rate quote?'
              Content4= 'It will be emailed to the address provided on your quote request.'
              Title5= 'Who should I call if I have questions?'
              Content5= 'You may call your sales representative or the Kaiser Permanente sales department in your region. View regional contact information.' /> 
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h4 class= "styling-4">Consectetur adipiscing elit,</h4>
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
                <h5 class= "styling-5"> Ipsum dolor sit ame</h5>
                  <ContentToggle
                  Title1= 'Are Online customers account services free?'
                  Content1= 'There are various options for group plan coverage. Medical, prescription drug, vision, and alternative medicine are possible options. Some options may be available only to larger groups. View large business plans and products available in your region'
                  Title2= 'When can my clients begin using online account services?'
                  Content2= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                  Title3= 'Do my clients have to go online for all their transactions?'
                  Content3= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/> 
              </div>
              </div>
            </div>  
          </div>
          <div className="columns-2">
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;

