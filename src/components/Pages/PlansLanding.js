/*eslint-disable */
import React from 'react';
import FeatureBlock from "../AppBody/FeatureContent";
import RegionFilter from '../AppBody/RegionFilter';

//Patterns

class PlansLanding extends React.Component {
 
 
  render() {
    return (
      <div className="main-body">
          <div className="main-body__container">
        <div className="rows">
          <div className="columns-12"> 
              <h1>Plans and Coverage</h1>
              <h3>All of the information you need to sell Kaiser Permanente plans</h3>
          </div>
        </div>
        <div className="rows">
          <section aria-label="Individual and family" > 
              <FeatureBlock region="'Individual and family'" title="Individual and family" description="Donec faucibus maximus enim. Vivamus ipsum eros, lobortis et faucibus nec,"/>
            </section>
            <section aria-label="Small business" > 
              <FeatureBlock region="'Small business'"  title="Small business" description="Donec faucibus maximus enim. Vivamus ipsum eros, lobortis et faucibus nec,"/>
            </section>
            <section aria-label="Large business" > 
              <FeatureBlock region="'Large business'"  title="Large business" description="Donec faucibus maximus enim. Vivamus ipsum eros, lobortis et faucibus nec,"/>
            </section>
       </div>
        <div className="rows">
          <div className="columns-6">
            <h3>Multi-state business</h3>
            <hr className="divider__small"></hr>
            <p>Nemo enim ipsam voluptas sit aspernatur aut odit ault quia consequuntur magni.</p>
            <p><a href="#" data-analytics-type="link" data-analytics-click="Lorem ipsum dolor">Lorem ipsum dolor</a></p>
            <br></br>
          </div>
          <div className="columns-6">
           <h3>National accounts</h3>
           <hr className="divider__small"></hr>
            <p>Nemo enim ipsam voluptas sit aspernatur aut odit ault quia consequuntur magni..</p>
            <p><a href="#" data-analytics-type="link" data-analytics-click="Lorem ipsum dolor">Lorem ipsum dolor</a></p>
            <br></br>

          </div>
        </div>
        <div className="rows">
          <div className="columns-12">
            <h3 className="-book">Additional benefits and products in <RegionFilter/></h3>
          </div>
        </div>
    <div class="tags-container">
     <div class="tags tags-locations">
       <div  id="California"  className= " location tag">
       <div className="rows">
       <div className="columns-6">

            <img src="../_images/landing-page-1.jpg" alt="Group of people gathered around conputer" />
            </div>
            <div className="columns-6">
              <div className="feature-content">
                <h3 className="feature-content__header--underline" >California Coverage</h3>
                <div className="feature-content__description">
                <p>Nemo enim ipsam voluptas sit aspernatur aut odit ault quia consequuntur magni.</p>
                <p> <a href="#" data-analytics-type="link" data-analytics-click="Lorem ipsum dolor">Lorem ipsum dolor</a></p>
               <h3>Group Medicare</h3>
               <hr className="divider__small"></hr>
                <p>Nemo enim ipsam voluptas sit aspernatur aut odit ault quia consequuntur magni.</p>
                <a href="#" data-analytics-type="link" data-analytics-click="Lorem ipsum dolor">Lorem ipsum dolor</a>
                </div>
                </div>
                </div>
              </div>
              <div className="rows">
          <div className="columns-12">
          <h3 className="-book">Explore more options</h3>
            <p>Offerings listed below are based on your California</p>
          </div>
        </div>
        <div className="rows">
          <div className="columns-3">
            <div class="link-list__container">
              <ul class="link-list">
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Chiropractic benefit">Chiropractic benefit</a>
                </li>
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Consumer-directed health care">Consumer-directed health care</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="columns-3">
            <div class="link-list__container">
              <ul class="link-list">
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Deductible plans">Deductible plans</a>
                </li>
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Dental plans & benefits">Dental plans & benefits</a>
                </li>
              </ul>
            </div>
          </div>  
          <div className="columns-3">
            <div class="link-list__container">
              <ul class="link-list">
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Grandfathered plans">Grandfathered plans</a>
                </li>
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="HMO plans">HMO plans</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="columns-3">
            <div class="link-list__container">
              <ul class="link-list">
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="HSA-qualified plans">HSA-qualified plans</a>
                </li>
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Occupational health">Occupational health</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
              </div>
              <div  id="Colorado"  className= "feature-content location tag">
              <div className="rows">
              <div className="columns-6">

            <img className= "feature-content__image" src="../_images/landing-page-1.jpg" alt="Group of people gathered around conputer" />
              </div>
              <div className="columns-6">

              <div className="feature-content__description">
                <h3 className="divider__small">Colorado Coverage</h3>
                <p>Nemo enim ipsam voluptas sit aspernatur aut odit ault quia consequuntur magni.</p>
                <p> <a href="#" data-analytics-type="link" data-analytics-click="Lorem ipsum dolor">Lorem ipsum dolor</a></p>
               <h3>Group Medicare</h3>
               <hr className="divider__small"></hr>
                <p>Nemo enim ipsam voluptas sit aspernatur aut odit ault quia consequuntur magni.</p>
                <a href="#" data-analytics-type="link" data-analytics-click="Lorem ipsum dolor">Lorem ipsum dolor</a>
                </div>
                </div>
              </div>
              <div className="rows">
          <div className="columns-12">
          <h3 className="-book">Explore more options</h3>
            <p>Offerings listed below are based on your Colorado</p>
          </div>
        </div>
        <div className="rows">
          <div className="columns-3">
            <div class="link-list__container">
              <ul class="link-list">
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Chiropractic benefit">Chiropractic benefit</a>
                </li>
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Consumer-directed health care">Consumer-directed health care</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="columns-3">
            <div class="link-list__container">
              <ul class="link-list">
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Deductible plans">Deductible plans</a>
                </li>
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Dental plans & benefits">Dental plans & benefits</a>
                </li>
              </ul>
            </div>
          </div>  
          <div className="columns-3">
            <div class="link-list__container">
              <ul class="link-list">
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Grandfathered plans">Grandfathered plans</a>
                </li>
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="HMO plans">HMO plans</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="columns-3">
            <div class="link-list__container">
              <ul class="link-list">
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="HSA-qualified plans">HSA-qualified plans</a>
                </li>
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Occupational health">Occupational health</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
              </div>

              <div  id="Oregon"  className= "feature-content location tag">
              <div className="rows">

            <img className= "feature-content__image" src="../_images/landing-page-1.jpg" alt="Group of people gathered around conputer" />
              <div className="feature-content__description">
                <h3>Oregon Coverage</h3>
                <hr className="divider__small"></hr>
                <p>Nemo enim ipsam voluptas sit aspernatur aut odit ault quia consequuntur magni.</p>
                <p> <a href="#" data-analytics-type="link" data-analytics-click="Lorem ipsum dolor">Lorem ipsum dolor</a></p>
               <h3>Group Medicare</h3>
               <hr className="divider__small"></hr>
                <p>Nemo enim ipsam voluptas sit aspernatur aut odit ault quia consequuntur magni.</p>
                <a href="#" data-analytics-type="link" data-analytics-click="Lorem ipsum dolor">Lorem ipsum dolor</a>
                </div>
              </div>
              <div className="rows">
          <div className="columns-12">
          <h3 className="-book">Explore more options</h3>
            <p>Offerings listed below are based on Oregon</p>
          </div>
        </div>
        <div className="rows">
          <div className="columns-3">
            <div class="link-list__container">
              <ul class="link-list">
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Chiropractic benefit">Chiropractic benefit</a>
                </li>
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Consumer-directed health care">Consumer-directed health care</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="columns-3">
            <div class="link-list__container">
              <ul class="link-list">
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Deductible plans">Deductible plans</a>
                </li>
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Dental plans & benefits">Dental plans & benefits</a>
                </li>
              </ul>
            </div>
          </div>  
          <div className="columns-3">
            <div class="link-list__container">
              <ul class="link-list">
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Grandfathered plans">Grandfathered plans</a>
                </li>
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="HMO plans">HMO plans</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="columns-3">
            <div class="link-list__container">
              <ul class="link-list">
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="HSA-qualified plans">HSA-qualified plans</a>
                </li>
                <li>
                  <a href="#" data-analytics-type="link" data-analytics-click="Occupational health">Occupational health</a>
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

export default PlansLanding;

