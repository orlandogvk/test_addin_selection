import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export const Navbarc = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to='/'><Navbar.Brand>Logo</Navbar.Brand></Link>
                    <Nav className="me-auto">
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </Nav>
                    <div className="user">
                        <span className="username">Orlando</span>
                        <Button as="input" type="submit" value="Logout" />{' '}
                    </div>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}
