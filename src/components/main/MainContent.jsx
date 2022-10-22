import React from 'react';
import styled from 'styled-components';
import { black, Heading1, Heading3, primaryFont, TextPara } from '../CommonComp';

const Wrapper = styled.div`
    width: 85%;
    padding: 1rem;
    margin: 0 auto;
`;

const ContentHeading = styled(Heading3)`
    font-family: ${primaryFont};
    font-size: 2.1rem;
    margin: 1.5rem 0;
`;

const ContentList = styled.ul`
    width: 90%;
    margin: 0 auto;
`;

const ListItem = styled.li`
    font-size: 1.6rem;
    font-family: ${primaryFont};
    color: ${black};
    word-wrap: break-word;
    strong {
        margin-bottom: 0.5rem;
    }
`;

const MainContent = () => {
    return (
        <>
            <Wrapper>
                <Heading1>ARYA: The Best Platform to Sell Agricultural Commodity Online</Heading1><br />
                <TextPara>Agriculture in India is undeniably the leading livelihood provider as we have a significant portion of people dependent on farming, especially in rural areas. Farming is not just about cultivation and harvesting. After the produce is ready, the bigger challenge is to find the right buyers at the right price for the agricultural produce.
                <br />
                <br />
                So, Arya was created aiming to meet these challenges, keeping in mind the needs of the farmers and farmer producer organizations.
                </TextPara><br /><br />

                <ContentHeading>About Arya – e-mandi to sell agricultural commodity in India</ContentHeading>
                <TextPara>Arya serves as a common marketplace, a platform for the buyers and sellers of agricultural products so that the authentic parties can connect and strike a deal. Apart from buying and selling, we also offer other services.
                <br /><br />
                The need for online presence can’t be ignored in the present day and time. This applies to the agricultural sector as well. If anyone wants to sell agricultural commodity online, Arya is the best place with more than 1200 successful trades and more than 600000 MT commodities traded till date.
                <br /><br />
                We work relentlessly to improve value realization for the farmers in our country with the help of our various services. We work with farmer producer organizations consisting of both producer companies and cooperative firms to improve the returns for their small farmers. </TextPara>
                <br /><br />

                <ContentHeading>How our service help buy and sell agricultural commodity in India?</ContentHeading><br /><br />

                <ContentList>
                    <ListItem>
                        <strong>Warehousing and logistics solutions</strong><br />
                        <TextPara>Arya offers a wide array of services which includes storage and logistic services as well. All the participants across the value chain can store their agricultural commodities in our warehouse. We offer comprehensive storage solutions to all the participants.</TextPara>
                        
                    </ListItem><br /><br />
                    <ListItem>
                        <strong>Arjun - Procurement Facilitation</strong><br />
                        <TextPara>We can efficiently manage the procurement process for our customers owing to our expertise in commodities and their quality standards. Add to that, our incredible relationship across the value chain enables us to manage procurement for our esteemed customers. Using various models, we facilitate the procurement process.</TextPara>
                    </ListItem><br /><br />
                    <ListItem>
                        <strong>Audits and Surveillance</strong><br />
                        <TextPara>Our team is equipped with an understanding of commodities, warehousing, Marketing, as well as Banking. This expertise offers us an edge to efficiently monitor various processes related to storage and documentation. We offer packages for third-party audits on behalf of the bank, other financial institutions, Agribusiness corporations, and FMCG giants. Our audit reports are comprehensive and insightful.</TextPara>
                    </ListItem><br /><br />
                    <ListItem>
                        <strong>Consulting</strong><br />
                        <TextPara>We have a deep knowledge of the minute details of agriculture and management of different aspects of the value chain. This enables us to assist the clients and offer them insight as well as inputs in areas of rural finance and agriculture.</TextPara>
                    </ListItem><br /><br />

                </ContentList>

                <ContentHeading>Loan Assistance</ContentHeading>
                <TextPara>You can also get loan assistance from Arya just by following some easy procedures. There is an easy documentation process as all you need is your Aadhaar and PAN card for verification, and you can get a loan amount of up to 50 lacs. We also offer payment protection and credit services.
                <br /><br />
                The loan gets disbursed within just 24 hours, and customer support is always there to answer your queries 24*7. Also, there is no cumulative interest; you pay for exact days with no compounding.
                <br /><br />
                If you wish to sell agricultural commodity in India to the right buyers at the right price or wish to get benefitted from our various other services, get in touch with us today!</TextPara>
            </Wrapper>
        </>
    )
}

export default MainContent