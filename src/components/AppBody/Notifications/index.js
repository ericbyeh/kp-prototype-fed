import React from "react";
class BreadCrumb extends React.Component {
  constructor() {
    super();
    this.props = {
      ErrorType: 'parent page',
       ErrorTitle: 'current page',
    }
 }
    render() {
        return (
        <div class="notification {this.props.BreadCrumbText1}" data-analytics-location="Notification">
        <div class="-main">
          <span id="msg_error4" tabindex="-1" class="screenreader-only">ErrorTitle</span>
          <div aria-hidden="true" class="-icon"></div>
          <div class="-body">
              <p class="styling-6 -medium">You can include action buttons in notifications that can be retried or dismissed</p>
              <p>The icon is independent of the action buttons, please make sure you use the appropriate icon class. An unpredictable error has occured here and the user needs to be informed of what has happened.</p>
              <div class="-action-buttons -inline">
                <button class="link">Cancel</button> <span class="divider-vertical-wrap"><i class="divider-vertical"></i></span> <button class="link">Retry</button>
              </div>
          </div>
        </div>
      </div>
        )
    }
}
export default BreadCrumb;