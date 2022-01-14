import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Login.css'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { login } from './features/userSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();
    const auth = getAuth();

    const register = () => {
        if (!name) {
            return alert("Please enter a full name");
        }

        createUserWithEmailAndPassword( auth, email, password)
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoUrl: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: auth.currentUser.email,
                    uid: auth.currentUser.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }))
            })
        }).catch(error => alert(error))
    }

    const loginToApp = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoUrl: userAuth.photoUrl,
            }))
        }).catch(error => alert(error))

    }

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering)" type="text" />

                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)" type="text" />

                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />

                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{" "}<span className="login__register" onClick={register} >Register Now</span></p>
        </div>
    )
}

export default Login
