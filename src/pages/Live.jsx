import React, { Component } from 'react';
import { Icon } from 'antd';
import "./Live.scss";
class Live extends Component {
    render() {
        return (
            <section>
                <div className="c_home_live">
                    <div className="c_live_video_box">
                        <div className="c_live_container">
                            <h2 className="c_live_title">时间回溯短片</h2>
                            <p className="c_live_subtitle">
                                <span>主讲人：李娜  101中学</span>
                                <span className="f_r">发布时间：2018-01-02</span>
                            </p>
                            <div className="c_live_video">
                                <video></video>
                            </div>
                        </div>
                    </div>
                    <div className="c_l_lists_box">
                        <div className="c_live_header">正在直播<span> 19</span></div>
                        <ul className="c_l_lists">
                            <li v-for="live in liveLists">
                                <h3>直播流名</h3>
                                <progress value="30" max="100"></progress>
                                <div className="c_list_info">
                                    <span className="c_info_master f_l">李楠-101中学</span>
                                    <span className="c_info_num2 f_r"><i className="icon-bubble2"></i> 666</span>
                                    <span className="c_info_num f_r mr_10"><i className="icon-play2"></i> 666</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{width:"1200px", margin:"0 auto"}}>
                    <div className="c_live_static">
                        直播场数<span className="c_digit" v-for="(num) in num_live_arr"><i className="'iconfont icon-shuzi'+num"></i></span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        直播访问量<span className="c_digit" v-for="(num) in num_visit_arr"><i className="'iconfont icon-shuzi'+num"></i></span>
                    </div>
                    <div className="c_search_box">
                        <div className="c_input_search">
                            <input type="text" className="c_search_ann" placeholder="资源名称" />
                            <span className="el-input__icon"><Icon type="search" /></span>
                        </div>
                    </div>
                    <div className="c_site_video_box">
                        <div className="c_site_video_lists">
                            <h4><i className="iconfont icon-qizhi colff5a00 mr_10"></i>活动</h4>
                            <hr></hr>
                            <ul className="c_videos_box">
                                <li v-for="video in videoLists">
                                    <div className="c_video_info">
                                        <img src={require("../assets/img/zhanwei.png")} alt=""/>
                                        <span className="c_v_i_state bgcolor1aaf60">正在直播</span>
                                        <span className="c_v_i_className">101中学</span>
                                        <span className="c_v_i_watchers">880人</span>
                                    </div>
                                    <p className="mt_10">辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡</p>
                                    <div className="mt_10" style={{color:"#9199a1"}}>
                                        <span className="f_l"><i className="icon-user"></i>辣鸡</span>
                                        <span className="f_r">多路</span>
                                    </div>
                                </li>
                                <li v-for="video in videoLists">
                                    <div className="c_video_info">
                                        <img src={require("../assets/img/zhanwei.png")} alt=""/>
                                        <span className="c_v_i_state bgcolor2dabff">即将开始</span>
                                        <span className="c_v_i_className">101中学</span>
                                        <span className="c_v_i_watchers">880人</span>
                                    </div>
                                    <p className="mt_10">辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡</p>
                                    <div className="mt_10">
                                        <span className="f_l"><i className="icon-user"></i>辣鸡</span>
                                        <span className="f_r">多路</span>
                                    </div>
                                </li>
                                <li v-for="video in videoLists">
                                    <div className="c_video_info">
                                        <img src={require("../assets/img/zhanwei.png")} alt=""/>
                                        <span className="c_v_i_state bgcolorff8b2d">直播回放</span>
                                        <span className="c_v_i_className">101中学</span>
                                        <span className="c_v_i_watchers">880人</span>
                                    </div>
                                    <p className="mt_10">辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡</p>
                                    <div className="mt_10">
                                        <span className="f_l"><i className="icon-user"></i>辣鸡</span>
                                        <span className="f_r">多路</span>
                                    </div>
                                </li>
                                <li v-for="video in videoLists">
                                    <div className="c_video_info">
                                        <img src={require("../assets/img/zhanwei.png")} alt=""/>
                                        <span className="c_v_i_state bgcolorff8b2d">直播回放</span>
                                        <span className="c_v_i_className">101中学</span>
                                        <span className="c_v_i_watchers">880人</span>
                                    </div>
                                    <p className="mt_10">辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡</p>
                                    <div className="mt_10">
                                        <span className="f_l"><i className="icon-user"></i>辣鸡</span>
                                        <span className="f_r">多路</span>
                                    </div>
                                </li>
                                <li v-for="video in videoLists">
                                    <div className="c_video_info">
                                        <img src={require("../assets/img/zhanwei.png")} alt=""/>
                                        <span className="c_v_i_state bgcolorff8b2d">直播回放</span>
                                        <span className="c_v_i_className">101中学</span>
                                        <span className="c_v_i_watchers">880人</span>
                                    </div>
                                    <p className="mt_10">辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡</p>
                                    <div className="mt_10">
                                        <span className="f_l"><i className="icon-user"></i>辣鸡</span>
                                        <span className="f_r">多路</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="c_site_video_lists">
                            <h4><i className="iconfont icon-xuexishuben colff5a00 mr_10"></i>课程</h4>
                            <hr></hr>
                            <ul className="c_videos_box">
                                <li v-for="video in videoLists">
                                    <div className="c_video_info">
                                        <img src={require("../assets/img/zhanwei.png")} alt=""/>
                                        <span className="c_v_i_state bgcolor1aaf60">正在直播</span>
                                        <span className="c_v_i_className">101中学</span>
                                        <span className="c_v_i_watchers">880人</span>
                                    </div>
                                    <p className="mt_10">辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡</p>
                                    <div className="mt_10">
                                        <span className="f_l"><i className="icon-user"></i>辣鸡</span>
                                        <span className="f_r">多路</span>
                                    </div>
                                </li>
                                <li v-for="video in videoLists">
                                    <div className="c_video_info">
                                        <img src={require("../assets/img/zhanwei.png")} alt=""/>
                                        <span className="c_v_i_state bgcolor2dabff">即将开始</span>
                                        <span className="c_v_i_className">101中学</span>
                                        <span className="c_v_i_watchers">880人</span>
                                    </div>
                                    <p className="mt_10">辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡</p>
                                    <div className="mt_10">
                                        <span className="f_l"><i className="icon-user"></i>辣鸡</span>
                                        <span className="f_r">多路</span>
                                    </div>
                                </li>
                                <li v-for="video in videoLists">
                                    <div className="c_video_info">
                                        <img src={require("../assets/img/zhanwei.png")} alt=""/>
                                        <span className="c_v_i_state bgcolorff8b2d">直播回放</span>
                                        <span className="c_v_i_className">101中学</span>
                                        <span className="c_v_i_watchers">880人</span>
                                    </div>
                                    <p className="mt_10">辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡</p>
                                    <div className="mt_10">
                                        <span className="f_l"><i className="icon-user"></i>辣鸡</span>
                                        <span className="f_r">多路</span>
                                    </div>
                                </li>
                                <li v-for="video in videoLists">
                                    <div className="c_video_info">
                                        <img src={require("../assets/img/zhanwei.png")} alt=""/>
                                        <span className="c_v_i_state bgcolorff8b2d">直播回放</span>
                                        <span className="c_v_i_className">101中学</span>
                                        <span className="c_v_i_watchers">880人</span>
                                    </div>
                                    <p className="mt_10">辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡辣鸡</p>
                                    <div className="mt_10">
                                        <span className="f_l"><i className="icon-user"></i>辣鸡</span>
                                        <span className="f_r">多路</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Live;
