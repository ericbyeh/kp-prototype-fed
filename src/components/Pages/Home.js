import React from 'react';
import Hero from '../AppBody/Hero';
import ArticlesSmall from '../AppBody/Articles/index2';
import ImageCaption from '../AppBody/ImageCaption';


class Home extends React.Component {

  render() {
    return (
        <div className="main-body__container--full-width">
          <Hero/>
          <div className="main-body__container">
            <div className="rows">
              <div className="columns-12"> 
                <h2 class="styling-1 -light center">Welcome brokers & employers</h2>  
                <h3 class="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolare magna.</h3>
              </div>
            </div>
            <div className="background__blue">
              <div className="rows">
              <div className="columns-6"> 
                <h2 class="center">Brokers</h2>
                <p class="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolare. </p>
                <a href="javascript:void(0);" class="button -inverted" data-analytics-type="link" data-analytics-click="Your Link Text">Your Link Text</a>
              </div>
              <div className="columns-6"> 
                <h2 class="center">Employers</h2>
                <p class="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolare. </p>
                <a href="javascript:void(0);" class="button -inverted" data-analytics-type="link" data-analytics-click="Your Link Text">Your Link Text</a>
              </div>
              </div>
            </div>
            <h3> Get more lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <ImageCaption />
          </div>
          <div className="main-body__container--full-width">
            <div className="columns-12"> 
              <div className= "cta--pale-blue">
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
                      <h4> <strong> Open Enrollment 2020 </strong></h4>
                        <h3 class=" -light"> Review new plans and policy updates for open enrollment 2020 </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis</p>
                        <button class="button -inverted" data-analytics-type="button" data-analytics-click="Secondary Button"> <strong> View open enrollment details </strong></button>
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

export default Home;

