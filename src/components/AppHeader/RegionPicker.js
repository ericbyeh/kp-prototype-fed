import React from 'react'
import polyfillInit from 'navigational-picker-pattern/src/polyfills'
import navigationalPickerInit from 'navigational-picker-pattern/src/navigational-picker';

class NavRegionPicker extends React.Component {
  componentDidMount() {
    this._handleLoad();
  }

  _handleLoad() {
    polyfillInit();
    navigationalPickerInit();
  }
  render() {
    return (
      <li className="region-selector" id="kp_region_selector-util">
      <div className="region-picker-container" data-keep-params="false">
        <div className="navigational-picker region-picker" id="navigational-picker--0">
          <div className="regionPicker">
            <button aria-expanded="false" aria-haspopup="listbox" className="navigational-select-dropdown"><span aria-hidden="true" className="screenreader-only">Choose your region</span> <span className="navigational-select-dropdown-value">Choose your region</span> <i aria-hidden="true" className="icon-chevron-down"></i></button>
            <ul className="navigational-select-dropdown__list" data-analytics-location="Region Picker" role="listbox">
              <li aria-selected="false" className="navigational-select-value region-select-value" data-region="California - Northern" data-region-id="MRN" data-region-uri="/northern-california" data-value="N. California" role="option" tabIndex="-1">
                <a href="#">California - Northern</a>
              </li>
              <li aria-selected="false" className="navigational-select-value region-select-value" data-region="California - Southern" data-region-id="SCA" data-region-uri="/southern-california" data-value="S. California" role="option" tabIndex="-1">
                <a href="#">California - Southern</a>
              </li>
              <li aria-selected="false" className="navigational-select-value region-select-value" data-region="Colorado - Denver / Boulder / Northern / Mountain areas" data-region-id="DB" data-region-uri="/colorado-denver-boulder-mountain-northern" data-value="Colorado - D/B/N/M" role="option" tabIndex="-1">
                <a href="#">Colorado - Denver / Boulder / Northern / Mountain areas</a>
              </li>
              <li aria-selected="false" className="navigational-select-value region-select-value" data-region="Colorado - Southern" data-region-id="CS" data-region-uri="/southern-colorado" data-value="S. Colorado" role="option" tabIndex="-1">
                <a href="#">Colorado - Southern</a>
              </li>
              <li aria-selected="false" className="navigational-select-value region-select-value" data-region="Georgia" data-region-id="GGA" data-region-uri="/georgia" data-value="Georgia" role="option" tabIndex="-1">
                <a href="#">Georgia</a>
              </li>
              <li aria-selected="false" className="navigational-select-value region-select-value" data-region="Hawaii" data-region-id="HAW" data-region-uri="/hawaii" data-value="Hawaii" role="option" tabIndex="-1">
                <a href="#">Hawaii</a>
              </li>
              <li aria-selected="false" className="navigational-select-value region-select-value" data-region="Maryland / Virginia / Washington, D.C." data-region-id="MID" data-region-uri="/maryland-virginia-washington-dc" data-value="Md. / Va. / D.C." role="option" tabIndex="-1">
                <a href="#">Maryland / Virginia / Washington, D.C.</a>
              </li>
              <li aria-selected="false" className="navigational-select-value region-select-value" data-region="Oregon / SW Washington" data-region-id="KNW" data-region-uri="/oregon-washington" data-value="Ore. / SW Wash." role="option" tabIndex="-1">
                <a href="#">Oregon / SW Washington</a>
              </li>
              <li aria-selected="false" className="navigational-select-value region-select-value" data-region="Washington" data-region-id="WA" data-region-uri="/washington" data-value="Washington" role="option" tabIndex="-1">
                <a href="#">Washington</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    );
  }
}

export default NavRegionPicker;
