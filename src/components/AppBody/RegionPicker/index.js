import React from 'react'
import polyfillInit from 'navigational-picker-pattern/src/polyfills'
import navigationalPickerInit from 'navigational-picker-pattern/src/navigational-picker';

class RegionPicker extends React.Component {
  componentDidMount() {
    this._handleLoad();
  }

  _handleLoad() {
    polyfillInit();
    navigationalPickerInit();
  }
  render() {
    return (
  <div class="navigational-picker region-body-picker">
    <div class="regionBodyPicker">
      <button aria-expanded="false" aria-haspopup="listbox" class="navigational-select-dropdown">
        <span class="screenreader-only">Your Region</span>
        <span class="navigational-select-dropdown-value">N. California</span>
        <i aria-hidden="true" class="icon-chevron-down"></i>
      </button>
      <ul class="navigational-select-dropdown__list" role="listbox" data-analytics-location="Region Picker">
        <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="N. California" tabindex="-1">
          <a href="#" data-analytics-type="link" data-analytics-click="N. California">California - Northern</a>
        </li>
        <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="S. California" tabindex="-1">
          <a href="#" data-analytics-type="link" data-analytics-click="S. California">California - Southern</a>
        </li>
        <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="Colorado - D/B/N/M" tabindex="-1">
          <a href="#" data-analytics-type="link" data-analytics-click="Colorado - D/B/N/M">Colorado - Denver / Boulder / Northern / Mountain areas</a>
        </li>
        <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="S. Colorado" tabindex="-1">
          <a href="#" data-analytics-type="link" data-analytics-click="S. Colorado">Colorado - Southern</a>
        </li>
        <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="Georgia" tabindex="-1">
          <a hhref="#" data-analytics-type="link" data-analytics-click="Georgia">Georgia</a>
        </li>
        <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="Hawaii" tabindex="-1">
          <a href="#" data-analytics-type="link" data-analytics-click="Hawaii">Hawaii</a>
        </li>
        <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="Md. / Va. / D.C." tabindex="-1">
          <a href="#" data-analytics-type="link" data-analytics-click="Md. / Va. / D.C.">Maryland / Virginia / Washington, D.C.</a>
        </li>
        <li role="option" aria-selected="false" class="navigational-select-value region-select-value" data-value="Ore. / Wash." tabindex="-1">
          <a href="#" data-analytics-type="link" data-analytics-click="Ore. / Wash.">Oregon / Washington</a>
        </li>
      </ul>
    </div>
  </div>
    );
  }
}

export default RegionPicker;
