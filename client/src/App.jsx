import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from './pages/SignIn'
import AppNav from './components/AppNav'
import Example from './pages/Example'
import IndivExample from './pages/IndivExample'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser]= useState(null)
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  const csrftoken = getCookie('csrftoken');
  axios.defaults.headers.common["X-CSRFToken"]=csrftoken

  // const signIn=async()=>{
  //   event.preventDefault()
  //   let email=document.getElementById("signInEmail").value
  //   let password=document.getElementById("signInPassword").value
  //   console.log(email, password)
  //   let myResponse=await axios.post('signIn/',{
  //     'email':email,
  //     'password':password
  //   })
  //   console.log(myResponse.data)
  //   if (myResponse.data["signIn"]==true){
  //     window.location.reload()
  //   }
  // }
  // const signUp=async()=>{
  //   event.preventDefault()
  //   let email=document.getElementById("signUpEmail").value
  //   let password=document.getElementById("signUpPassword").value
  //   console.log(email, password)
  //   let myResponse=await axios.post('signUp/',{
  //     'email':email,
  //     'password':password
  //   })
  //   console.log(myResponse.data)
  // }

  const signOut=async()=>{
    let myResponse=await axios.post('signOut/')
    if (myResponse.data["signout"]==true){
      window.location.reload()
    }
  }

  const curr_user=async()=>{
    let myResponse=await axios.get('current_user')
    let user= myResponse.data && myResponse.data[0] && myResponse.data[0].fields
    setUser(user)
  }
  useEffect(()=>{
    curr_user()
  },[])



  return (
    <div className="App">
      <AppNav />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {user && <h1>{user.email}</h1>}
      <div className="card">
        {/* <form onSubmit={signIn}>
        <input id='signInEmail' placeholder='email' />
        <input id='signInPassword' placeholder='password' type="password"/>
        <button onClick={signIn}>Sign In</button>
        </form> */}

        {/* <form onSubmit={signUp}>
        <input id='signUpEmail' placeholder='email' />
        <input id='signUpPassword' placeholder='password' />
        <button onClick={signUp}>Sign Up</button>
        </form> */}
        
        {user && <button onClick={signOut}>Sign Out</button>}
        <p>
          hello my name is francisco
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Router>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path='/examples' element={<Example />} />
          <Route path='/indiv/:id' element={<IndivExample />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
