import React from "react";
import contentToggleInit from 'content-toggle-pattern/src/content-toggle';
class ContentToggle2 extends React.Component {
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
       Title6: 'title',
       Content6: 'content',
    }
 }  
  _handleLoad() {
    contentToggleInit();
  
  }
 

  render() {
    return (
      <div className="content-toggle " data-behavior="accordion" data-analytics-location="Content Toggle">
        <a className="expandable-heading" href="#" data-analytics-type="Link" data-analytics-click="TITLE">
          <i className="expandable-heading-icon"></i> 
          <span className="expandable-heading-text">{this.props.Title1}</span></a>
        <div className="content">
            <p>{this.props.Content1 }</p>
        </div>
        <a className="expandable-heading" href="#" data-analytics-type="Link" data-analytics-click="TITLE">
          <i className="expandable-heading-icon"></i> 
          <span className="expandable-heading-text">{this.props.Title2}</span></a>
          <div className="content">
            <p>{this.props.Content2 }</p>
        </div>        
        <a className="expandable-heading" href="#" data-analytics-type="Link" data-analytics-click="TITLE">
          <i className="expandable-heading-icon"></i> 
          <span className="expandable-heading-text">{this.props.Title3}</span></a>
          <div className="content">
            <p>{this.props.Content3 }</p>
        </div>   
        <a className="expandable-heading" href="#" data-analytics-type="Link" data-analytics-click="TITLE"><i className="expandable-heading-icon"></i> 
          <span className="expandable-heading-text">{this.props.Title4}</span></a>
          <div className="content">
            <p>{this.props.Content4 }
            </p>
        </div>   
          <a className="expandable-heading" href="#" data-analytics-type="Link" data-analytics-click="TITLE">
          <i className="expandable-heading-icon"></i> 
          <span className="expandable-heading-text">{this.props.Title5}</span></a>
          <div className="content">
            <p>{this.props.Content5}</p>
        </div>   
      </div> 
    );
  }
}

export default ContentToggle2;
