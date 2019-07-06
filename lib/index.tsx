// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from "react-dom";
import Icon from './icon';

const fn = (e: React.MouseEvent<SVGElement | SVGUseElement>) => {
    console.log('e:', e);
    console.log(e.target);
    // console.log(e.target.width); //会爆红，因为target不一定会有宽度属性，图片有，div没有，所以上面还往下传了 SVGElement | SVGUseElement
    console.log((e.target as SVGUseElement).href); //断言，断言不能太离谱
};

ReactDOM.render(<div>
    <Icon name="wechat" onClick={fn}/>
</div>, document.querySelector('#root'));
