import React from 'react';
import { Navbar, Alignment, Button } from '@blueprintjs/core';

export default class Header extends React.Component {
   
    render() {
        return (
            <header>
<Navbar>
    <Navbar.Group align={Alignment.RIGHT}>
        <Navbar.Heading>   </Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp4-minimal" icon="home" text="Home" />
        <Button className="bp4-minimal" icon="document" text="Files" />
        <Button className="bp4-minimal" icon="chat" text="Contact" />
    </Navbar.Group>
</Navbar>
</header>
        )
    }
}