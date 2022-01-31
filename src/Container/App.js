import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from '../pages/homepage/homepage';
import ShopPage from '../pages/shop/shop';
import Header from '../Components/Header/Header';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/Sign';
import CheckoutPage from '../pages/checkout/checkout.component';
import {checkUserSession} from '../redux/user/user.actions';
import {selectCurrentUser} from '../redux/user/user.selectors';

import './App.css';



class App extends React.Component{
  unsubscribeFromAuth  = null;

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/shop/*' element={<ShopPage/>}/>
          <Route exact path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/signin' 
          element={this.props.currentUser ? <Navigate replace to="/" /> : <SignInAndSignUpPage />}
            />
           <Route path="*" element={ <Navigate replace to="/" />} />
        </Routes>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
  checkUserSession: () =>dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
