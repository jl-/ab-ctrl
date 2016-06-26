import React, { Component } from 'react';
import ABCtrl from '../index';

class Popup extends Component {
  render() {
    return <ABCtrl triggerType='click' ignoreBlur={true} {...this.props} variant='popup' />;
  }
}

Popup.Trigger = ABCtrl.Trigger;
Popup.Content = ABCtrl.Content;

export default Popup;

