import React from "react";
class FeatureBlock extends React.Component {
  constructor() {
    super();
    this.props = {
       title: 'title',
       description: 'description',
    }
 }
  render() {
    return (
      <section class="feature-content--grey" aria-label="Individual and family" > 
      <div class="feature-content__container" region={this.props.title}>
         <h3 class="feature-content__header">{this.props.title} </h3>
         <div class="feature-content__description">
         <p> {this.props.description} </p>
          <div class="link-list__container">
            <ul class="link-list">
              <li>
                <a href="#" data-analytics-type="link" data-analytics-click="Health plans and products">Health plans and products</a>
              </li>
              <li>
                <a href="#" data-analytics-type="link" data-analytics-click="Summary of benefits and coverage (SBC's)">Summary of benefits and coverage (SBC's)</a>
              </li>
              <li>
                <a href="#" data-analytics-type="link" data-analytics-click="Get quotes">Get quotes</a>
              </li>
              <li>
                <a href="#" data-analytics-type="link" data-analytics-click="Apply for coverage">Apply for coverage</a>
              </li>
              <li>
                <a href="#" data-analytics-type="link" data-analytics-click="Supplemental plans">Supplemental plans</a>
              </li>
            </ul>
          </div>          
     </div>
   </div>     
</section>
    )
  }
}
export default FeatureBlock;