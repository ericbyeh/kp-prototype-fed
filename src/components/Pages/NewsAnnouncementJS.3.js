import React from 'react';
//Patterns
import BreadCrumb from "../AppBody/BreadCrumbs";
import PrintUtility from "../AppBody/PrintUtility";
import PromotionalComponent from "../AppBody/PromotionalComponent";
import Pagination from "../AppBody/Pagination";
import RegionPicker from "../AppBody/RegionPicker";

class NewsAnnouncementJS3 extends React.Component {
 
  render() {
    return (
<div className="main-body">
  <div className="main-body__container">
    <div className="rows">
      <div className="columns-10">
        <BreadCrumb BreadCrumbTextParentPage='Overview' BreadCrumbText1='Employer' BreadCrumbText2='News and Annoucements'/>
      </div>
      <div className="columns-2">
        <PrintUtility/>
      </div>
    </div>
  </div>
  <div className="main-body__container">
    <div className="rows">
      <div className="columns-11--center"> 
      
        <h1 className= "styling-1">Page 3</h1>
        <p>Vestibulum et tortor nisl. Morbi in nisl tincidunt <a hre="#" target="_blank"> Get a Quote</a>, consequat eros euismod, Applying for coverage feugiat lectus. Cras a dui nec nunc mattis fermentum Enrollment information.</p>
      </div>
    </div>
  </div>
  <div className="main-body__container">
  <div className="rows">
    <div className="columns-11--center">
     <RegionPicker/>
     </div>
     </div>
    <div className="rows">
    <div className="columns-11--center">
      <PromotionalComponent  promotionalTitle="Pinned News Item" 
      promotionalImage="../_images/news-main-image.jpg"
      promotionalImage2="../_images/news-main-image.jpg"
      promotionalImage3="../_images/news-main-image.jpg"
      promotionalContent="Donec facilisis turpis eget sollicitudin vulputate. Curabitur turpis ex, tempor mollis leo ut, fringilla feugiat turpis."
      promotionalLink=" Learn more"/>
      </div>
    </div>
  <div className="rows">
  <div className="columns-11--center"> 
      <Pagination/>
      </div>
</div>
</div>
</div>
    );
  }
}

export default NewsAnnouncementJS3;

