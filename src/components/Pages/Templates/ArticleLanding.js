/*eslint-disable */
import React from 'react';

//Patterns
import BreadCrumb from "../../AppBody/BreadCrumbs";
import PrintUtility from "../../AppBody/PrintUtility";
import RegionPicker from "../../AppBody/RegionPicker";

class ArticleLanding extends React.Component {
 
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
                <div className="columns-12">
                  <h1 class= "styling-1"> Title of article landing</h1>
                  <RegionPicker/>
                </div>
                <div className="columns-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et dapibus enim, vitae porta erat. Ut consequat arcu ac ultricies tincidunt. In vitae justo ut eros sollicitudin molestie id non tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. </p>
                </div>      
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleLanding;