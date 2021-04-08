import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig/firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(result => {
                const {displayName, email} = result.user;
                const signInInfo = {
                    name: displayName,
                    email
                };
                setLoggedInUser(signInInfo);
                history.replace(from);
            }).catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }
    return (
        <div className='container text-center'>
            <h2>Login</h2>
            <button onClick={handleGoogleSignIn}>Continue with google</button>
        </div>
    );
};

export default Login;