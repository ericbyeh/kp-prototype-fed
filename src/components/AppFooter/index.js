import React from "react";
import contentToggleInit from 'content-toggle-pattern/src/content-toggle';


class AppFooter extends React.Component {
  componentDidMount() {
    this._handleLoad();
  }

  _handleLoad() {
    contentToggleInit();

  }

  render() {
    return (

      <footer class="footer-bcssp" role="contentinfo">
      <div class="footer footer--pebble" data-analytics-location="footer">
      <div className="main-body__container">

<div className="rows">
  <div className="columns-12">
        <div class="footer__upper">
          <div class="footer__content-toggle">
            <div class="footer__columns">
              <div class="footer__columns-3">
                <div class="content-toggle -device-only" data-analytics-location="Content Toggle" data-behavior="accordion">
                  <a class="expandable-heading" data-analytics-click="Find care" data-analytics-type="Link" href="javascript:void(0);">
                    <i class="expandable-heading-icon"></i> 
                    <span class="expandable-heading-text">Selling plans</span></a>
                  <div class="content">
                    <div class="link-list__container">
                      <ul class="link-list">
                        <li>
                          <a href="#">Individual and family</a>
                        </li>
                        <li>
                          <a href="#">Small business</a>
                        </li>
                        <li>
                          <a href="#">Large business</a>
                        </li>
                        <li>
                          <a href="#">Dental</a>
                        </li>
                        <li>
                          <a href="#" >Medicare</a>
                        </li>
                        <li>
                          <a href="#" >Service Area</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer__columns-3">
                <div class="content-toggle -device-only" data-analytics-location="Content Toggle" data-behavior="accordion">
                  <a class="expandable-heading footer__title" data-analytics-click="Our organization" data-analytics-type="Link" href="javascript:void(0);"><i class="expandable-heading-icon"></i>
                      <span class="expandable-heading-text">Member support</span></a>
                  <div class="content">
                    <div class="link-list__container">
                      <ul class="link-list">
                        <li>
                          <a href="#">Compensation</a>
                        </li>
                        <li>
                          <a href="#">Broker information</a>
                        </li>
                        <li>
                          <a href="#">New to Kaiser Permanente</a>
                        </li>
                        <li>
                          <a href="#">Getting appointed with KP</a>
                        </li>
                        <li>
                          <a href="#">Employer and Broker Service team</a>
                        </li>                                                                 
                      </ul>
                    </div>
                </div>
              </div>
            </div>
              <div class="footer__columns-3">
                <div class="content-toggle -device-only" data-analytics-location="Content Toggle" data-behavior="accordion">
                  <a class="expandable-heading footer__title" data-analytics-click="Our organization" data-analytics-type="Link" href="javascript:void(0);"><i class="expandable-heading-icon"></i>
                     <span class="expandable-heading-text">Your clients</span></a>
                  <div class="content">
                    <div class="link-list__container">
                      <ul class="link-list">
                        <li>
                          <a href="#">Book of business</a>
                        </li>
                        <li>
                          <a href="#">Renewals</a>
                        </li>
                        <li>
                          <a href="#">Client support</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
   
              <div class="footer__columns-3">
                <div class="content-toggle -device-only" data-analytics-location="Content Toggle" data-behavior="accordion">
                  <a class="expandable-heading footer__title" data-analytics-click="Our organization" data-analytics-type="Link" href="javascript:void(0);"><i class="expandable-heading-icon"></i>
                      <span class="expandable-heading-text">Resource library</span></a>
                  <div class="content">
                    <div class="link-list__container">
                      <ul class="link-list">
                        <li>
                          <a href="#">Forms</a>
                        </li>
                        <li>
                          <a href="#">Sales materials</a>
                        </li>
                        <li>
                          <a href="#">Directory</a>
                        </li>
                        <li>
                          <a href="#">Newsletter</a>
                        </li>
                        <li>
                          <a href="#">Service Area</a>
                        </li>                                                
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
          <div class="footer__lower">
            <div class="social-share" data-analytics-location="social-share">
              <div class="social-share__listWrapper" role="region" aria-label="social-share">
                <ul class="social-share__list">
                  <li class="social-share__item">
                    <a class="social-share__link" href="" aria-label="Share with facebook" data-analytics-type="link" data-analytics-click="share with facebook">
                      <span class="icon-facebook primary-icon--grey" aria-hidden="true" tab-index="-1"></span>
                    </a>
                  </li>
                  <li class="social-share__item">
                    <a class="social-share__link" href="" aria-label="Share with linkedin" data-analytics-type="link" data-analytics-click="share with linkedin">
                      <span class="icon-zlinkedin primary-icon--grey" aria-hidden="true" tab-index="-1"></span>
                    </a>
                  </li>
                  <li class="social-share__item">
                    <a class="social-share__link" href="" aria-label="Share with twitter" data-analytics-type="link" data-analytics-click="share with twitter">
                      <span class="icon-twitter primary-icon--grey" aria-hidden="true" tab-index="-1"></span>
                    </a>
                  </li>
                  <li class="social-share__item">
                    <a class="social-share__link" href="" aria-label="Share with youtube" data-analytics-type="link" data-analytics-click="share with instagram">
                      <span class="icon-youtube primary-icon--grey" aria-hidden="true" tab-index="-1"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="horizontal-list" aria-label="Additional Information Group" role="group">
                  <ul class="link-list">
                    <li>
                      <a href="#" data-analytics-type="link" data-analytics-click="About us ">About us</a>
                    </li>
                    <li>
                      <a href="#" data-analytics-type="link" data-analytics-click="Locate a facility">Locate a facility</a>
                    </li>
                    <li>
                      <a href="#" data-analytics-type="link" data-analytics-click="Technical information">Technical information</a>
                    </li>
                    <li>
                      <a href="#" data-analytics-type="link" data-analytics-click="Terms & conditions">Terms & conditions</a>
                    </li>
                    <li>
                      <a href="#" data-analytics-type="link" data-analytics-click="Privacy practices">Privacy practices</a>
                    </li>
                    <li>
                      <a href="#" data-analytics-type="link" data-analytics-click="Other languages">Other languages </a>
                    </li>
                    <li>
                      <a href="#" data-analytics-type="link" data-analytics-click="Nondiscrimination notice">Nondiscrimination notice</a>
                    </li>
                  </ul>
            </div>
              <p>You will need the free <a class="external-link" href="https://get.adobe.com/reader/" target="_blank" title="Opens in a new window, external">Adobe Acrobat</a> to read PDFs.</p>
              <br/>
              <p> Copyright © 2020 Kaiser Foundation Health Plan, Inc.</p> 
              <br/>
            <div class="footer__copyright">
              <a data-skip-ext-icon="true" href="https://privacy.truste.com/privacy-seal/validation?rid=83bcfa89-f6b6-4931-8826-9c6e86322922" target="_blank" title="Opens in a new window, external">
                <img alt="TRUSTe privacy certification program" class="new-window-link" src="https://privacy-policy.truste.com/privacy-seal/seal?rid=83bcfa89-f6b6-4931-8826-9c6e86322922" title="Opens in a new window"/></a>
            </div>
            </div>
            </div>
    </div>
    </div>
      </div>
    </footer>

    );
  };
};

export default AppFooter;
