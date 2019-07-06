// @ts-ignore
import React from 'react';
import './importIcons'
import './icon.scss'

interface IconProps {
    name: string;
    onClick: React.MouseEventHandler<SVGElement|SVGUseElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        //svg就是就一个内联块元素(inline-block)
        <svg className="fui-icon" onClick={props.onClick}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
};

export default Icon;
