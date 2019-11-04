import React, { Component } from 'react';
import {Form, Button,Select, Input, Card } from 'antd';
const FormItem = Form.Item;
export default class City extends Component{
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title:'城市ID',
                    dataIndex:'id'
                }, {
                    title: '城市名称',
                    dataIndex: 'name'
                }, {
                    title: '用车模式',
                    dataIndex: 'mode',
                    render(mode){
                        return mode ==1 ?'停车点':'禁停区';
                    }
                }, {
                    title: '营运模式',
                    dataIndex: 'op_mode',
                    render(op_mode) {
                        return op_mode == 1 ? '自营' : '加盟';
                    }
                }, {
                    title: '授权加盟商',
                    dataIndex: 'franchisee_name'
                }, {
                    title: '城市管理员',
                    dataIndex: 'city_admins',
                    render(arr){
                        return arr.map((item)=>{
                            return item.user_name;
                        }).join(',');
                    }
                }, {
                    title: '城市开通时间',
                    dataIndex: 'open_time'
                }, {
                    title: '操作时间',
                    dataIndex: 'update_time'
                }, {
                    title: '操作人',
                    dataIndex: 'sys_user_name'
                }
            ]
        }
    }
    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Card>
                    <FilterForm></FilterForm>
                </Card>
            </div>
        )
    }
}


class FilterFormClass extends Component{
    constructor(props){
        super(props);
    }

    render() {
        let {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{width:100}}
                                placeholder="全部"
                            >
                                <Select.Option value="">全部</Select.Option>
                                <Select.Option value="1">北京市</Select.Option>
                                <Select.Option value="2">天津市</Select.Option>
                                <Select.Option value="3">深圳市</Select.Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select
                                style={{ width: 120 }}
                                placeholder="全部"
                            >
                                <Select.Option value="">全部</Select.Option>
                                <Select.Option value="1">指定停车点模式</Select.Option>
                                <Select.Option value="2">禁停区模式</Select.Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="全部"
                            >
                                <Select.Option value="">全部</Select.Option>
                                <Select.Option value="1">自营</Select.Option>
                                <Select.Option value="2">加盟</Select.Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select
                                style={{ width: 100 }}
                                placeholder="全部"
                            >
                                <Select.Option value="">全部</Select.Option>
                                <Select.Option value="1">已授权</Select.Option>
                                <Select.Option value="2">未授权</Select.Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
                </Form>
            </div>
        )
    }
}


const FilterForm = Form.create({})(FilterFormClass);