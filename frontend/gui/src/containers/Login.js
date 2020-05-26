import React from "react";
import { Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import * as actions from '../store/actions/auth';

import { LoadingOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Login = (props) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const onFinish = values => {
    console.log('Received values of form: ', values);
    dispatch(actions.authLogin(values.username, values.password));
    props.history.push('/')
  };
  let errorMessage = null;
  if (state.error) {
      errorMessage = (
          <p> {state.error.message} </p>
      );
  }

  return (
      <div>
          {errorMessage}
          {
              state.loading ?
                    <Spin indicator={antIcon} />
              :
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
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
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Password!',
                          },
                        ]}
                      >
                        <Input
                          prefix={<LockOutlined className="site-form-item-icon" />}
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                          Log in
                        </Button> Or
                        <NavLink style={{marginRight: '10px'}} to='/signup/'> signup </NavLink>
                      </Form.Item>
                    </Form>
          }
      </div>
  );
};

export default Login

