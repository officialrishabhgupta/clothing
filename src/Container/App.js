import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import HomePage from '../pages/homepage/homepage';
import ShopPage from '../pages/shop/shop';
import Header from '../Components/Header/Header';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/Sign';
import { auth } from '../firebase/firebase.utils';



class App extends React.Component{
  constructor() {
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth  = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user});
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/signin' element={<SignInAndSignUpPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
