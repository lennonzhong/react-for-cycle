import React, { Component } from 'react';
import { Button } from "antd";
import './style/app.less';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="test">
                <Button type="primary">按钮1</Button>  
            </div>
         );
    }
}
 
export default App;