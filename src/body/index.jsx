import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { SiteHeader } from "../components";
import Footer from './Footer';
import Sidebar from "./Sidebar";

const BodyRoot = styled.div`
    background-color: #edeef0;
`;

const BodyCenterer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`;

const ContentSidebarStacker = styled.div`
    flex-grow: 1;
    max-width: 1600px;
    display: flex;
    flex-wrap: wrap;
`;

const ContentWrapper = styled.div`
    flex-grow: 4;
    flex-basis: 600px;
    padding: 10px;
`;

const Body = () => (
    <BodyRoot>
        <SiteHeader />
        <BodyCenterer>
            <ContentSidebarStacker>
                <ContentWrapper>
                    <Outlet />
                </ContentWrapper>
                <Sidebar />
            </ContentSidebarStacker>
        </BodyCenterer>
        <Footer />
    </BodyRoot>
);

export default Body;