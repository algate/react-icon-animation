import "./app.login.scss";
import React from "react";
// import antd form widget
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class LoginComponent extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if (values.userName === '123' && values.password === '123') {
                    // 表单的路由处理
                    this.props.onClose({isShow:false},{isLogin:true});
                } else {
                    console.log('用户名和密码错误');
                }
            }
        });
    }
    onCloseHandler(){
        console.log('登录组件点击关闭');
        this.props.onClose({isShow:false});
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (this.props.isShow &&
            <section>
                <div className="mask"></div>
                <div className="shadow loginDiv">
                    <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                    <div className="close" onClick={this.onCloseHandler.bind(this)}><i className="anticon anticon-close"></i></div>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Login
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                  </Form>
                </div>
            </section>
        )
    }
}
LoginComponent.defaultProps={
    isShow:false
}
const Login = Form.create()(LoginComponent);
export default Login;

