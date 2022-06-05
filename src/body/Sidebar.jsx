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

const LatestNewsHeader = styled.h4`
    margin-top: 5px;
    margin-bottom: 10px;
`;

const NewsItem = styled.div`
    border-top: 1px solid #bbb;
    padding-top: 10px;
    margin-top: 10px;
    display: flex; 
`;

const NewsThumbnail = styled.img`
    border-radius: 10px;
    object-fit: cover;
    width: 75px;
    height: 75px;
    margin-right: 5px;
`;

const NewsHeader = styled.h5`
    margin: 0px 0px 1px 0px;
`;

const NewsSubheader = styled.p`
    font-size: 12px;
    color: gray;
    margin: 0px;
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
                <LatestNewsHeader>Latest News</LatestNewsHeader>
                {news.latest.map(article => (
                    <NewsItem key={article.id}>
                        <NewsThumbnail src={article.headerImage} />
                        <div>
                            <NewsHeader>{article.headline}</NewsHeader>
                            <NewsSubheader>{article.subheader}</NewsSubheader>
                        </div>
                    </NewsItem>
                ))}
            </Paper>
            <Paper pad>
                <h4>Cast your vote:</h4>
                <p>Game one</p>
                <p>Game two</p>
                <p>Game three</p>
            </Paper>
        </SidebarContainer>
    );
};

export default Sidebar;