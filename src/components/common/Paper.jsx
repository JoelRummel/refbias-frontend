import styled from "styled-components";

const PaperDiv = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: ${({ pad }) => pad ? '10px' : '0'};
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); 
	-webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); 
	-moz-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Paper = ({ children, className, style, pad }) => {
    return (
        <PaperDiv className={className} style={style} pad={pad}>
            {children}
        </PaperDiv>
    );
};