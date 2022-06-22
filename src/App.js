import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'

import TrendingDetail from './components/TrendingDetail';
import VivoDetail from './components/VivoDetail';
import OppoDetail from './components/OppoDetail';
import OneplusDetail from './components/OneplusDetail';
import IphoneDetail from './components/IphoneDetail';
import XiaomiDetail from './components/XiaomiDetail';

import Vivo from './components/Vivo';
import Oppo from './components/Oppo';
import Oneplus from './components/Oneplus';
import Xiaomi from './components/Xiaomi'
import Iphone from './components/Iphone';

import Signup from './components/buttons/Signup'
import Login from './components/buttons/Login';

import Cart from './components/Cart';
import Checkout from './components/Checkout'

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/ecommerce" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/vivo" component={Vivo} />
        <Route exact path="/oppo" component={Oppo} />
        <Route exact path="/oneplus" component={Oneplus} />
        <Route exact path="/xiaomi" component={Xiaomi} />
        <Route exact path="/iphone" component={Iphone}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup}/>

        <Route exact path="/trending/:id" component={TrendingDetail} />
        <Route exact path="/vivo/:id" component={VivoDetail} />
        <Route exact path="/oppo/:id" component={OppoDetail} />
        <Route exact path="/oneplus/:id" component={OneplusDetail} />
        <Route exact path="/iphone/:id" component={IphoneDetail} />
        <Route exact path="/xiaomi/:id" component={XiaomiDetail} />

      </Switch>
      <Footer/>
    </>
  );
}

export default App;
