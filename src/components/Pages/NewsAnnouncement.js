import React from 'react';
//Patterns
import BreadCrumb from "../AppBody/BreadCrumbs";
import PrintUtility from "../AppBody/PrintUtility";
import PromotionalComponent from "../AppBody/PromotionalComponent";
import Pagination from "../AppBody/Pagination/index2";
import RegionPicker from "../AppBody/RegionPicker";
import Articles from "../AppBody/Articles";

class NewsAnnouncement extends React.Component {
 
  render() {
    return (
<div className="main-body">
  <div className="main-body__container">
    <div className="rows">
      <div className="columns-10">
      </div>
      <div className="columns-2">
        <PrintUtility/>
      </div>
    </div>
  </div>
  <div className="main-body__container">
    <div className="rows">
      <div className="columns-11--center"> 
      
        <h1 className= "styling-1">News and Annoucements</h1>
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
      promotionalImage="http://fpoimg.com/240x150?text=Placeholder"
      promotionalImage2="http://fpoimg.com/200x172?text=Placeholder"
      promotionalImage3="http://fpoimg.com/600x312?text=Placeholder"
      promotionalContent="Donec facilisis turpis eget sollicitudin vulputate. Curabitur turpis ex, tempor mollis leo ut, fringilla feugiat turpis."
      promotionalLink=" Learn more"/>
      </div>
    </div>
  <div className="rows">
  <div className="columns-11--center"> 
      <Articles/>
      <hr></hr>
      <Pagination/>
</div>
</div>
</div>
</div>
    );
  }
}

export default NewsAnnouncement;

