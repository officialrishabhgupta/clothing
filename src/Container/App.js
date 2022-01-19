import React from 'react';
import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from '../pages/homepage/homepage';
import ShopPage from '../pages/shop/shop';
import Header from '../Components/Header/Header';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/Sign';
import CheckoutPage from '../pages/checkout/checkout.component';
import { auth ,createUserProfileDocument} from '../firebase/firebase.utils';
import {setCurrentUser} from '../redux/user/user.actions';
import {selectCurrentUser} from '../redux/user/user.selectors';



class App extends React.Component{
  unsubscribeFromAuth  = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
           id:snapShot.id,
           ...snapShot.data()
        });
      });
    }  

      setCurrentUser(userAuth);   
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    console.log(this.props.currentUser)
  return (
    <div>
      <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
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
  setCurrentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
