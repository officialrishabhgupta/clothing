import React from "react";
import SignIn from '../../Components/sign-in/Sign-in';
import SignUp from "../../Components/sign-up/sign-up";
import './Sign.scss';

const SignInAndSignUpPage =()=>{
    console.log('domrthinh')
    return(
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)
    }

export default SignInAndSignUpPage;