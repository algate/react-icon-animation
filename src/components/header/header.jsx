import React from "react";
import "./header.scss";

import LoginComponent from '../loginRegister/app.login'
import RegisterComponent from '../loginRegister/app.register'

const navs = [
    {
        title: '首页',
        link: '/'
    },
    {
        title: '用户空间',
        link: '/userSpace'
    },
    {
        title: '直播',
        link: '/live'
    },
    {
        title: '公告',
        link: '/announcement'
    }
];
// es5原生方式React.createClass定义的组件
/* es6 写法 */
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isShow:false,
            regisShow:false,
            isLogin:false,
        }
    }
    loginClick () {
        console.log('我要登录');
        this.setState({isShow:true});
    }
    onClose (isShow,isLogin) {
        this.setState(isShow);
        this.setState(isLogin);
    }
    loginOut() {
        this.setState({isLogin:false});
    }
    regClick() {
        console.log('我要注册');
        this.setState({regisShow:true});
    }
    render() {
        const NavList = (props) => {
            /*const navs = props.navs;
            const listItems = navs.map((nav) =>
                <li><a key={nav.title} href={nav.link}>{nav.title}</a></li>
            );
            return (
                <ul className="nav">{listItems}</ul>
            );*/
            const navs = props.navs;
            return (
                <ul className="nav">
                    {
                        navs.map((nav, key) => <li key={key}><a href={nav.link}>{key+1}.{nav.title}</a></li>)
                    }
                </ul>
            )
        };
        const isLogin = this.state.isLogin;
        return(
            <section>
                <header className="header">
                    <div className="c_header_top">
                        <div className="f_l">
                            <span>北京市云平台</span>
                            <span className="c_platform_info">
                                <a className="c_platform_btn"> [切换]</a>
                                <div className="platform_info_menu c_menu">
                                    <ul>
                                        <li>北京市云平台</li>
                                        <li>海淀区教育局</li>
                                        <li>中庆平台</li>
                                    </ul>
                                    <hr className="dashedborder"/>
                                    <div className="pl_6"><span className="ml_10">更多</span></div>
                                </div>
                            </span>
                        </div>
                        {!isLogin ? (<div className="user_uninfo f_r">
                            <span onClick={this.loginClick.bind(this)}>登录</span>|<span onClick={this.regClick.bind(this)}>注册</span>
                        </div>) :
                        (<div className="f_r" v-if="isLogin">
                            <ul className="c_header_top_nav f_l">
                                <a to="/userSpace/myCourse"><i className="anticon anticon-user"></i> 个人中心</a>
                                <a to="/applicationManage"><i className="anticon anticon-appstore-o"></i> 应用管理</a>
                                <a to="/systemManagement"><i className="anticon anticon-setting"></i> 系统管理</a>
                            </ul>
                            <div className="user_info_data f_l">
                                <div className="user_identity">
                                    <p>你好,Algate</p>
                                </div>
                                <div className="user_info_menu c_menu">
                                    <ul>
                                        <a><li>个人设置</li></a>
                                        <a><li>消息</li></a>
                                        <hr className="dashedborder"/>
                                        <a onClick={this.loginOut.bind(this)}><i className="anticon anticon-poweroff"></i><span className="pl_5">退出</span></a>
                                    </ul>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    <div className="c_header_title">
                        <div className="logo f_l">教育云平台</div>
                        <NavList navs={navs} />
                    </div>
                </header>
                <LoginComponent isShow={this.state.isShow} onClose={(isShow,isLogin) => this.onClose(isShow,isLogin)}/>
                <RegisterComponent regisShow={this.state.regisShow} regonClose={() => {this.setState({regisShow:false})}}/>
            </section>
        )
    }
}
export default Header;
