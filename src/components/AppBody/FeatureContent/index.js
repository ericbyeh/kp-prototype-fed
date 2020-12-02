import React from "react";
class FeatureText extends React.Component {
  constructor() {
    super();
    this.props = {
       title: 'title',
       description: 'description',
    }
 }
  render() {
    return (
      <section class="feature-content--underline" aria-label="Individual and family" > 
      <div class="feature-content__container" region={this.props.title}>
      <h3 class="feature-content__header">{this.props.title} </h3>
        <div class="feature-content__description">
          <p>Nemo enim ipsam voluptas sit aspernatur aut odit ault quia consequuntur magni.</p>
          <p> <a href="#" data-analytics-type="link" data-analytics-click="Lorem ipsum dolor">Lorem ipsum dolor</a></p>
      </div>
    </div>          
    </section>
    )
  }
}
export default FeatureText;