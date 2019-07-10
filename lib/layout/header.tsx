import React from 'react';
import {classes, scopedClassMaker} from "../helpers/classes";
const sc = scopedClassMaker('fui-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{}

const Header: React.FunctionComponent<Props> = (props) => {
  const {className,...rest} = props;

  return (
    <div className={classes(sc('header'), className)} {...rest}>
      {props.children}
    </div>
  )
};

export default Header;
