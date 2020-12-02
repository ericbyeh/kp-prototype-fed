import React from "react";
class FeatureBlockSmall extends React.Component {
  constructor() {
    super();
    this.props = {
       title: 'title',
       description: 'description',
    }
 }
  render() {
    return (
    <div class="feature-content--small" aria-label="Individual and family" > 
      <div class="feature-content__container" region={this.props.title}>
        <h3 class="feature-content__header">{this.props.title} </h3>
        <div class="feature-content__description">
          <p> {this.props.description} </p>
          <a href="#" data-analytics-type="link" data-analytics-click="Summary of benefits and coverage (SBC's)">Summary of benefits and coverage (SBC's)</a>   
        </div>
      </div>     
    </div>
    )
  }
}
export default FeatureBlockSmall;