import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import ModalContext from "../contexts/ModalContext";
import UserContext from "../contexts/UserContext";
import Referee from "../resources/referee.png";

const Navbar = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(50,50,50);
    padding: 0px 20px;
`;

const LinkRibbon = styled.div`
    display: inline-flex;
    align-self: stretch;
    align-items: stretch;
`;

const LinkWrapper = styled.div`
    margin: 0px 10px;
`;

const StyledLink = styled(Link)`
    margin-left: 15px;
    color: white;
    text-decoration: none;
    box-shadow: 0 ${({ selected }) => selected ? -3 : 0}px 0 #189dff inset;
    display: flex;
    align-items: center;
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
    const { pathname } = useLocation();

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
                <StyledLink to="/games" selected={pathname.startsWith("/games")}>
                    <LinkWrapper>
                        Games
                    </LinkWrapper>
                </StyledLink>
                <StyledLink to="/">
                    <LinkWrapper>
                        FAQ
                    </LinkWrapper>
                </StyledLink>
                <button style={{ marginLeft: 15, alignSelf: 'center', display: 'inline-flex', alignItems: 'center', padding: '2px 5px', cursor: 'pointer' }} onClick={handleLoginClick}>
                    <BiUserCircle size={24} />
                    <span style={{ marginLeft: 3 }}>
                        {user ? user.username : 'Login/Register'}
                    </span>
                </button>
            </LinkRibbon>
        </Navbar>
    );
}