import React from "react";
class SocialShare extends React.Component {
    render() {
        return (
      <div class="social-share" data-analytics-location="social-share">
        <div aria-label="social-share" class="social-share__listWrapper" role="region">
          <ul class="social-share__list">
            <li class="social-share__item"><a aria-label="Share with facebook" class="social-share__link" data-analytics-click="share with facebook" data-analytics-type="link" href=""><i aria-hidden="true" class="icon-facebook primary-icon--grey"></i></a></li>
            <li class="social-share__item"><a aria-label="Share with linkedin" class="social-share__link" data-analytics-click="share with linkedin" data-analytics-type="link" href=""><i aria-hidden="true" class="icon-zlinkedin primary-icon--grey"></i></a></li>
            <li class="social-share__item"><a aria-label="Share with twitter" class="social-share__link" data-analytics-click="share with twitter" data-analytics-type="link" href=""><i aria-hidden="true" class="icon-twitter primary-icon--grey"></i></a></li>
            <li class="social-share__item"><a aria-label="Share with pintrest" class="social-share__link" data-analytics-click="share with pintrest" data-analytics-type="link" href=""><i aria-hidden="true" class="icon-pinterest primary-icon--grey"></i></a></li>
          </ul>
        </div>
      </div>
        )
    }
}
export default SocialShare;