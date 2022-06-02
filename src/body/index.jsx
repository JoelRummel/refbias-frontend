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
`;

const ContentSidebarStacker = styled.div`
    flex-grow: 1;
    max-width: 1600px;
    display: flex;
    flex-wrap: wrap;
`;

const ContentWrapper = styled.div`
    flex-grow: 1;
    min-width: 500px;
    padding: 0px 20px;
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