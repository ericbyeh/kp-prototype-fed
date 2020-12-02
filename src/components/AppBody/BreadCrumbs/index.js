import React from "react";
class BreadCrumb extends React.Component {
  constructor() {
    super();
    this.props = {
      BreadCrumbTextParentPage: 'parent page',
       BreadCrumbText1: 'current page',
       BreadCrumbText2: 'current page2',

    }
 }
    render() {
        return (
          <nav aria-label="Breadcrumbs" className="breadcrumb" data-analytics-location="Breadcrumbs">
          <ul>
            <li>
              <a href="#">{this.props.BreadCrumbTextParentPage}<i aria-hidden="true" className="icon-chevron-forward"></i></a>
              <i aria-hidden="true" className="mobile-only icon-chevron-back"></i>
            </li>
            <li>
              <a href="#"><span className="screenreader-only mobile-only">Visit </span>{this.props.BreadCrumbText1}</a>
            </li>
            <li>
              <div class="breadcrumb__current-page">
                <i aria-hidden="true" className="icon-chevron-forward"></i>
                <i aria-hidden="true" className="mobile-only icon-chevron-back"></i>{this.props.BreadCrumbText2}
              </div>
            </li>
          </ul>
        </nav>
        )
    }
}
export default BreadCrumb;