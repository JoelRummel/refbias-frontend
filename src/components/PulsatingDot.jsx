import styled, { keyframes } from "styled-components";

const pulsate = keyframes`
    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    25% {opacity: 1.0;}
    50% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
`;

const RingContainer = styled.div`
    position: relative;
`;

const Ring = styled.div`
    border: 3px solid white;
    -webkit-border-radius: 30px;
    height: 25px;
    width: 25px;
    position: absolute;
    left: -7px;
    top: -7px;
    -webkit-animation: ${pulsate} 2s ease-out;
    -webkit-animation-iteration-count: infinite; 
    opacity: 0.0
`;

const Dot = styled.div`
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 50%;
`;

const PulsatingDot = ({ color }) => {
    return (
        <RingContainer>
            <Ring />
            <Dot />
        </RingContainer>
    );
};

export default PulsatingDot;