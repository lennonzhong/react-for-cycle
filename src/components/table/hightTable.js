import React, { Component } from 'react';
import {Card,Table  } from "antd";
import axios from "./../../utils/axios"
class HeightTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title:'id',
                    key:'id',
                    dataIndex:'id',
                    width: 100,
                    fixed: 'left',
                },
                {
                    title: '用户名',
                    key: 'username',
                    dataIndex: 'username',
                    width: 100,
                },
                {
                    title: '年龄',
                    key: 'age',
                    dataIndex: 'age',
                    width: 100,
                    sorter:(a,b)=>{
                        return a.age - b.age;
                    }
                },
                {
                    title: '性别',
                    key: 'sex',
                    dataIndex: 'sex',
                    width: 100,
                    render(sex){
                        return sex ==1 ?'男':'女'
                    }
                },
                {
                    title: '状态',
                    key: 'state',
                    dataIndex: 'state',
                    width: 100,
                    render(state){
                        let config  = {
                            '1':'咸鱼一条',
                            '2':'风华浪子',
                            '3':'北大才子',
                            '4':'百度FE',
                            '5':'创业者'
                        }
                        return config[state];
                    }
                },
                {
                    title: '爱好',
                    key: 'interest',
                    dataIndex: 'interest',
                    width: 100,
                    render(abc) {
                        let config = {
                            '1': '游泳',
                            '2': '打篮球',
                            '3': '踢足球',
                            '4': '跑步',
                            '5': '爬山',
                            '6': '骑行',
                            '7': '桌球',
                            '8': '麦霸'
                        }
                        return config[abc];
                    }
                },
                {
                    width: 100,
                    title: '生日',
                    key: 'birthday',
                    dataIndex: 'birthday'
                },
                {
                    width: 100,
                    title: '地址',
                    key: 'address',
                    dataIndex: 'address'
                },
                {
                    width: 100,
                    title: '早起时间',
                    key: 'time',
                    dataIndex: 'time'
                }
            ],
            dataSource: []
        }
    }
    request =() => {
        axios.$ajax({
            url:'/table/list',
            data:{
                params:{
                    page: 1
                }
            }
        }).then(res =>{
            if(res.code == 0){
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource:res.result.list
                })
            }
        })
    }


    componentDidMount() {
        // this.request();
        this.setState({
            dataSource: [{"id":1,"username":"Jack","sex":2,"age":12,"state":5,"interest":8,"isMarried1":1,"isMarried2":0,"isMarried3":1,"isMarried4":0,"isMarried5":1,"isMarried6":1,"isMarried7":0,"isMarried8":1,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":2,"username":"Jack","sex":1,"age":18,"state":3,"interest":7,"isMarried1":0,"isMarried2":1,"isMarried3":0,"isMarried4":0,"isMarried5":0,"isMarried6":0,"isMarried7":0,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":3,"username":"Jack","sex":1,"age":27,"state":3,"interest":6,"isMarried1":1,"isMarried2":1,"isMarried3":1,"isMarried4":1,"isMarried5":0,"isMarried6":1,"isMarried7":0,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":4,"username":"Jack","sex":1,"age":43,"state":4,"interest":5,"isMarried1":1,"isMarried2":0,"isMarried3":0,"isMarried4":0,"isMarried5":0,"isMarried6":1,"isMarried7":1,"isMarried8":1,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":5,"username":"Jack","sex":2,"age":38,"state":3,"interest":3,"isMarried1":1,"isMarried2":0,"isMarried3":1,"isMarried4":1,"isMarried5":1,"isMarried6":0,"isMarried7":1,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":6,"username":"Jack","sex":2,"age":29,"state":4,"interest":5,"isMarried1":0,"isMarried2":1,"isMarried3":1,"isMarried4":0,"isMarried5":0,"isMarried6":1,"isMarried7":1,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":7,"username":"Jack","sex":1,"age":42,"state":4,"interest":7,"isMarried1":1,"isMarried2":0,"isMarried3":0,"isMarried4":0,"isMarried5":1,"isMarried6":0,"isMarried7":0,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":8,"username":"Jack","sex":1,"age":21,"state":4,"interest":5,"isMarried1":0,"isMarried2":1,"isMarried3":0,"isMarried4":0,"isMarried5":0,"isMarried6":1,"isMarried7":1,"isMarried8":1,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":9,"username":"Jack","sex":1,"age":23,"state":3,"interest":3,"isMarried1":1,"isMarried2":1,"isMarried3":0,"isMarried4":0,"isMarried5":0,"isMarried6":1,"isMarried7":0,"isMarried8":1,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":10,"username":"Jack","sex":2,"age":29,"state":5,"interest":3,"isMarried1":1,"isMarried2":1,"isMarried3":1,"isMarried4":0,"isMarried5":1,"isMarried6":0,"isMarried7":0,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":11,"username":"Jack","sex":1,"age":24,"state":3,"interest":5,"isMarried1":0,"isMarried2":1,"isMarried3":0,"isMarried4":0,"isMarried5":1,"isMarried6":1,"isMarried7":0,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":12,"username":"Jack","sex":1,"age":44,"state":1,"interest":3,"isMarried1":1,"isMarried2":1,"isMarried3":1,"isMarried4":1,"isMarried5":1,"isMarried6":1,"isMarried7":0,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":13,"username":"Jack","sex":2,"age":47,"state":1,"interest":7,"isMarried1":0,"isMarried2":0,"isMarried3":1,"isMarried4":1,"isMarried5":0,"isMarried6":1,"isMarried7":0,"isMarried8":1,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":14,"username":"Jack","sex":1,"age":14,"state":3,"interest":1,"isMarried1":1,"isMarried2":0,"isMarried3":1,"isMarried4":1,"isMarried5":1,"isMarried6":1,"isMarried7":1,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":15,"username":"Jack","sex":1,"age":13,"state":3,"interest":7,"isMarried1":0,"isMarried2":1,"isMarried3":1,"isMarried4":1,"isMarried5":0,"isMarried6":1,"isMarried7":0,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":16,"username":"Jack","sex":1,"age":42,"state":1,"interest":6,"isMarried1":0,"isMarried2":1,"isMarried3":1,"isMarried4":0,"isMarried5":1,"isMarried6":1,"isMarried7":0,"isMarried8":1,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":17,"username":"Jack","sex":2,"age":17,"state":4,"interest":7,"isMarried1":1,"isMarried2":0,"isMarried3":1,"isMarried4":1,"isMarried5":0,"isMarried6":0,"isMarried7":1,"isMarried8":1,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":18,"username":"Jack","sex":2,"age":14,"state":3,"interest":5,"isMarried1":0,"isMarried2":1,"isMarried3":1,"isMarried4":1,"isMarried5":1,"isMarried6":0,"isMarried7":1,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":19,"username":"Jack","sex":2,"age":18,"state":1,"interest":7,"isMarried1":0,"isMarried2":1,"isMarried3":0,"isMarried4":1,"isMarried5":1,"isMarried6":1,"isMarried7":1,"isMarried8":1,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":20,"username":"Jack","sex":1,"age":34,"state":3,"interest":5,"isMarried1":1,"isMarried2":1,"isMarried3":1,"isMarried4":1,"isMarried5":0,"isMarried6":0,"isMarried7":1,"isMarried8":1,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":21,"username":"Jack","sex":1,"age":44,"state":3,"interest":8,"isMarried1":0,"isMarried2":0,"isMarried3":1,"isMarried4":1,"isMarried5":1,"isMarried6":1,"isMarried7":1,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":22,"username":"Jack","sex":2,"age":42,"state":3,"interest":5,"isMarried1":1,"isMarried2":1,"isMarried3":0,"isMarried4":0,"isMarried5":1,"isMarried6":1,"isMarried7":1,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":23,"username":"Jack","sex":1,"age":46,"state":3,"interest":4,"isMarried1":1,"isMarried2":1,"isMarried3":1,"isMarried4":1,"isMarried5":0,"isMarried6":0,"isMarried7":0,"isMarried8":0,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":24,"username":"Jack","sex":1,"age":34,"state":1,"interest":5,"isMarried1":0,"isMarried2":0,"isMarried3":1,"isMarried4":0,"isMarried5":1,"isMarried6":0,"isMarried7":0,"isMarried8":1,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"},{"id":25,"username":"Jack","sex":1,"age":14,"state":4,"interest":7,"isMarried1":1,"isMarried2":1,"isMarried3":1,"isMarried4":1,"isMarried5":1,"isMarried6":1,"isMarried7":1,"isMarried8":1,"birthday":"2000-01-01","address":"北京市海淀区","time":"09:00:00"}]
        })
    }
    render() { 
        return (
            <div>
                 <Card title="高级表格">
                    <Table
                            bordered
                            columns={this.state.columns}
                            dataSource={this.state.dataSource}
                            pagination={false}
                            scroll={{ y: 300 , x: 805}}
                        />
                </Card>
            </div>
        );
    }
}
 
export default HeightTable;