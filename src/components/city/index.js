import React, { Component } from 'react';
import {Form, Button,Select, Input, Card,Table , Modal} from 'antd';
import axios from '../../utils/axios'
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
            ],
            tableData: [],
            pagination: {
                showSizeChanger: true,
                page: 1,
                total: 50,
                defaultPageSize: 10,
                pageSize: 10,
                pageSizeOptions: [
                    '10', '20', '30', '40'
                ],
                position: 'bottom',
                onChange: this.pageChange.bind(this),
                onShowSizeChange: this.onShowSizeChange
            }
        };
        this.modalVisible = false;
    }
    componentDidMount() {
        this.request();
    }
    request() {
        let {page, pageSize} = this.state.pagination;
        axios.$ajax({
            url: '/open_city',
            data:{
                params:{
                    'page': page,
                    'size': pageSize
                }
            }
        }).then((res)=>{
            let list = res.result.item_list.map((item, index) => {
                item.key = index;
                return item;
            });
            let {page, pageSize} = res.result;
            this.setState({
                tableData:list,
                pagination: {
                    ...this.state.pagination,
                    page, pageSize
                }
            })
        })
    }
    onShowSizeChange=(current, size)=>{
        let temp = this.state.pagination;
        var obj = Object.assign({}, temp, {
            page:current,
            pageSize:size
        });
        this.setState({
            pagination: obj
        })
    }

    pageChange(page, pageSize) {
        let temp = this.state.pagination;
        var obj = Object.assign({}, temp, {
            page,
            pageSize
        });
        this.setState({
            pagination: obj
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <FilterForm></FilterForm>
                </Card>

                <Card style={{marginTop: 20}}>
                    <Button onClick={this.openDialog}>开通城市</Button>
                    <Table columns={this.state.columns} dataSource={this.state.tableData} pagination={this.state.pagination}></Table>
                </Card>

                <Modal title="开通城市" visible={this.state.modalVisible} onOk={this.handleOk} onCancel={this.handleCancel} >
                    <ModelsForm wrappedComponentRef={(ref)=> {this.cityForm = ref}}></ModelsForm>
                </Modal>
            </div>
        )
    }

    handleOk=()=> {
        // todo validate and submit
        // let cityInfo = this.cityForm.props.form.getFieldsValue();
        // 
        this.cityForm.props.form.validateFields((err, values) => {
              if (!err) {
                console.log('Received values of form: ', values);
                // ajax
              }
            })

        // this.props.form.validateFields((err, values) => {
        //   if (!err) {
        //     console.log('Received values of form: ', values);
        //   }
        // });
    }
    handleCancel=()=>  {
        this.setState({
            modalVisible: false
        })
    }
    openDialog=()=>  {
        this.setState({
            modalVisible: true
        })
    }
}

class ModelForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        let formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
              },
              wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
              }
        }

        let {getFieldDecorator} = this.props.form;
        return ( 
            <div>
                  <Form {...formItemLayout} className="login-form">
                        <Form.Item label="选择城市">
                            {
                                getFieldDecorator('city',{
                                    initialValue: ''
                                })(
                                    <Select
                                    placeholder="全部"
                                    >
                                        <Select.Option value="">全部</Select.Option>
                                        <Select.Option value="1">北京市</Select.Option>
                                        <Select.Option value="2">天津市</Select.Option>
                                        <Select.Option value="3">深圳市</Select.Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="运营模式">
                            {
                                getFieldDecorator('mode',{
                                    initialValue: '1'
                                })(
                                    <Select
                                    placeholder="模式"
                                    >
                                        <Select.Option value="1">自营</Select.Option>
                                        <Select.Option value="2">合作</Select.Option>
                                        <Select.Option value="3">禁停</Select.Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                  </Form>
            </div>
        );
    }
}
const ModelsForm = Form.create({})(ModelForm);

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