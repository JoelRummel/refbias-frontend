import { Outlet, Route, Routes } from "react-router-dom";
import { SiteHeader } from "../components";
import Paper from "../components/common/Paper";
import { Root } from "../routes";
import Game from "../routes/Game";
import Games from "../routes/Games";

const Footer = () => (
    <div style={{ backgroundColor: 'rgb(50,50,50)', padding: '30px', marginTop: 40 }}>
        <p style={{ fontSize: 11, textAlign: 'center', color: 'rgb(200,200,200)' }}>
            This content is not endorsed by, supported by, or otherwise affiliated with the NFL.
        </p>
    </div>
);

const Body = () => (
    <div style={{ backgroundColor: '#edeef0' }}>
        <SiteHeader />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ flexGrow: 1, maxWidth: 1600, display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ flexGrow: 1, minWidth: 500, padding: '0px 20px' }}>
                    <Outlet />
                </div>
                <div style={{ flexGrow: 1, minWidth: 200, maxWidth: 300, paddingRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
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
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Body />}>
                <Route index element={<Root />} />
                <Route path="game">
                    <Route path=":gameId">
                        <Route index element={<Game />} />
                    </Route>
                </Route>
                <Route path="games" element={<Games />} />
                <Route path="news">
                    <Route index element={<p>Viewing all news posts</p>} />
                    <Route path=":postId" element={<p>Viewing a certain news post</p>} />
                </Route>
            </Route>
        </Routes>
    );
};

export default Router;