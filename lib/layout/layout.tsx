import React, {ReactElement} from 'react';
import './layout.scss';

import {classes, scopedClassMaker} from "../helpers/classes";
import Aside from "./aside";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

const sc = scopedClassMaker('fui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: Array<ReactElement>;
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;

  const hasAside = props.children.some(c => c.type === Aside);

  return (
    <div className={classes(sc(), hasAside ?sc( 'hasAside'):'', className)} {...rest}>
      {props.children}
    </div>
  )
};

export default Layout;
export {Header, Aside, Content, Footer, Layout};
