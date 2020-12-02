/*eslint-disable */
import React from 'react';

//Patterns
import BreadCrumb from "../../AppBody/BreadCrumbs";
import ContentToggle2 from '../../AppBody/ContentToggle/indexExtra';
import PrintUtility from "../../AppBody/PrintUtility";
import RegionPicker from "../../AppBody/RegionPicker";

class GenericTemplate5 extends React.Component {
 
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
                  <h1 class= "styling-1">Brokers new to Kaiser Permanente </h1>
                  <p>Explore new sales opportunities that can turn prospects into clients. With medical commissions for large and small groups, plus rewards for all your lines of business, you can increase your earnings potential — while bringing better health and value to your clients.</p>
                  <RegionPicker/>
                </div>
                <div className="columns-10">
                <h3>Getting started with out Broker Essentials Guide</h3>
                <p> Review our Broker <a href="#"> Essentials guide (PDF)</a> to familiarize yourself with Kaiser Permanente and the resources you need to grow your business. <br></br><br></br></p>
                <h3>Video Guides for new Brokers</h3>
                <p>Watch these videos for a quick overview of the wealth of resources you and your clients can get from Kaiser Permanente.</p>
                <div className="rows">
                  <div className="columns-6">
                    <div class="video-thumbnail"> 
                      <img src="http://placehold.it/380x213.gif" alt="hero banner image" />
                      <div class="video-thumbnail__description">
                        <h4> <a href="#">Video Guides for new Brokers </a></h4>
                        <p>Our health plans offer a strong return on investment while helping employees stay healthier and more productive. See how our integrated system and advanced technology can deliver lower costs and better, more efficient care. </p>
                      </div>
                    </div>
                  </div>
                  <div className="columns-6">
                    <div class="video-thumbnail"> 
                      <img src="http://placehold.it/380x213.gif" alt="hero banner image" />
                      <div class="video-thumbnail__description">
                        <h4> <a href="#">Why your clients’ employees should choose us.</a></h4>
                        <p>With care and coverage working together, employees get convenient access to a wide range of services — all in a single, easy-to-use system that puts them in control.</p>
                      </div>
                    </div>
                  </div>
                  <div className="columns-6">
                    <div class="video-thumbnail"> 
                      <img src="http://placehold.it/380x213.gif" alt="hero banner image" />
                      <div class="video-thumbnail__description">
                        <h4> <a href="#">Online tools and resources.</a></h4>
                        <p>Find everything you need to make the sale on our broker website. And learn how to direct your clients to the many wellness resources available on our sites for employers and members.</p>
                      </div>
                    </div>
                  </div>
                  <div className="columns-6">
                    <div class="video-thumbnail"> 
                      <img src="http://placehold.it/380x213.gif" alt="hero banner image" />
                      <div class="video-thumbnail__description">
                        <h4> <a href="#">Getting to know your prospect. </a></h4>
                        <p>Use our employer questionnaires, census forms, and more to get the information you need to create personalized quotes and sales strategies based on your clients' needs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="columns-6">
                    <div class="video-thumbnail"> 
                      <img src="http://placehold.it/380x213.gif" alt="hero banner image" />
                      <div class="video-thumbnail__description">
                        <h4> <a href="#">Small group enrollment tips.</a></h4>
                        <p>Make the enrollment process easier for you and your clients. Our website includes underwriting guidelines, employee enrollment forms, and tips on collecting the first month’s premium.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="content-toggle -variation-1" data-behavior="accordion" data-analytics-location="Content Toggle">
                  <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"  data-expanded="true"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">Individual and family</span></a>
                  <div class="content">
                    <p>With Kaiser Permanente for Individuals and Families (KPIF) you can offer your clients a choice of plans that meet a wide range of needs. </p>
                    <ul> 
                    <li>	Copayment plans</li>
                    <li>	Deductable plans</li>
                    <li> 	HSA-Qualified plans</li>
                    <li>	Dental coverage</li>
                    </ul>
                    <h5>For more information</h5>
                    <p>Email  the Broker Services Team at kpif@kp.org or call 800-789-4661, option 6.</p>
                  </div>
                  <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"  data-expanded="true"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">Small group</span></a>
                  <div class="content">
                    <h3>Compensation</h3>
                    <p>Learn more about <a  href='#'> small group commissions.</a></p>
                    <h3>Covered California for Small Business (formerly known as SHOP)</h3>
                    <p>Small businesses will be able to find, compare, and purchase coverage through the Covered California for Small Business exchange. The exchange may also introduce some new changes in the way you do business.</p>
                    <p>Periodically, we'll offer broker bonus programs for selling memberships. When we do, we'll pay the bonus in the same manner for members enrolling through Covered California for Small Business or directly. We'll also be adding new products in 2016, so check back regularly for more information as they become available.</p>
                    <h3>Migration to ACA-compliant plans</h3>
                    <p> Groups with nongrandfathered plans will be automatically matched to new 2016 metal tier plans that meet ACA guidelines. The matched plans will be similar to the coverage they're currently offering. They'll also have the option of moving to another of our 2016 metal tier plans that meet all the standards of health care reform.</p>
                    <p>Groups with grandfathered plans can continue offering their employees the same plan for 2016. They also have the option of moving to one of our new 2016 plans that meet ACA guidelines.</p>
                    <h3>Small business tax credits</h3>
                    <p>Small businesses that provide health coverage for their employees may be eligible for a tax credit of varying amounts, depending on whether groups are for-profit or tax-exempt. Learn more about this and other provisions in our guide to health care reform (PDF).</p>
                    <h3>Member level rating</h3>
                    <p>The ACA makes a number of changes to small group market practices that create more standardization across health insurers—establishing a fairer basis for setting rates and making comparisons of products and prices easier for small employers. These changes include new rules for how rates are calculated for small group health plans in 2016.</p>
                    <h3>For more information</h3>
                    <p>Email the Broker Services Team at kaiser.sbu.sales@kp.org or call 800-789-4661, option 4.</p>
                    <p>For new brokers outside of California, please contact Paul Bradley at 909-609-2820 or paul.r.bradley@kp.org.</p>
                  </div>
                  <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">Getting appointed with Kaiser Permanente</span></a>
                  <div class="content">
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">Deligate authority to your team</span></a>
                  <div class="content">
                    <p>The best place to start when deciding to use a Content Toggle is to evaluate common and critical use cases for your audience. Content Toggles are more suitable when people need only a few key pieces of content on a single page. By hiding most of the content, users can spend their time more efficiently focused on the few topics that matter. Understanding people’s scenarios will help you determine whether or not Content Toggles are appropriate.</p>
                  </div>
                  <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">When to to use a Content Toggle?</span></a>
                  <div class="content">
                    <p>The best place to start when deciding to use a Content Toggle is to evaluate common and critical use cases for your audience. Content Toggles are more suitable when people need only a few key pieces of content on a single page. By hiding most of the content, users can spend their time more efficiently focused on the few topics that matter. Understanding people’s scenarios will help you determine whether or not Content Toggles are appropriate.</p>
                    </div>
                  <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">Get certified to sell with Covered California</span></a>
                  <div class="content">
                    <p>Thirteen health carriers are participating in the individual insurance marketplace and six health carriers are participating in Covered California for Small Business (formerly known as SHOP), both run by Covered California, many offering multiple health plan options. To sell these plans, brokers must be certified by Covered California. Computer based training applies to both individual and Covered California for Small Business sales. Once certified, you’ll be able to facilitate enrollment in all coverage and provide information concerning enrollment and the possible availability of federal financial assistance (premium tax credits and cost-sharing reductions).</p>
                    <ul> 
                    <li>	Copayment plans</li>
                    <li>	Deductable plans</li>
                    <li> 	HSA-Qualified plans</li>
                    <li>	Dental coverage</li>
                    </ul>
                    <h5>For more information</h5>
                    <p>Email  the Broker Services Team at kpif@kp.org or call 800-789-4661, option 6.</p>
                  </div>
                  <a class="expandable-heading" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="TITLE"><i class="expandable-heading-icon"></i> <span class="expandable-heading-text">Why Kaiser Permanente</span></a>
                  <div class="content">
                    <p>Partner with us and see how our high-quality, affordable care can position you and your clients for success. Visit kp.org/choosebetter to learn how Kaiser Permanente delivers better value in the three key areas driving your clients’ health care decisions:</p>
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

export default GenericTemplate5;