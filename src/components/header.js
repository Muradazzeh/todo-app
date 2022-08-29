import React from 'react';
import Login from './login';
import { Navbar, Alignment, Button } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';
export default function Header ()  {

   let navigate=useNavigate()
   
        return (
            <header>
<Navbar>
    <Navbar.Group style={{backgroundColor:"skyblue"}} align={Alignment.LEFT}>
        <Navbar.Heading>   </Navbar.Heading>
        <Navbar.Divider />
        <Button onClick={()=>{navigate("/")}} className="bp4-minimal" icon="home" text="Home" />
        <Button onClick={()=>{navigate("/file")}} className="bp4-minimal" icon="document" text="Files" />
        <Button onClick={()=>{navigate("/about")}}  className="bp4-minimal" icon="chat" text="Contact" />
        
      
    </Navbar.Group>
</Navbar>
{/* <Login/> */}
</header>
        )
    
}