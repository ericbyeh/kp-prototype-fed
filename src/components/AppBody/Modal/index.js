import React, { Component } from 'react';
import { modalInit } from 'modal-pattern/src/modal';

class Modal extends React.Component {
  constructor() {
    super();
    this._handleLoad = this._handleLoad.bind(this);
  }

  componentDidMount() {
    this._handleLoad();
  }

  _handleLoad() {
    modalInit();
  }

  render() {
    return (
      <div id="example-modal-one" aria-hidden="true" class="modal-pattern" data-analytics-location="example-modal-one">
      <div class="modal-container"> 
        <div class="modal-inner" role="dialog" aria-label="Modal Heading">
          <button class="-close--small" data-dismiss="x-close" aria-label="Close" data-analytics-type="button" data-analytics-click="Close [X] Modal"></button>
          <div class="modal-header -left">
            <p class="modal-title" id="modal-header"><i class="icon-none -icon-notification" aria-hidden="true"></i>{this.props.modalTitle}</p>
          </div>
          <div class="modal-content"> 
            <div class="modal-content-body">
              <p>{this.props.modalContent}</p>
            </div>
            <div class="modal-actions">
              <div class="modal-buttons -right">
                <button class="button -inverted -cancel">Secondary Action</button>
                <button class="button -continue">Primary Action</button>        
              </div>
            </div>
          </div>
        </div>
        <div class="modal-fade-screen"></div>
      </div>
    </div>
    );
  }
}

export default Modal;
