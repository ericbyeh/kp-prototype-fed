import React from 'react'
import { naturalLangDropdownInit } from 'form-pattern/src/natural-lang-dropdown';

class RegionFilter extends React.Component {
  componentDidMount() {
    this._handleLoad();
  }

  _handleLoad() {
    naturalLangDropdownInit();
    RegionFilterInit();
  }
  render() {
    return (
<div class="natural-lang-dropdown-group -variation-2">
    <div class="natural-lang-dropdown-label">
      <label for="filterLocation"> select a region</label>
    </div>
    <div class="natural-lang-dropdown-field">
      <span aria-hidden="true" class="natural-lang-dropdown-option"></span>
      <select class="natural-lang-dropdown-select filterTags" id="filterLocation">
        <option value="California">California</option>
        <option  value="Colorado">Colorado</option>  
        <option  value="Oregon">Oregon</option>      
      </select>
      <span aria-hidden="true" class="icon-chevron-down"></span>
      <span class="natural-lang-dropdown-underline"></span>
    </div>
  </div>
    );
  }
}

export default RegionFilter;
function RegionFilterInit() {
var sels = document.querySelector('.filterTags');


 function showRegionContent (){
  var selectionID = sels.id;
  if(selectionID === "filterLocation"){
        var selectedLocation = document.getElementById("filterLocation").value;
        var locationWrapper = document.getElementsByClassName('tags-locations')[0].getElementsByClassName('location');
        for(var i = 0; i < locationWrapper.length; i++){
            if(selectedLocation == "All" || locationWrapper[i].id == selectedLocation){
              locationWrapper[i].style.display = "block";
            }
            else{
              locationWrapper[i].style.display = "none";
            }
        }
    }
 }
 function addEventListener(){
  sels.addEventListener('change', function() {
    showRegionContent();
  }, false);
 }
 function init(){
  showRegionContent();
  addEventListener();
 }
 init();
}
