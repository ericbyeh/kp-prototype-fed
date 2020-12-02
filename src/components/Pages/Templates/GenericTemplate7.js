/*eslint-disable */
import React from 'react';

//Patterns
import BreadCrumb from "../../AppBody/BreadCrumbs";
import ContentToggle2 from '../../AppBody/ContentToggle/indexExtra';
import PrintUtility from "../../AppBody/PrintUtility";
import RegionPicker from "../../AppBody/RegionPicker";

class GenericTemplate7 extends React.Component {
 
  render() {
    return (
    <div className="main-body">
      <div className="main-body__container">
        <div className="row">
          <div className="columns-10">
            <BreadCrumb BreadCrumbTextParentPage='Overview' BreadCrumbText1='Link 1' />
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
                <h1 class= "styling-1">Easily manage your book of business online</h1>
                <p>Spend less time on paperwork and more time building your business. Register for account.kp.org to administer your health plan easily and conveniently.</p>
                <div class="video-player"> 
                  <img src="http://placehold.it/777x435.gif" alt="hero banner image" />
                  <div class="video-player__description"></div>
                </div>
              </div>
              <div className="columns-10">
              <h3>View and pay bills</h3>
              <p> Review our Broker <a href='#'>Essentials guide (PDF)</a> to familiarize yourself with Kaiser Permanente and the resources you need to grow your business. <br></br><br></br></p>
              <h3>View documents</h3>
                <p>View and store key client documents completely online — no need to print and file paperwork. <br></br><br></br></p>
                <h3>Manage members</h3>
                <p>Make membership enrollments and changes quickly and conveniently. With account.kp.org, you can:</p> 
                <ul>
                  <li>Upload multiple member enrollments in one batch</li>
                  <li>Search by member and view a list of members</li>
                  <li>Add, change, and view members’ information</li>
                  <li>Add a family member to an existing account</li>
                  <li>Request member ID cards</li>
                </ul>
                <div class="rows">
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">Manage members overview</a></h4>
                      </div>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">Navigate the website</a></h4>
                      </div>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">View your online transaction history</a></h4>
                      </div>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">Online tools and resources.</a></h4>
                      </div>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">Upload and view a Member Arbitration Agreement</a></h4>
                      </div>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">Update member information</a></h4>
                      </div>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">Find a group or subgroup</a></h4>
                      </div>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif/"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">Find a member</a></h4>
                      </div>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <h4><a href="#">Online tools and resources.</a></h4>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">Enroll members</a></h4>
                      </div>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">Enroll multiple members at once</a></h4>
                      </div>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">View and download a list of members</a></h4>
                      </div>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">Terminate members</a></h4>
                      </div>
                    </div>
                  </div>
                  <div class="columns-6">
                    <div class="video-thumbnail">
                      <img alt="hero banner image" src="http://placehold.it/380x213.gif"/>
                      <div class="video-thumbnail__description">
                        <h4><a href="#">Request member ID cards</a></h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default GenericTemplate7;