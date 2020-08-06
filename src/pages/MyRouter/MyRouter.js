import React, { Component } from 'react'
import Route,{Redirect} from "react-router-dom"
export default class MyRouter extends Component {
    render() {
        const isLosin=sessionStorage.getItem("isLogin")
        return (
            
            <div>
                {isLosin?<Route {...this.props}></Route>:<Redirect to="/login"></Redirect>}
            </div>
        )
    }
}

