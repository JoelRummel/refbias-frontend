import styled from "styled-components";

const Navbar = styled.div`
    margin-bottom: 10px;
    border-bottom: 1px solid black;
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 10px;
`;

export const SiteHeader = () => {
    return (
        <Navbar>
            <Title>Refbias</Title>
        </Navbar>
    );
}