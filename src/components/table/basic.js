import React, { Component } from 'react';
import { Card, Table } from "antd";
import axios from "./../../utils/axios"
export default class BasicTable extends Component{
    constructor(props) {
        super(props);
        let _this = this;
        this.state = {
            selectedRowKeys: [],
            columns: [
                {
                    title:'id',
                    key:'id',
                    dataIndex:'id'
                },
                {
                    title: '用户名',
                    key: 'userName',
                    dataIndex: 'userName'
                },
                {
                    title: '性别',
                    key: 'sex',
                    dataIndex: 'sex',
                    render(sex){
                        return sex ==1 ?'男':'女'
                    }
                },
                {
                    title: '状态',
                    key: 'state',
                    dataIndex: 'state',
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
                    title: '生日',
                    key: 'birthday',
                    dataIndex: 'birthday'
                },
                {
                    title: '地址',
                    key: 'address',
                    dataIndex: 'address'
                },
                {
                    title: '早起时间',
                    key: 'time',
                    dataIndex: 'time'
                }
            ],
            dataSource: [],
            pagination: {
                defaultCurrent: 1,
                total: 0,
                pageSize: 10,
                showSizeChanger: true,
                onShowSizeChange: (current, pageSize)=>{
                   _this.setState({
                       pagination: {
                           defaultCurrent:current,
                            pageSize: pageSize
                       }
                   })
                   _this.request();
                },
                onChange: (page, pageSize)=>{
                    _this.setState({
                        pagination: {
                            defaultCurrent:page,
                            pageSize: pageSize
                        }
                    })
                    _this.request();
                }
            }
        };
        this.params = {
            page:1
        }
    }

    componentDidMount(){
        //请求接口
        this.request();
    }

    onSelectChange = selectedRowKeys => {
        console.log(selectedRowKeys)
        this.setState({ selectedRowKeys });
      };

    request =() => {
        axios.$ajax({
            url:'/table/list',
            data:{
                params:{
                    page: this.state.pagination.defaultCurrent,
                    pageSize: this.state.pagination.pageSize
                }
            }
        }).then(res =>{
            if(res.code == 0){
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource:res.result.list,
                    pagination: {
                        total: res.result.total_count,
                        defaultCurrent: res.result.page
                    },
                    selectedRowKeys:[]
                    // selectedRows:null,
                    // pagination: Utils.pagination(res,(current)=>{
                    //     _this.params.page = current;
                    //     this.request();
                    // })
                })
            }
        })
    }


    render() {
        return (
            <div>
                <Card title="基本表格">
                    <Table
                            bordered
                            columns={this.state.columns}
                            dataSource={this.state.dataSource}
                            pagination={false}
                        />
                </Card>

                <Card title="Mock-表格分页" style={{ margin: '10px 0' }}>
                    <Table
                        rowSelection={{
                            selectedRowKeys: this.state.selectedRowKeys,
                            onChange: this.onSelectChange,
                        }}
                        bordered
                        columns={this.state.columns}
                        dataSource={this.state.dataSource}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}