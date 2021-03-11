import React from 'react';
import { Form, Input, Button, Card, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/auth/actions';
import styled from 'styled-components';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const LoginContainer = props => {
    const dispatch = useDispatch()

    const onFinish = (values) => {
        dispatch(login(values))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row justify="center">
            <Col span={16}>
                <CardStyled>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </CardStyled>
            </Col>
        </Row>
    );
};

const CardStyled = styled(Card)`
    min-width: 600px;

`

LoginContainer.propTypes = {

};

export default LoginContainer;