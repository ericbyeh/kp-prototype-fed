import React from "react";
import tabs from 'tabs-pattern/src/tabs';
class Tabs extends React.Component {
  componentDidMount() {
    this._handleLoad();
  }
  constructor() {
    super();
    this.props = {
       Title1: 'title',
       Content1: 'content',
       Title2: 'title',
       Content2: 'content',
       Title3: 'title',
       Content3: 'content',
       Title4: 'title',
       Content4: 'content',
       Title5: 'title',
       Content5: 'content',
    }
 }  
  _handleLoad() {
    tabs();
  }
 

  render() {
    return (
      <div class="tabs" data-analytics-location="Tabs" data-lang="en" data-panel-announcement-start="" data-panel-announcement-end="">
      <div class="tabs__nav">
        <ul class="tabs__list">
          <li class="tabs__list-item">
            <a class="tabs__link" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="Title">One</a>
          </li>
          <li class="tabs__list-item">
            <a class="tabs__link" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="Title">Two</a>
          </li>
          <li class="tabs__list-item">
            <a class="tabs__link" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="Title">Three</a>
          </li>
          <li class="tabs__list-item">
            <a class="tabs__link" href="javascript:void(0);" data-analytics-type="Link" data-analytics-click="Title">Four</a>
          </li>
        </ul>
      </div>
      <div class="tabs__content">
        <div class="tabs__panel" data-analytics-location="Tabs Panel">
          <p class="styling-4">First Heading</p>
          <p>{this.props.Content1}</p>
        </div>
        <div class="tabs__panel" data-analytics-location="Tabs Panel">
          <p class="styling-4">Second Heading</p>
          <p>{this.props.Content2}</p>
        </div>
        <div class="tabs__panel" data-analytics-location="Tabs Panel">
          <p class="styling-4">Third Heading</p>
          <p>{this.props.Content3}</p>
        </div>
        <div class="tabs__panel" data-analytics-location="Tabs Panel">
          <p class="styling-4">Fourth Heading</p>
          <p>{this.props.Content4}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Tabs;
