import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from "./lib/layout/layout.example";
import {Layout, Aside, Header, Content, Footer} from "./lib/layout/layout";
import './example.scss';

const logo = require('./logo.jpg');

ReactDOM.render((
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="48" height="48" alt="logo"/>
          <span>Fancy-UI</span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">layout</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; Vennasia
      </Footer>
    </Layout>
  </Router>
), document.querySelector('#root'))
