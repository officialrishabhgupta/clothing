import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import HomePage from '../pages/homepage/homepage';
import ShopPage from '../pages/shop/shop';
import Header from '../Components/Header/Header';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/Sign';
import { auth ,createUserProfileDocument} from '../firebase/firebase.utils';



class App extends React.Component{
  constructor() {
    super();

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth  = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot =>{
          console.log(snapShot.data);
        });
      }
     
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
  return (
    <div>
      <BrowserRouter>
      <Header currentUser={this.state.currentUser}/>
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
