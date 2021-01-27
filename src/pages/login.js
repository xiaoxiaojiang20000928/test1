import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css';
import logo from '../image/logo192.png';
import { Link } from 'react-router-dom';
import axios from 'axios';


const NormalLoginFormlogin = () => {
    const onFinish = (Values) => {
      const values=Values;
      axios({
        url:"http://81.68.155.14:8080/user/login",
        method:'post',
        data:{
          username:values.username,
          password:values.password
        }
      }).then(res=>{
        console.log(res);
        alert(res.data.message)
      }).catch(
        err=>{
          console.log(err);
        }
      )
    };

    return (
      <div className="back">
       <div className="wrap">
       <div className='logo_wrap'>
       <img src={logo} className='logo' alt=''></img><p>后台管理系统</p>
       </div>
       <div className='form_wrap'>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        size='large'
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },{
              min:6,
              message:'用户名不能小于6个字符',
            },{
              max:12,
              message:'用户名不能超过12个字符',
            },
          ]}
        >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名：请输入用户名"/>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },{
              len:6,
              message:'密码长度需6个字符',
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码：请输入密码"
          />
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
          <Link to="/register/">
          <Button type='primary' className='login-form-button2'>
            还没有账号？点击注册
          </Button>
          </Link>
        </Form.Item>
      </Form>
      </div>
        </div>
       </div>
    );
  };
  
  
export default NormalLoginFormlogin;
