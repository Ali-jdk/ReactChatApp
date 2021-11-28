import React from "react";

import {Button} from '@material-ui/core';
import firebase from "firebase/compat";
import {auth} from "../firebase";


function SignIn() {
    // eslint-disable-next-line
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div>
            <Button onClick={signInWithGoogle}>Sign In with Google</Button>
        </div>
    );
}

export default SignIn;
