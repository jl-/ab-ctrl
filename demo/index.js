import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TooltipSingleton from '../src/tooltip/singleton';
import Tooltip from '../src/tooltip';
import Dropdown from '../src/dropdown';
import Popup from '../src/popup';

import './index.scss';

function genTooltip(align, trigger) {
  return (
    <Tooltip className='tooltip-item'>
      <Tooltip.Trigger>{trigger}</Tooltip.Trigger>
      <Tooltip.Content align={align}>
        <mark>Tooltip Content</mark>
      </Tooltip.Content>
    </Tooltip>
  );
}

class Demo extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className='wrapper'>
        <dl>
          <dt>Tooltip</dt>
          <dd>
            <dl>
              <dt>Singleton</dt>
              <dd>
                <span className='tooltip-item' data-tooltip='Tooltip content' data-tooltip-align='tc'>top center</span>
                <span className='tooltip-item' data-tooltip='Tooltip content' data-tooltip-align='bc'>bottom center</span>
                <span className='tooltip-item' data-tooltip='Tooltip content' data-tooltip-align='lc'>left center</span>
                <span className='tooltip-item' data-tooltip='Tooltip content' data-tooltip-align='rc'>right center</span>
              </dd>
              <dt>Nested</dt>
              <dd>
                {genTooltip('tc', 'top center')}
                {genTooltip('bc', 'bottom center')}
                {genTooltip('lc', 'left center')}
                {genTooltip('rc', 'right center')}
              </dd>
            </dl>
          </dd>

          <dt>Dropdown</dt>
          <dd>
            <Dropdown>
              <Dropdown.Trigger>Dropdown Trigger</Dropdown.Trigger>
              <Dropdown.Content>
                Dropdown Content
                <ul>
                  <li>item1</li>
                  <li>item2</li>
                  <li>item3</li>
                </ul>
              </Dropdown.Content>
            </Dropdown>
          </dd>

          <dt>Popup</dt>
          <dd>
            <Popup triggerType='click'>
              <Popup.Trigger>Popup Trigger</Popup.Trigger>
              <Popup.Content>
                Popup Content
              </Popup.Content>
            </Popup>
          </dd>
        </dl>


        <TooltipSingleton />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo></Demo>
  ,document.querySelector('#demo')
);

