import React from "react";
class ArticlesSmall extends React.Component {
  constructor() {
    super();
    this._handleLoad = this._handleLoad.bind(this);
  }

  componentDidMount() {
    this._handleLoad();
  }

  _handleLoad() {
    RegionLinkInit();
  }
    render() {
        return (
          <div className="news__summary region__content" id="list" data-region-object='{ "newsListings": [{"region": "CA","url":"/content/kp/bcssp/en_us/broker/california/news.html"},{"region": "CO","url": "/content/kp/bcssp/en_us/broker/colorado/news.html"}]}'>
            <h3 className="header--underline">News & annoucements</h3>
            <div className="news__articles-group">
              <div className="news__articles-content">
                <div className="news__articles-text--small">
                  <p>Topic</p>
                </div>
                <h4 className="news__articles-title"><a href="https://account.kp.org/broker-employer/resources/!ut/p/z1/hY9vS8MwEMY_TV-Gu7ZxSfcu6bpuahxT2Lq8GVkJtdCmpUbFb29ww3fag4P783se7kBDBdqZj7Yxvh2c6UJ_0otzXooNZY-IXKk1ipeNLJnicookieStringoUDnCcQ3RY4x8hMOj1D_LrUO6pxC1Tu4fimaehugH_eNyDbrrhcj341ftxGWGEn-NYD85b5-uQdooQ9GSb8BlUT8dZ9Fo501uojHPDu6ttH2Zvs0oz-bbugiy7K2gi-YLkMhYkjgtGMooZWaUyl4XgNBEMxn6dbYm-fKVd8w2UV0F5/dz/d5/L2dBISEvZ0FBIS9nQSEh/">Open for business in Lane County + New facility in Beaverton.</a></h4>
              </div>
            </div>
            <div className="news__articles-group">
              <div className="news__articles-content">
                <div className="news__articles-text--small">
                  <p>Topic</p>
                </div>
                <h4 className="news__articles-title"><a href="https://account.kp.org/broker-employer/resources/!ut/p/z1/hY9vS8MwEMY_TV-Gu7ZxSfcu6bpuahxT2Lq8GVkJtdCmpUbFb29ww3fag4P783se7kBDBdqZj7Yxvh2c6UJ_0otzXooNZY-IXKk1ipeNLJnicookieStringoUDnCcQ3RY4x8hMOj1D_LrUO6pxC1Tu4fimaehugH_eNyDbrrhcj341ftxGWGEn-NYD85b5-uQdooQ9GSb8BlUT8dZ9Fo501uojHPDu6ttH2Zvs0oz-bbugiy7K2gi-YLkMhYkjgtGMooZWaUyl4XgNBEMxn6dbYm-fKVd8w2UV0F5/dz/d5/L2dBISEvZ0FBIS9nQSEh/">COVID-19 (coronavirus) Target Clinics and MinuteClinic access changes</a></h4>
              </div>
            </div>
            <div className="news__articles-group">
              <div className="news__articles-content">
                <div className="news__articles-text--small">
                  <p>Topic</p>
                </div>
                <h4 className="news__articles-title"><a href="https://account.kp.org/broker-employer/resources/!ut/p/z1/hY9vS8MwEMY_TV-Gu7ZxSfcu6bpuahxT2Lq8GVkJtdCmpUbFb29ww3fag4P783se7kBDBdqZj7Yxvh2c6UJ_0otzXooNZY-IXKk1ipeNLJnicookieStringoUDnCcQ3RY4x8hMOj1D_LrUO6pxC1Tu4fimaehugH_eNyDbrrhcj341ftxGWGEn-NYD85b5-uQdooQ9GSb8BlUT8dZ9Fo501uojHPDu6ttH2Zvs0oz-bbugiy7K2gi-YLkMhYkjgtGMooZWaUyl4XgNBEMxn6dbYm-fKVd8w2UV0F5/dz/d5/L2dBISEvZ0FBIS9nQSEh/">Insider Insights: COVID-19 resources and more updates for you and your clients</a></h4>
              </div>
            </div>
            <div className="news__articles-group">
              <div className="news__articles-content">
                <div className="news__articles-text--small">
                  <p>Topic</p>
                </div>
                <h4 className="news__articles-title"><a href="https://account.kp.org/broker-employer/resources/!ut/p/z1/hY9vS8MwEMY_TV-Gu7ZxSfcu6bpuahxT2Lq8GVkJtdCmpUbFb29ww3fag4P783se7kBDBdqZj7Yxvh2c6UJ_0otzXooNZY-IXKk1ipeNLJnicookieStringoUDnCcQ3RY4x8hMOj1D_LrUO6pxC1Tu4fimaehugH_eNyDbrrhcj341ftxGWGEn-NYD85b5-uQdooQ9GSb8BlUT8dZ9Fo501uojHPDu6ttH2Zvs0oz-bbugiy7K2gi-YLkMhYkjgtGMooZWaUyl4XgNBEMxn6dbYm-fKVd8w2UV0F5/dz/d5/L2dBISEvZ0FBIS9nQSEh/">COVID-19 (coronavirus) Target Clinics and MinuteClinic access changes</a></h4>
              </div>
            </div>
            <div className="news__articles-link">
              <a href="#" data-analytics-type="link" data-analytics-click="See all news & annoucement"> See all news & annoucements</a>
            </div> 
          </div> 
        )
    }
}
export default ArticlesSmall;

function RegionLinkInit(){
function getCookieName(name) {
  var nameEquals = name + "=";
  var cookiesElement = document.cookie.split(';');
  for(var i=0;i < cookiesElement.length;i++) {
      var cookieVal = cookiesElement[i];
      while (cookieVal.charAt(0)==' ') cookieVal = cookieVal.substring(1,cookieVal.length);
      if (cookieVal.indexOf(nameEquals) == 0) return cookieVal.substring(nameEquals.length,cookieVal.length);
  }
  return null;
}
//commented out since this is coming from the browser
//tested in the console https://account.kp.org/
//var region = getCookieName('ImpSessionRoP');

var cookieRegionVal = 'CO';

function createRegionLink() {
  const regionValue = document.querySelector('.region__content');
  var RegionDataString = regionValue.getAttribute('data-region-object'),
  regionLink = document.querySelector('.news__articles-link a'),
  RegionObject = JSON.parse(RegionDataString);
 // console.log(RegionObject);
//  console.log(RegionObject.newsListings);
//console.log(RegionObject.newsListings.region);
var i;
for (i = 0; i < RegionObject.newsListings.length; ++i) {
    var RegionObjectVal= RegionObject.newsListings[i].region;
   if( cookieRegionVal === RegionObjectVal ) {
     var newRegionURL = RegionObject.newsListings[i].url;
    console.log(RegionObject.newsListings[i].url);
    regionLink.setAttribute("href", newRegionURL);
   }
}
}

function init(){
  createRegionLink();
}
init();
}
