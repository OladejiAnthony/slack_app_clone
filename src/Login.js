import React from 'react'
import './Login.css'
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth 
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => {
            alert(error.message);
        })
    };

    return (
        <div className='login'>
            <div className='login__container'>
                <img
                    src='https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg'
                    alt=''
                />
                <h1>Sign in to TDWONDER Web Tech App</h1>
                <p>We give you GOODWORK'S !</p>
                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login;



//8hrs,48mins
