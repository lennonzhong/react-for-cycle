import React from 'react';

import { Card, Form,Upload, Button, DatePicker,message, Icon, Input,Switch, Checkbox,Select, Radio , InputNumber } from 'antd';


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            loading: false
        }
    }
    getBase64=(img, callback) =>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }

    handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          this.getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };

      onSubmit =()=> {
        var userInfo  = this.props.form.getFieldsValue();
        this.props.form.validateFields((err)=>{
            if(!err){
                message.success("成功啦")
            }else{
                message.error('表单校验问题')
            }
        })
      }

    render() {
        let {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24,
                },
                md: {
                    span: 4
                }
            },
            wrapperCol:{
                xs: {
                    span: 24,
                },
                md: {
                    span: 14
                }
            }
        }
        const noLabelLayout = {
           
            wrapperCol:{
                xs: {
                    span: 24,
                },
                md: {
                    span: 14,
                    offset: 4
                }
            }
        }
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Card title="注册页面">
                    <Form layout="horizontal" >
                        <Form.Item label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator("userName", {
                                    rules: [
                                        {required: true, message: '请输入'}   
                                    ]
                                })(
                                    <Input prefix={ <Icon type="user"></Icon>  } placeholder="请输入用户名"></Input>
                                )
                            }
                        </Form.Item>

                        <Form.Item label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator("userPwd", {
                                    rules: [
                                        {required: true, message: '请输入'}   
                                    ]
                                })(
                                    <Input prefix={ <Icon type="lock"></Icon>  } placeholder="请输入密码"></Input>
                                )
                            }
                        </Form.Item>

                        <Form.Item label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator("genda", {
                                    // propValueName: "checked",
                                    initialValue: 'male'
                                })(
                                    <Radio.Group>
                                        <Radio value="male">男</Radio>
                                        <Radio value="female">女</Radio>
                                    </Radio.Group>
                                )
                            }
                        </Form.Item>

                        <Form.Item label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator("age", {
                                    // propValueName: "checked",
                                    initialValue: 18,
                                })(
                                    <InputNumber></InputNumber>
                                )
                            }
                        </Form.Item>

                        <Form.Item label="当前职业" {...formItemLayout}>
                            {
                                getFieldDecorator("job", {
                                    initialValue: "1",
                                })(
                                    <Select>
                                        <Select.Option value="1">青年采菊</Select.Option>
                                        <Select.Option value="2">北大才子</Select.Option>
                                        <Select.Option value="3">清华高材生</Select.Option>
                                        <Select.Option value="4">码农</Select.Option>
                                        <Select.Option value="5">狗东西</Select.Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator("intest", {
                                    initialValue: ["1", "2"],
                                })(
                                    <Select  mode="tags" placeholder="Please select">
                                        <Select.Option value="1">爬山</Select.Option>
                                        <Select.Option value="2">大保健</Select.Option>
                                        <Select.Option value="3">狂楼</Select.Option>
                                        <Select.Option value="4">游戏</Select.Option>
                                        <Select.Option value="5">音乐</Select.Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="婚姻" {...formItemLayout}>
                            {
                                getFieldDecorator("married", {
                                    initialValue: true,
                                    valuePropName: "checked",
                                })(
                                    <Switch/>
                                )
                            }
                        </Form.Item>

                        <Form.Item label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator("birth")(
                                    <DatePicker showTime placeholder="Select Time" />
                                )
                            }
                        </Form.Item>

                        <Form.Item label="家庭住址" {...formItemLayout}>
                            {
                                getFieldDecorator("adress", {
                                    initialValue: '不明觉厉',
                                })(
                                    <Input.TextArea rows={4} autosize={{
                                        minRows: 2, maxRows: 6
                                    }}></Input.TextArea>
                                )
                            }
                        </Form.Item>

                        <Form.Item label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator("avatar")(
                                    <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    onChange={this.handleChange}
                                  >
                                    {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                  </Upload>
                                )
                            }
                        </Form.Item>

                        <Form.Item {...noLabelLayout}>
                            {
                                getFieldDecorator("agree", {
                                    initialValue: true,
                                    valuePropName: 'checked',
                                })(
                                    <Checkbox>我已经阅读协议</Checkbox>
                                )
                            }
                        </Form.Item>
                        <Form.Item {...noLabelLayout}>
                            <Button type="primary" onClick={this.onSubmit}>注册</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}


export default Form.create()(Registration)