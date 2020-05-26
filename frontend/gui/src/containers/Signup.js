import React from 'react';
import { Button, Form, Input} from 'antd';
import {NavLink} from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../store/actions/auth';


const Signup = (props) => {
  const state = useSelector(state => state);
  console.log(state);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
    dispatch(actions.authSignup(values.username, values.email, values.password, values.confirm))
    props.history.push('/');

  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} type="username" placeholder="Username" />
      </Form.Item>


      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>



      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Signup
        </Button> Or
        <NavLink style={{marginRight: '10px'}} to='/login/'> Login </NavLink>
      </Form.Item>


    </Form>
  );
};

export default Signup