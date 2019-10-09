import React, { Component } from 'react';
import { Card, Button,Message } from "antd";
import './ui.less';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    pressButton =(type)=> {
        Message[type](`This is a ${type} message`)
    }
    render() { 
        return ( 
            <div className="message">
                 <Card title="message提示框" className="card-wrap">
                    <Button onClick={()=> this.pressButton('success')}>Success</Button>
                    <Button onClick={()=> this.pressButton('error')}>Error</Button>
                    <Button onClick={()=> this.pressButton('warning')}>Warning</Button>
                    <Button onClick={()=> this.pressButton('loading')}>loading</Button>
                 </Card>
            </div>
        );
    }
}
 
export default Messages;