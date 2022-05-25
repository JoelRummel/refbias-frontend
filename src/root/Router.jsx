import { Outlet, Route, Routes } from "react-router-dom";
import { SiteHeader } from "../components";
import { Root } from "../routes";
import Game from "../routes/Game";
import Games from "../routes/Games";

const Body = () => (
    <div>
        <SiteHeader />
        <Outlet />
        <p>This is footer</p>
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