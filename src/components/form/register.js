import React from 'react';

import { Card, Form, Button, Icon} from 'antd';


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {getFieldDecorator} = this.props.form;

        return (
            <div>
                <Card title="注册页面">
                    <Form layout="horizontal">

                    </Form>
                </Card>
            </div>
        )
    }
}


export default Form.create()(Registration)