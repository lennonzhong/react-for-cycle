import React, { Component } from 'react';
import { Card, Modal, Row, Col } from "antd";
const imgs = [
    ['1.png', '2.png', '3.png', '4.png', '5.png'],
    ['6.png', '7.png', '8.png', '9.png', '10.png'],
    ['11.png', '12.png', '13.png', '14.png', '15.png'],
    ['16.png', '17.png', '18.png', '19.png', '20.png'],
    ['21.png', '22.png', '23.png', '24.png', '25.png']
]
class Gallary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageList: [],
            visible: false,
            currentImg: '1.png',
        }
    }
    openGallery= (item)=>{
        this.setState({
            visible: true,
            currentImg: item,
        })
    }
    render() {
       

        this.imageList = imgs.map(rows => rows.map(item=>{
            return <Card  key={item} style={{marginBottom:10}}
            cover={<img src={'/gallery/'+item} onClick={()=>this.openGallery(item)}/>}>
                 <Card.Meta
                    title="React Admin"
                    description="I Love Imooc"
                />
            </Card>
        }))
        return (
            <div>
                <Row gutter={10}>
                    <Col span={5}>
                        {this.imageList[0]}
                    </Col>
                    <Col span={5}>{this.imageList[1]}</Col>
                    <Col span={5}>{this.imageList[2]}</Col>
                    <Col span={5}>{this.imageList[3]}</Col>
                    <Col span={4}>{this.imageList[4]}</Col>
                </Row>

                <Modal
                    title="图片画廊"
                    width={300}
                    height={500}
                    visible={this.state.visible}
                    onCancel={()=>{this.setState({visible: false})}}
                    >
                     <img src={'/gallery/' +this.state.currentImg} alt="" style={{width:'100%'}}></img>
                </Modal>
            </div>
        );
    }
}
 
export default Gallary;