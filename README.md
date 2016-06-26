# [Demo](https://jl-.github.io/ab-ctrl/)

```
npm i ab-ctrl --save
```

---
```javascript
import React, { Component } from 'react';

import ABCtrl from 'ab-ctrl';
import TooltipSingleton from 'ab-ctrl/tooltip/singleton';
import Tooltip from 'ab-ctrl/tooltip';
import Dropdown from 'ab-ctrl/dropdown';
import Popup from 'ab-ctrl/popup';

class Demo extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const { value } = this.state;
    return (
      <ABCtrl>
        <ABCtrl.Trigger></ABCtrl.Trigger>
        <ABCtrl.Content></ABCtrl.Content>
      </ABCtrl>
    );
  }
}
```
<ABCtrl
  triggerType // string, 'hover|click'
  interactive // boolean,
  onActive // function
  onDeactive // function
  ignoreBlur // boolean
  toggleable // boolean
>
  <ABCtrl.Trigger
    component // react component or tag, default is 'div'
  >
  <ABCtrl.Content
    align // string, 'tl|tc|tr|rt|rc|rb|br|bc|bl|lb|lc|lt'
    onClick // function => should close on content click or not
  >
  </ABCtrl.Content>
  </ABCtrl.Trigger>
</ABCtrl>
```

```
// special usage for singleton tooltip
import TooltipSingleton from 'ab-ctrl/tooltip/singleton';

// only once in the whole app
<TooltipSingleton />

//
<span data-tooltip='Tooltip content' data-tooltip-align='bc'>bottom center</span>

```
