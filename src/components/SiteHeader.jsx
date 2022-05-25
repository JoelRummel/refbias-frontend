import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ModalContext from "../contexts/ModalContext";
import UserContext from "../contexts/UserContext";

const Navbar = styled.div`
    margin-bottom: 10px;
    border-bottom: 2px solid black;
`;

const LinkRibbon = styled.div`
    display: flex;
`;

const LinkWrapper = styled.div`
    padding: 5px;
    margin: 5px;
    border: 1px solid black;
    border-radius: 3px;
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 10px;
`;

export const SiteHeader = () => {
    const { user } = useContext(UserContext);
    const { setOpenModal } = useContext(ModalContext);

    const handleLoginClick = () => {
        if (!user) {
            setOpenModal("login");
        }
    };

    return (
        <Navbar>
            <Title>Refbias</Title>
            <LinkRibbon>
                <Link to="/">
                    <LinkWrapper>
                        Home
                    </LinkWrapper>
                </Link>
                <Link to="/games">
                    <LinkWrapper>
                        Games
                    </LinkWrapper>
                </Link>
                <a href="#" onClick={handleLoginClick}>
                    <LinkWrapper>
                        {user ? `Logged in as ${user.username}` : 'Login'}
                    </LinkWrapper>
                </a>
            </LinkRibbon>
        </Navbar>
    );
}