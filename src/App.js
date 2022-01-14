import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import { getAuth } from "firebase/auth";
import { useDispatch } from 'react-redux'

function App() {
  const user = useSelector(selectUser);
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoUrl,
        }))
      } else {
        // logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? (<Login />) : (
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )}
    </div>
  );
}

export default App;
