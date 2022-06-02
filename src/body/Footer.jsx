import styled from "styled-components";

const FooterDiv = styled.div`
    background-color: rgb(50,50,50);
    padding: 30px;
    margin-top: 40px;
`;

const Disclaimer = styled.p`
    font-size: 11px;
    text-align: center;
    color: rgb(210,210,210);
`;

const Footer = () => (
    <FooterDiv>
        <Disclaimer>
            This content is not endorsed by, supported by, or otherwise affiliated with the NFL.
        </Disclaimer>
    </FooterDiv>
);

export default Footer;