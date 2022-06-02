import styled from "styled-components";
import Paper from "../components/common/Paper";

const SidebarContainer = styled.div`
    flex-grow: 1;
    min-width: 200px;
    max-width: 300px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Paper style={{ marginBottom: 20 }} pad>
                <h4>Cast your vote:</h4>
                <p>Game one</p>
                <p>Game two</p>
                <p>Game three</p>
            </Paper>
            <Paper pad>
                <h4>Latest News</h4>
                <p>Story one</p>
                <p>Story two</p>
                <p>Story three</p>
            </Paper>
        </SidebarContainer>
    );
};

export default Sidebar;