import React, { Component } from 'react';
import { Row, Col } from "antd";
import Utils from "./../../utils/utils";
import Axios from "./../../utils/axios";
import './header.less';

import {connect} from "react-redux";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            weatherData: {}
         }
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        setInterval(() => {
            let sysTime = Utils.formateDate(new Date());
            this.setState({ sysTime})
        }, 1000);

        this.getWeatherData();
    }

    getWeatherData = () => {
        let city = '成都';

        Axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then(data => {
            if(data.status=='success'){
                this.setState({
                    weatherData: data.results[0]['weather_data'][0]
                })
            }
        })
    }
    render() { 
        return ( 
            <div className="header">
                <Row className="header-top"> 
                    <span>欢迎，河畔一角</span>
                    <span className="exit">
                        <a href="#" className="btn-exit" onClick={this.exitSystem}>退出</a>
                    </span>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-brand">
                        {this.props.title}
                    </Col>
                    <Col span={20} className="breadcrumb-info">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather"><img className="logo" src={this.state.weatherData.dayPictureUrl} alt="weather"></img>{this.state.weatherData.weather}</span>
                    </Col>
                </Row>
            </div>
        );
    }
    exitSystem =()=>{

    }
}

const mapStateToProps =(state)=>{
    return {
        title: state.titleReducer.menu_title
    }
}

export default connect(mapStateToProps)(Header);