import React from 'react';
import styled from 'styled-components';
import { black, Heading5, primaryFont, TextPara } from '../CommonComp';

const Wrapper = styled.div`
    width: 100%;
    padding: 2rem;
    justify-content: space-evenly;
`;

const FooterContainer = styled.div`
    width: 25%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const FooterHeading = styled(Heading5)`
`;

const FooterItem = styled(TextPara)`
    span {
        font-weight: bold;
    }
    a {
        text-decoration: none;
        color: ${black};
    }
`;

const FooterLinks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const FooterLink = styled.li`
    list-style: none;

    a {
        color: ${black};
        text-decoration: none;
        font-size: 1.8rem;
        font-family: ${primaryFont};
        font-weight: bold;

    }
`;

const Copyright = styled(TextPara)`
    text-align: center;
    padding: 1.3rem;

`;

const Footer = () => {
    return (
        <>
            <Wrapper className='d-flex'>
                <FooterContainer>
                    <FooterHeading>Get in Touch</FooterHeading>
                    <FooterItem>Aryatech Platforms Private Limited</FooterItem>
                    <FooterItem><span>Web</span>: <a href="/">www.arya.ag</a></FooterItem>
                    <FooterItem><span>Email</span>: <a href="/">contact@arya.ag</a></FooterItem>
                    <FooterItem><span>Phone</span>: +91 1234567890</FooterItem>
                </FooterContainer>

                <FooterContainer>
                    <FooterHeading>Address</FooterHeading>
                    <FooterItem>Aryatech Platforms Private Limited</FooterItem>
                    <FooterItem>H 82, Sector 63<br />Noida 201301 UP INDIA</FooterItem>
                    <FooterItem>Grievance Redressal Officer<br />Ms. Ankita Jain -0120-4859319</FooterItem> 
                </FooterContainer>

                <FooterLinks>
                    <FooterLink><a href="/">Home</a></FooterLink>
                    <FooterLink><a href="/">About us</a></FooterLink>
                    <FooterLink><a href="/">Our Services</a></FooterLink>
                    <FooterLink><a href="/">Media Coverage</a></FooterLink>
                    <FooterLink><a href="/">Who We Serve</a></FooterLink>
                    <FooterLink><a href="/">Contact us</a></FooterLink>
                </FooterLinks>
            </Wrapper>

            <hr />

            <Copyright>
            Copyright © 2022 Aryatech Platforms Private Limited. All Rights Reserved.
            </Copyright>

        </>
    )
}

export default Footer