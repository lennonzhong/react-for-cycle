import React, { Component } from 'react';
import { Carousel } from 'antd';
class Carousels extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onChange=(a, b, c) =>{
        console.log(a, b, c);
      }
    render() { 
        return ( 
            <div className="carousel">
                 <Carousel afterChange={this.onChange}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        );
    }
}
 
export default Carousels;