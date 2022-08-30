import React, { useState, useEffect } from "react";
import superagent from "superagent";
import base64 from "base-64";
import cookie from "react-cookies";
import JWT from "jwt-decode";
import axios from "axios"

const API = `https://hiservice.herokuapp.com`
export const LoginContext= React.createContext()
export default function LoginProvider(props) {
const [login,setLogin]=useState(false)
const [user,setUser]=useState({
  username: cookie.load('username') || "",
  actions: cookie.load('actions') || []
})

useEffect(() =>{
  const tokenFromCookie = cookie.load('token') 
  if (tokenFromCookie) {
    setLogin(true);
    setUser(user);
} else {
  setLogin(false);
    setUser({})
}
},[])

const loginFunction = async (username, password) => {
  try {
      const response = await superagent.post(`${API}/users/login`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
      console.log('body >>> ', response.body);
      validateMyUser(response.body);
  } catch (err) {

  }
}
const signUp = (username,password,role) => {
  axios.post(`${API}/users/signup`,{
      username : username,
      password : password,
      role : role,
  }).then(res => {
      console.log(res.data);
  })
}
const logoutFunction = () => {
  setLogin(false);
  setUser({});
  cookie.remove('token');
  cookie.remove('actions');
  cookie.remove('username');
}

const validateMyUser= (user)=>{
  if (user.token){
    const userFromToken = JWT(user.token);
    console.log('username >>>> ', userFromToken);
    setLogin(true);
    setUser(user);
    cookie.save('token', user.token);
    cookie.save('username', user.username);

    
    cookie.save('actions', user.actions)
  }
 else {
  setLogin(false);
  setUser({});
}
}
const can = (action) => {

  return user?.actions?.includes(action);
}
const state = {
  login: login,
  loginFunction: loginFunction,
  signUp:signUp,
  logoutFunction: logoutFunction,
  user: user,
  canDo: can
}

  return (

    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  )
}

 