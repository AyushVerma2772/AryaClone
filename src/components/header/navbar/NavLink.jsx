import React from 'react';
import styled from 'styled-components';
import { black, primaryFont, secondaryColor, white, yellow } from '../../CommonComp';

const MenuItem = styled.li`
    list-style: none;
    cursor: pointer;
    font-size: 1.5rem;
    font-family: ${primaryFont};
    color: ${black};
    font-weight: 500;
`;

const Wrapper = styled.div`
    position: relative;
    &:hover .dropdown {
        visibility: visible;
        opacity: 1;
    }
    transition: all 0.3s ease-in ;
`;

const DropContainer = styled.ul`
    width: 22rem;
    position: absolute;
    top: 120%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    box-shadow: 0.2rem 0.2rem 1rem -0.3rem #00000055;
    z-index: 9;
    background-color: ${white};
    transition: all 0.3s ease-in ;
    opacity: 0;
    visibility: hidden;
    border-radius: 0.7rem;
`;

const Item = styled.li`
    list-style: none;

    a {
        font-size: 1.6rem;
        color: ${secondaryColor};
        font-family: ${primaryFont};
        text-decoration: none;
        font-weight: 500;
        &:hover {
            color: ${yellow};
        }
    }
`;

const NavLink = ({ menuitem, menulinks }) => {
    return (
        <>
            <Wrapper>
                <MenuItem>{menuitem}</MenuItem>
                <DropContainer className='dropdown' >
                     {
                        menulinks.map((ele, i) => {
                            return (
                                <Item key={i}><a href="/">{ele}</a></Item>
                            )
                        })
                     }
                </DropContainer>

            </Wrapper>
        </>
    )
}

export default NavLink