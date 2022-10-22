import React from 'react';
import styled from 'styled-components';
import logo from '../../../images/arya-logo.png'
import { secondaryColor, secondaryFont, white, yellow, Heading3, Para } from '../../CommonComp';
import NavLink from './NavLink';


const Nav = styled.nav`
    width: 100%;
    height: 8rem;
    height: 7.5rem;
    padding: 0 3rem;
    box-shadow: 0 0 0.6rem 0 rgba(0,0,0,.1);
    justify-content: space-between;
    background-color: ${white};
    position: fixed;
    top: 0;
    z-index: 5;
`;

const Logo = styled.img`
    width: 16rem;
`;

const SignUpBtn = styled.button`
    padding: 0.7rem 1.4rem;
    background-color: ${secondaryColor};
    color: ${white};
    font-size: 1.7rem;
    border: 0;
    font-weight: 400 !important;
    cursor: pointer;
    border-radius: 0.5rem;
    font-family: ${secondaryFont};
    &:hover {
        background-color: ${yellow};
    }


`;

const Menu = styled.ul`
    width: 70%;
    /* border: 2px solid red; */
    height: 6rem;
    padding: 0.5rem;
    justify-content: space-around;
`;

const Wrapper = styled.div`
    background-color: ${white};
    box-shadow: 0 0 0.6rem 0 rgba(0,0,0,.1);
    padding: 1.5rem;
    padding-left: 15rem;
`;

const Para1 = styled(Para)`
    margin-top: 0.5rem;
    font-size: 1.6rem;
    font-weight: 300;
`;

const Navbar = () => {
    return (
        <>
            <Nav className='d-flex' >
                <a href="/"><Logo src={logo} alt="logo" /></a>

                <Menu className='d-flex' >

                    <NavLink menuitem="Warehouse" menulinks={["Find a Warehouse", "Enlist Warehouse", "Surveillance"]} />

                    <NavLink menuitem="Finance" menulinks={["Loan against commodity", "Arya paysafe (escrow)", "Line of Credit"]} />

                    <NavLink menuitem="Marketplace" menulinks={["Find Buyers", "Find Sellers", "Participate in e-Action", "Explore Mandi Price", "Arya Credit Stock"]} />

                    <NavLink menuitem="Who we serve" menulinks={["Processors", "Financial Institution", "Agri Corporation", "International Buyers", "Developers Actors"]} />

                    <NavLink menuitem="Services" menulinks={["Storage & Logistics Solutions", "Audits & Surveillance", "Consulting", "Arjun Procurement"]} />

                </Menu>


                <SignUpBtn>Login/SignUp</SignUpBtn>
            </Nav>

            <Wrapper>
                <Heading3>Find a seller</Heading3>
                <Para1>View sell requirements posted by users looking for immediate selling</Para1>
            </Wrapper>
        </>
    )
}

export default Navbar