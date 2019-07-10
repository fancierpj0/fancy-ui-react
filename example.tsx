import React from 'react';
import ReactDOM from 'react-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render((
    <Router>
        <div>
            <header className="logo">
                <div>
                    Fancy-UI
                </div>
            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <Link to="/icon">icon</Link>
                        <Link to="/dialog">dialog</Link>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                </main>
            </div>
        </div>
    </Router>
), document.querySelector('#root'))
