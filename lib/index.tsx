// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from "react-dom";
import Icon from './icon/icon';

//这里e不用在写type了，可以根据函数的type推测出
const fn: React.MouseEventHandler = (e) => {
    console.log(e);
};

ReactDOM.render(<div>
    <Icon name="wechat"
          onClick={fn}
          onMouseEnter={()=>console.log('enter')}
          onMouseLeave={()=>console.log('leave')}
    />
</div>, document.querySelector('#root'));
