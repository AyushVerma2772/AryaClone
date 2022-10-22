import React from 'react';
import styled from 'styled-components';
import { black, Button, green, Heading3, Para, yellow } from '../CommonComp';
import bannerImg from '../../images/banner.png'

const Wrapper = styled.div`
    width: 85%;
    border: 0.3rem solid ${green};
    height: 25rem;
    margin: 3rem auto;
    border-radius: 0.7rem;
    position: relative;
    justify-content: space-between;
    padding-left: 10%;
`;

const Triangle = styled.div`
    position: absolute;
    clip-path: polygon(0 0, 0 39%, 39% 0);
    background-color: ${green};
    /* border: 2px solid red; */
    top: -0.2rem;
    left: -0.2rem;
    height: 35rem;
    width: 35rem;
`;

const Left = styled.div`
    padding-left: 3rem;
    width: 50%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    
`;

const BannerImg = styled.img`
    width: 27rem;
    align-self: flex-end;
`;

const BannerBtn = styled(Button)`
    padding: 1.2rem 2.5rem;
    font-weight: bold;
    background-color: ${yellow};
    color: ${black};
    border: 0;
`;

const Banner = () => {
    return (
        <>  
            <Wrapper className='d-flex' >
                <Triangle />

                <Left className='d-flex' >
                    <Heading3>Hi, looking for verified sellers?</Heading3>
                    <Para style={{color: 'gray'}}>Post your trade requirement and get best prices from verified sellers</Para>
                    <BannerBtn>Post Trade Requirement</BannerBtn>
                </Left>

                <BannerImg src={bannerImg} alt="banner-img" ></BannerImg>
            </Wrapper>
        </>
    )
}

export default Banner