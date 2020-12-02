import React from "react";
import { promotionalComponentInit } from 'promotional-component-pattern/src/promotional-component'

class PromotionalComponent extends React.Component {
  constructor() {
    super();
    this._handleLoad = this._handleLoad.bind(this);
  }

  componentDidMount() {
    this._handleLoad();
  }

  _handleLoad() {
    promotionalComponentInit();
  }
  
  render() {    
    return (
      <div class="promotional-component -lifestyle" data-analytics-location="promotional component:lifestyle">
      <picture class="promotional-component__photo">
        <source media="(min-width: 860px)" srcset={this.props.promotionalImage} />
        <source media="(min-width: 601px)" srcset={this.props.promotionalImage2} />
        <img src={this.props.promotionalImage3} alt="Two people bicycling over a bridge"/>
      </picture>
      <div class="promotional-component__content">
        <div class="promotional-component__title">{this.props.promotionalTitle}</div>
        <div class="promotional-component__subtext"><p>{this.props.promotionalContent}</p></div>
        <div class="promotional-component__link-group">
          <a class="promotional-component__link" href="javascript:void(0);" data-analytics-type="link" data-analytics-click="learn more">Learn more</a>
        </div>
      </div>
    </div>
    );
  }
}




export default PromotionalComponent;