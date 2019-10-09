import React, { Component } from 'react';
import './app.less';
import { Row, Col } from 'antd';
import NavLeft from '../nav';
import Header from './../header';
import Footer from './../footer';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (

            <div className="app-wrapper">
                <Row>
                    <Col span={4}>
                        <NavLeft></NavLeft>
                    </Col>
                    <Col span={20}>
                        <div className="content-right">
                            <Header></Header>
                            <div className="container">
                                {this.props.children}
                            </div>
                            <Footer></Footer>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default App;