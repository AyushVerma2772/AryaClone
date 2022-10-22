import styled from "styled-components";

// Colors
export const primaryColor = "#00a789";
export const secondaryColor = "#606d41";
export const white = "#fff";
export const black = "#000";
export const green = "#219653";
export const yellow = "#ffc107";

// Fonts
export const primaryFont = "'Montserrat', sans-serif";
export const secondaryFont = "Roboto";


// Components
export const Heading1 = styled.h1`
    font-size: 2.9rem;
    font-weight: 700;
    font-family: ${primaryFont};
    color: ${black};
    text-align: center;
    margin-bottom: 1.8rem;
`;

export const Heading3 = styled.h3`
    font-size: 2.7rem;
    font-weight: 600;
    font-family: ${secondaryFont};
    color: ${black};
`;

export const Heading4 = styled.h4`
    font-size: 2.5rem;
    font-weight: 600;
    font-family: ${primaryFont};
    color: ${black};
`;
export const Heading5 = styled.h5`
    font-size: 2.3rem;
    font-weight: 600;
    font-family: ${primaryFont};
    color: ${black};
`;

export const Para = styled.p`
    font-size: 1.8rem;
    font-weight: 300;
    font-family: ${secondaryFont};
    color: ${black};
    word-wrap: break-word;
`;

export const TextPara = styled.p`
    font-size: 1.6rem;
    font-family: ${primaryFont};
    color: ${black};
    word-wrap: break-word;
`;

export const Button = styled.button`
    font-size: 1.8rem;
    color: ${white};
    font-family: ${primaryFont};
    border-radius: 0.5rem;
    cursor: pointer;
    border: 0;
    background-color: ${primaryColor};
    padding: 0.7rem 1.5rem;
    border: 0.15rem solid ${primaryColor};
    &:hover {
        background-color: ${yellow};
    }

`;


