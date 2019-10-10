import React from 'react';
import {Card, Form, Input, Button, Icon, Checkbox, Message} from 'antd';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    submitForm = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                Message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.password}`)
            }
        })
    }

    render() {
        let {getFieldDecorator} = this.props.form;


        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <Form.Item>
                            <Input type="text"></Input>
                        </Form.Item>

                        <Form.Item>
                            <Input type="password"></Input>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

                <Card title="水平表单" style={{marginTop: 10}}>
                    <Form style={{width: 200}}>
                        <Form.Item>
                            {
                                getFieldDecorator("userName", {
                                    initialValue: '',
                                    rules: []
                                })(
                                    <Input prefix={<Icon type="user"/>} type="text" placeholder="请输入用户名"></Input>
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator("password", {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: "密码是必填项"                                            
                                        },
                                        {
                                            min: 5,
                                            max: 20,
                                            message: "长度必须为5-20"
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="密码"></Input>
                                )
                            }
                        </Form.Item>

                        <Form.Item>
                            {
                                getFieldDecorator("remenber", {
                                    initialValue: true,
                                    valuePropName: 'checked',
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" onClick={this.submitForm}>
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default new Form.create()(Login)