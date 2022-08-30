import React from 'react'
import { ControlGroup,Label, Button,InputGroup } from '@blueprintjs/core';
function LoginTest() {
  return (
    <>
    
    <form  >
       
    <input
      placeholder="UserName"
      name="username"
      
    />
    <input
      placeholder="password"
      name="password"
     
    />
    <Button>Login</Button>

    <Button >Logout</Button>
  </form>
  
     
    
     </>
  )
}

export default LoginTest