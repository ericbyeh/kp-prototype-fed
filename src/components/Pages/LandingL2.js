import React from 'react';
import Hero from '../AppBody/Hero';
import ArticlesSmall from '../AppBody/Articles/index2';
import ImageCaption from '../AppBody/ImageCaption';


class LandingL2 extends React.Component {

  render() {
    return (
        <div className="main-body__container--full-width">
          <Hero/>
          <div className="main-body__container">
            <div className="rows">
              <div className="columns-12"> 
                <h2 class="styling-2 -light">Welcome Kaiser Permanente’s Employers</h2>  
                <p>Nemo enim ipsam voluptatem quia voluptas sit ipsami aspernatur  Ut enim ad minim veniam quis aut odit ault quia consequuntur magnin. Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod conse adipiscing</p>
              </div>
            </div>
            <div className="rows">
              <div className="columns-8">
                <ArticlesSmall/> 
              </div>
              <div className="side-nav__block">
              <h3>Quick Start</h3>
                <ul class="link-list">
                  <p> Group Name</p>
                  <li>
                    <a href="#" data-analytics-type="link" data-analytics-click="Deductible plans">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" data-analytics-type="link" data-analytics-click="Dental plans & benefits">Manage members</a>
                  </li>
                  <li>
                    <a href="#" data-analytics-type="link" data-analytics-click="Dental plans & benefits">Manage payments</a>
                  </li>
                  <li>
                    <a href="#" data-analytics-type="link" data-analytics-click="Dental plans & benefits">Documents</a>
                  </li>
                </ul>
                <ul class="link-list">
                  <p> Group Name</p>
                  <li>
                    <a href="#" data-analytics-type="link" data-analytics-click="Deductible plans">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" data-analytics-type="link" data-analytics-click="Dental plans & benefits">Manage members</a>
                  </li>
                  <li>
                    <a href="#" data-analytics-type="link" data-analytics-click="Dental plans & benefits">Manage payments</a>
                  </li>
                  <li>
                    <a href="#" data-analytics-type="link" data-analytics-click="Dental plans & benefits">Documents</a>
                  </li> 
                </ul>
              </div>
            </div>
            <h3> What's New</h3>
            <ImageCaption />
          </div>
          <div className="main-body__container--full-width">
            <div className="columns-12"> 
              <div className= "cta--pebble">
                <div className= "feature-content">
                  <div className="rows">
                    <div className="columns-5"> 
                      <div className= "feature-content__image"  data-analytics-location="promotional component:lifestyle">
                        <picture>
                          <source media="(min-width: 1024px)" srcset="http://fpoimg.com/481x369?text=Placeholder"/>
                          <source media="(min-width: 800px)" srcset="http://fpoimg.com/285x300?text=Placeholder" />
                          <source media="(min-width: 600px)" srcset="http://fpoimg.com/285x296?text=Placeholder" />
                          <source media="(min-width: 0px)" srcset="http://fpoimg.com/288x188?text=Placeholder" />
                          <img src="http://fpoimg.com/288x188?text=Placeholder" alt="Group of people gathered around computer" />
                        </picture>
                    </div>
                    </div>
                    <div className="columns-7"> 
                      <div className="feature-content__description">
                        <h3> We’re here to help</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis</p>
                        <div className="rows">
                          <div className="columns-feature"> 
                            <button class="button" data-analytics-type="button" data-analytics-click="Secondary Button"><strong> Register for an account </strong></button>
                          </div>
                          <div className="columns-feature"> 
                            <button class="button -inverted" data-analytics-type="button" data-analytics-click="Secondary Button"> <strong> Contact us </strong></button>
                          </div>
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

export default LandingL2;

