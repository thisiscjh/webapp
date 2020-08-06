import React, { Component } from 'react'
import "./Login.css"
import { } from "antd-mobile"
export default class Login extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className="login">
                <div className="login-header">登 录</div>
                <div className="login-inp">
                    <div>账号:<input type="text"></input></div>
                    <div>密码:<input type="text"></input></div>
                    <div className="login-T">
                        <span className="login-txt"><em>没有账号请</em><a>注册</a></span>
                        <span className="login-txt"><span>忘记密码</span></span>
                    </div>
                    <div className="login-but"><button>登录</button></div>

                </div>
            </div>
        )
    }
}
