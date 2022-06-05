import { useContext, useEffect } from "react";
import styled from "styled-components";
import { Paper } from "../components/common";
import NewsContext from "../contexts/NewsContext";
import useNewsApiRequest from "../hooks/useApiRequest/useNewsApiRequest";

const SidebarContainer = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 300px;
    min-width: 250px;
    padding: 10px 10px 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const Sidebar = () => {
    const { getLatestNews } = useNewsApiRequest();
    const { news, setNews } = useContext(NewsContext);

    const fetchNews = async () => {
        const { news: latest } = await getLatestNews();
        setNews({
            ...news,
            latest
        });
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <SidebarContainer>
            <Paper pad style={{ marginBottom: 20 }}>
                <h4 style={{ marginBottom: 10, marginTop: 5 }}>Latest News</h4>
                {news.latest.map(article => (
                    <div style={{ borderTop: '1px solid #bbb', paddingTop: 10, marginTop: 10, display: 'flex' }}>
                        <img src={article.headerImage} style={{ borderRadius: 10, objectFit: 'cover', width: 75, height: 75, marginRight: 5 }} />
                        <div>
                            <h5 style={{ margin: 0, marginBottom: 1 }}>{article.headline}</h5>
                            <p style={{ fontSize: 12, color: 'gray', margin: 0 }}>{article.subheader}</p>
                        </div>
                    </div>
                ))}
            </Paper>
            <Paper style={{}} pad>
                <h4>Cast your vote:</h4>
                <p>Game one</p>
                <p>Game two</p>
                <p>Game three</p>
            </Paper>
        </SidebarContainer>
    );
};

export default Sidebar;