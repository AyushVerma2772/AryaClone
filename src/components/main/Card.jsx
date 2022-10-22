import React from 'react';
import styled from 'styled-components';
import { black, Button, Heading4, Heading5 } from '../CommonComp';
import { CiLocationOn } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineTag } from "react-icons/ai";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiOutlineInbox } from "react-icons/ai";

const Wrapper = styled.div`
    width: 96%;
    padding: 2rem;
    border: 0.1rem solid #dbdbdb;
    box-shadow: 2px 2px 4px rgb(0 0 0 / 8%);
    border-radius: 0.3rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 30%;
    height: 17.5rem;
    border-radius: 0.3rem;
`;

const Left = styled.div`
    width: 37%;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
`;

const Right = styled.div`
    flex-direction: column;
    width: 28%;
    border: 0;
    padding-left: 2rem;
    border-left: 0.1px solid gray;
    gap: 1.5rem;
`;

const ProductName = styled.div`
    width: 100%;
    justify-content: space-between;
`;

const CardHeading = styled(Heading4)`
    span {
        color: gray;
    }
`

// const SellBadge = styled.span`
//     padding: 0.3rem 1.1rem;
//     border-radius: 2.5rem;
//     font-size: 1.6rem;
//     font-weight: bold;
//     font-family: ${primaryFont};
//     color: ${black};
//     background-color: #8cc641;
// `;

const InnerWrapper = styled.div`
    width: 100%;
    display: flex;
    .icon {
        color: #484848;
        font-size: 2rem;
        margin-right: 1rem;
    }
`;

const Title = styled(Heading5)`
    font-size: 1.8rem;
    color: #484848;
    font-weight: 300;
    span {
        font-weight: 600;
        color: ${black};
    }
`;

const CardButton = styled(Button)`
    /* padding: 1rem 6.5rem; */
`;

const Card = ({ prodImage, name, location, qty, price, paymentTerm, id, time }) => {
    return (
        <>
            <Wrapper>
                <Image src={prodImage} alt="card-image" />

                <Left className='d-flex'>
                    <ProductName className='d-flex'>
                        <CardHeading>{name}, <span>Good quality</span></CardHeading>
                        {/* <SellBadge>sell</SellBadge> */}
                    </ProductName>

                    <InnerWrapper>
                        <CiLocationOn className='icon' />
                        <Title>{location}</Title>
                    </InnerWrapper>

                    <InnerWrapper>
                        <CiBoxes className='icon' />
                        <Title>Quantity: <span>{qty}</span></Title>
                    </InnerWrapper>

                    <InnerWrapper>
                        <AiOutlineTag className='icon' />
                        <Title>Expected Price: <span>{price}</span></Title>
                    </InnerWrapper>

                    <InnerWrapper>
                        <MdOutlinePayment className='icon' />
                        <Title>Payment Term: <span>{paymentTerm}</span></Title>
                    </InnerWrapper>
                </Left>


                <Right className='d-flex'>
                    <InnerWrapper>
                        <AiOutlineFieldTime className='icon' />
                        <Title>{time} ago</Title>
                    </InnerWrapper>

                    <InnerWrapper>
                        <AiOutlineInbox className='icon' />
                        <Title>ID: {id}</Title>
                    </InnerWrapper>

                    <CardButton>View Details</CardButton>
                </Right>
            </Wrapper>
        </>
    )
}

export default Card