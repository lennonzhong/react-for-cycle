import React, { Component } from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

import NoMatch from '../components/noMatch';
import Admin from '../components/admin';
import Home from '../components/home';
import Buttons from '../components/ui/buttons';
import Modals from '../components/ui/modal';
import MessageComponent from '../components/ui/message'
import Gallary from '../components/ui/gallery';
import Carousel from '../components/ui/carousel';
import LoginForm from '../components/form/login';
class Routers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <HashRouter>
                 <div className="frame-work">
                        {this.props.children}
                    </div>
                <Switch>
                    {/* // 特殊的向上 */}
                    <Route path="/" render={()=>{
                        return <Admin>
                                    <Switch>
                                        <Route path="/" exact component={Home}></Route>
                                        <Route path="/ui/buttons" component={Buttons}></Route>
                                        <Route path="/ui/modals" component={Modals}></Route>
                                        <Route path="/ui/messages" component={MessageComponent}></Route>
                                        <Route path="/ui/gallery" component={Gallary}></Route>
                                        <Route path="/ui/carousel" component={Carousel}></Route>
                                        <Route path="/form/login" component={LoginForm}></Route>
                                        <Route component={NoMatch}></Route>
                                    </Switch>
                                </Admin>
                       }}>
                    </Route>
                    <Route component={NoMatch}></Route>
                </Switch>
            </HashRouter>
        );
    }
}
 
export default Routers;