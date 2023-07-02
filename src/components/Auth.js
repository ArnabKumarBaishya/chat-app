import {auth,provider} from "../firebase-config.js"
import { signInWithPopup } from "firebase/auth";
export const Auth=()=>{

    const signInWithgoogle=async()=>{
        await signInWithPopup(auth,provider);
    }

    return (<div className="auth"><p>Sign in with Google</p>
    <button onClick={signInWithgoogle}>Sign In With Google</button>
    </div>);
};