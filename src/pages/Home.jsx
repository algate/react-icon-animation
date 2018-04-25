import React, { Component } from 'react';
import "./Home.scss";
class Home extends Component {
    render() {
        return (
            <div id="home">
                <div className="home_left">
                    <div className="comm_div_one">
                        <p>
                            <span></span>
                            <span>教学资源</span>
                        </p>
                        {/*<resBarChart :domType="domType" :lineData="lineData" :xAxisMaxValue="xAxisMaxValue" :allStuValue="allStuValue"></resBarChart>*/}
                        <span className="comm_bottom"></span>
                    </div>
                    <div className="comm_div_two">
                        <p>
                            <span></span>
                            <span>设备资产</span>
                        </p>
                        {/*<assetBarChart></assetBarChart>*/}
                        <span className="comm_bottom"></span>
                    </div>
                </div>
                <div className="home_middle">
                    <div className="home_middle_top">
                        <p>
                            <span>用户活跃数</span>
                            <span>
                                <i className="iconfont icon-shuzi2"></i>
                                <i className="iconfont icon-shuzi5"></i>
                                <i className="iconfont icon-shuzi5"></i>
                            </span>
                        </p>
                        <p></p>
                        <p>
                            <span>用户总数</span>
                            <span>
                                <i className="iconfont icon-shuzi1"></i>
                                <i className="iconfont icon-shuzi2"></i>
                                <i className="iconfont icon-shuzi3"></i>
                                <i className="iconfont icon-shuzi4"></i>
                                <i className="iconfont icon-shuzi5"></i>
                            </span>
                        </p>
                    </div>
                    <div className="home_middle_map"></div>
                </div>
                <div className="home_right">
                    <div className="comm_div_one">
                        <p>
                            <span></span>
                            <span>师资数量</span>
                        </p>
                        {/*<numPieChart :pieData="pieDatas" :pieLegend="pieLegends" :pieRadius="pieRadiuss" :seriesName="seriesNames"></numPieChart>*/}
                        <div className="pie_legend"></div>
                        <span className="comm_bottom"></span>
                    </div>
                    <div className="comm_div_two">
                        <p>
                            <span></span>
                            <span>互动直播</span>
                        </p>
                        {/*<liveBarChart></liveBarChart>*/}
                        <span className="comm_bottom"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
