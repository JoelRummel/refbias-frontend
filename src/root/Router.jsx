import { Outlet, Route, Routes } from "react-router-dom";
import { SiteHeader } from "../components";
import { Root } from "../routes";
import Game from "../routes/Game";
import Games from "../routes/Games";

const Footer = () => (
    <div style={{ backgroundColor: 'rgb(50,50,50)', padding: '30px', marginTop: 40 }}>
        <p style={{ fontSize: 11, textAlign: 'center', color: 'rgb(200,200,200)' }}>
            This content is not endorsed by, supported by, or otherwise affiliated with the NFL.
        </p>
    </div>
)

const Body = () => (
    <div>
        <SiteHeader />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ flexGrow: 1, maxWidth: 1600, display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ flexGrow: 1, minWidth: 500, padding: '0px 20px' }}>
                    <Outlet />
                </div>
                <div style={{ flexGrow: 1, minWidth: 200, maxWidth: 300, paddingRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                    <div style={{ border: '2px solid black', marginBottom: 20 }}>
                        <h4>Cast your vote:</h4>
                        <p>Game one</p>
                        <p>Game two</p>
                        <p>Game three</p>
                    </div>
                    <div style={{ border: '2px solid black' }}>
                        <h4>Latest News</h4>
                        <p>Story one</p>
                        <p>Story two</p>
                        <p>Story three</p>
                    </div>
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