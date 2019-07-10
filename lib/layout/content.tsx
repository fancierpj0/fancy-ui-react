import React from 'react';
import {classes, scopedClassMaker} from "../helpers/classes";
const sc = scopedClassMaker('fui-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{}

const Content: React.FunctionComponent<Props> = (props) => {
  const {className,...rest} = props;

  return (
    <div className={classes(sc('content'), className)} {...rest}>
      {props.children}
    </div>
  )
};

export default Content;
