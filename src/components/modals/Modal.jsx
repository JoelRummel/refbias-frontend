import styled from "styled-components";

const ModalBackground = styled.div`
    display: ${({ open }) => open ? 'initial' : 'none'};
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.55);
`;

const ModalContainer = styled.div`
    display: ${({ open }) => open ? 'initial' : 'none'};
    width: 90%;
    max-width: ${({ maxWidth }) => maxWidth};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    padding: 0px 15px 15px 15px;
`;

const Title = styled.h2`
    border-bottom: 1px solid gray;
`;

export const Modal = ({ open, setClosed, title, children, fullSize = false }) => {
    const maxWidth = fullSize ? '90%' : '450px';
    return (
        <>
            <ModalBackground open={open} onClick={setClosed} />
            <ModalContainer open={open} maxWidth={maxWidth}>
                <Title>{title}</Title>
                {children}
            </ModalContainer>
        </>
    );
};