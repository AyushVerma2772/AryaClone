import React from 'react';
import styled from 'styled-components';
import { secondaryColor, white } from '../CommonComp';
import Card from './Card';
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import wheat from "../../images/wheat.jpg";
import pea from "../../images/pea.jpg";
import gram from "../../images/gram.jpg";


const Wrapper = styled.main`
    border: 0.1rem solid gray;
    width: 85%;
    margin: 5rem auto ;
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: ${white};
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
`;

const ButtonBox = styled.div`
    margin: 1rem auto;
    display: flex;
    gap: 1rem;
`;

const Button = styled.button`
    border: 0.1rem solid ${secondaryColor};
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1rem 1.5rem;
    background-color: ${white};
    color: ${secondaryColor};
    cursor: pointer;

    &:hover {
        color: ${white};
        background-color: ${secondaryColor};
    }
`;

const PrevBtn = styled(Button)`
    color: ${white};
    background-color: ${secondaryColor};
`;

const NextBtn = styled(Button)`
    color: ${white};
    background-color: ${secondaryColor};
`;


const CardContainer = () => {
    return (
        <>
            <Wrapper className='d-flex' >

                <Card prodImage={wheat} name='Wheat' location='Kota, Rajasthan' qty="225 MT" price="₹25600/MT" paymentTerm="Ex Warehouse" id='78712121' time='14 hours' />

                <Card prodImage={pea} name='Green Peas' location='Kota, Rajasthan' qty="225 MT" price="₹25600/MT" paymentTerm="Ex Warehouse" id='78712121' time='14' />

                <Card prodImage={gram} name='benagl Gram' location='Kota, Rajasthan' qty="225 MT" price="₹25600/MT" paymentTerm="Ex Warehouse" id='78712121' time='14' />

                <Card prodImage={wheat} name='Wheat' location='Kota, Rajasthan' qty="225 MT" price="₹25600/MT" paymentTerm="Ex Warehouse" id='78712121' time='14 hours' />

                <Card prodImage={pea} name='Green Peas' location='Kota, Rajasthan' qty="225 MT" price="₹25600/MT" paymentTerm="Ex Warehouse" id='78712121' time='14' />

                <Card prodImage={gram} name='benagl Gram' location='Kota, Rajasthan' qty="225 MT" price="₹25600/MT" paymentTerm="Ex Warehouse" id='78712121' time='14' />

                <Card prodImage={pea} name='Green Peas' location='Kota, Rajasthan' qty="225 MT" price="₹25600/MT" paymentTerm="Ex Warehouse" id='78712121' time='14' />

                <Card prodImage={gram} name='benagl Gram' location='Kota, Rajasthan' qty="225 MT" price="₹25600/MT" paymentTerm="Ex Warehouse" id='78712121' time='14' />


                <ButtonBox>
                    <PrevBtn className='prev' ><AiOutlineDoubleLeft /></PrevBtn>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <NextBtn className='next' ><AiOutlineDoubleRight /></NextBtn>
                </ButtonBox>

            </Wrapper>
        </>
    )
}

export default CardContainer