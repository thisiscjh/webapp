import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import asyncComponent from "./utils/asyncComponet"
import Login from "./pages/Login/Login"
const Reg=asyncComponent(()=>import("./pages/Reg/Reg"))
const Index=asyncComponent(()=>import("./pages/Index/Index"))
const Fenlei=asyncComponent(()=>import("./pages/Fenlei/Fenlei"))
const ShoppingCart=asyncComponent(()=>import("./pages/ShoppingCart/ShoppingCart"))
const Myd=asyncComponent(()=>import("./pages/Myd/Myd"))
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/reg" component={Reg}></Route>
        <Route path="/fenlei" component={Fenlei}></Route>
        <Route path="/shoppingcart" component={ShoppingCart}></Route>
        <Route path="/index" component={Index}></Route>
        <Route path="/myd" component={Myd}></Route>
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
