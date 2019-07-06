// @ts-ignore
import React from 'react';
import './importIcons';
import './icon.scss';
import classes from './helpers/classes';

//svg能接受的属性都可以接受，并且事件的target为SVGElement
interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className,...restProps} = props;

    return (
        //svg就是就一个内联块元素(inline-block)
        <svg className={classes('fui-icon',className)}
             {...restProps}
        >
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
};

export default Icon;
