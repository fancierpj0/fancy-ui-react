// @ts-ignore
import React from 'react';
import './importIcons'
import './icon.scss'

interface IconProps {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        //svg就是就一个内联块元素(inline-block)
        <svg className="fui-icon">
            <use xlinkHref={`#${props.name}`}></use>
        </svg>

    )
};

export default Icon;
