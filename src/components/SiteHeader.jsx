import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ModalContext from "../contexts/ModalContext";
import UserContext from "../contexts/UserContext";
import Referee from "../resources/referee.png";

const Navbar = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(50,50,50);
    padding: 0px 20px;
`;

const LinkRibbon = styled.div`
    display: inline-flex;
`;

const LinkWrapper = styled.div`
    padding: 5px;
    margin: 5px;
`;

const StyledLink = styled(Link)`
    margin-left: 15px;
    color: white;
    text-decoration: none;
`;

const LogoContainer = styled.div`
    display: inline-flex;
    align-items: center;
`;

const LogoIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    -webkit-filter: invert(100%); /* Safari/Chrome */
    filter: invert(100%);
`;

const Title = styled.h1`
    display: inline;
    color: white;
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
            <Link to="/">
                <LogoContainer>
                    <LogoIcon src={Referee} alt="Refbias Logo" />
                    <Title>RefBias</Title>
                </LogoContainer>
            </Link>
            <LinkRibbon>
                <StyledLink to="/">
                    <LinkWrapper>
                        News
                    </LinkWrapper>
                </StyledLink>
                <StyledLink to="/games">
                    <LinkWrapper>
                        Games
                    </LinkWrapper>
                </StyledLink>
                <StyledLink to="/">
                    <LinkWrapper>
                        FAQ
                    </LinkWrapper>
                </StyledLink>
                <StyledLink to="#" onClick={handleLoginClick}>
                    <LinkWrapper>
                        {user ? `Logged in as ${user.username}` : 'Login'}
                    </LinkWrapper>
                </StyledLink>
            </LinkRibbon>
        </Navbar>
    );
}