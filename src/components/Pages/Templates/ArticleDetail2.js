/*eslint-disable */
import React from 'react';

//Patterns
import PrintUtility from "../../AppBody/PrintUtility";
import SocialShare from "../../AppBody/SocialShare";
import Sidebar from '../../AppBody/SideNavigation';
import BackLink from "../../AppBody/BackLink";

class ArticleDetail2 extends React.Component {
 
  render() {
    return (
      <div className="main-body">
        <div className="main-body__container">
          <div className="row">
            <div className="columns-10">
              <BackLink/>
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
                <div className="columns-10">
                  <h1>Title</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3> Secondary title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, tellus quis bibendum imperdiet, felis purus fringilla tortor, in suscipit mauris felis nec velit. Cras at ante risus. Curabitur rutrum porttitor justo et vestibulum. Nullam consequat felis eget accumsan hendrerit. Praesent sagittis nec tellus blandit tincidunt. Vivamus nibh tellus, placerat eu velit lobortis, hendrerit molestie nunc. Morbi dictum sit amet turpis ac gravida. In hac habitasse platea dictumst. Sed sodales velit malesuada turpis pellentesque, eget tristique erat pharetra.</p>
                <h3> Secondary title</h3>
                <p>Nulla dictum dignissim nisi, at porttitor velit semper sit amet. Duis sapien felis, sagittis pharetra elementum sed, fermentum eu nisi. Curabitur ac odio non eros rhoncus ullamcorper quis at ipsum. Vivamus eget ex lacus. Morbi id magna tristique massa venenatis euismod. Etiam odio libero, tempus nec sapien sit amet, lacinia consectetur neque. Aenean vehicula, arcu accumsan mattis pharetra, erat urna cursus ex, vel porta diam enim eget tortor. Quisque eleifend sapien hendrerit lorem maximus condimentum. Nulla facilisis tortor nec velit lacinia vehicula. Fusce commodo condimentum sem eu ullamcorper. Donec quis volutpat ex, id suscipit metus. Quisque id mi augue. Nunc pellentesque laoreet lectus, eget venenatis massa scelerisque vel. Aliquam pretium molestie diam, id cursus risus luctus nec. Nulla sed sodales libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <ul>
                  <li>Curabitur rutrum vehicula mi eu fringilla. Aenean ac nulla et purus faucibus facilisis. </li>
                  <li>Aenean finibus odio ac velit interdum porta.</li>
                  <li>Proin rutrum varius odio, eget dignissim lectus consequat ac.</li>
                  <li>Aliquam quis mauris eu arcu congue facilisis.</li>
                </ul>
                </div>
                <div className="columns-10">
                <hr></hr>
                  <h5> Share</h5>
                  <SocialShare/>
                  <p class="-dolphin">Last updated by Mark C, MD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default ArticleDetail2;