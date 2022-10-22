import React from 'react';
import styled from 'styled-components';
import { black, Button, primaryColor, primaryFont, white } from '../CommonComp';

const FilterForm = styled.div`
    width: 100%;
    height: 8rem;
    background-color: #f9f9f9;
    box-shadow: 0 0.1rem 0.6rem rgb(0 0 0 / 16%);
    padding: 2.5rem;
    gap: 1.5rem;
`;

const Select = styled.select`
    width: 18%;
    background-color: ${white};
    border: 0.2rem solid ${primaryColor};
    outline: 0;
    padding: 0.5rem 1rem;
    font-size: 1.8rem;
    border-radius: 0.7rem;
`;

const Option = styled.option`
    font-size: 1.8rem;
    font-family: ${primaryFont};
    color: ${black};
`;


const FilterBox = () => {
    return (
        <>
            <FilterForm action="#" className='d-flex' >
                <Select name="commodity" id="commodity">
                    <Option value="0">Select commodity</Option>
                </Select>

                <Select name="state" id="state">
                    <Option value="0">Select state</Option>
                </Select>

                <Select name="city" id="city">
                    <Option value="0">Select city</Option>
                </Select>

                <Button>Search</Button>


            </FilterForm>

        </>
    )
}

export default FilterBox