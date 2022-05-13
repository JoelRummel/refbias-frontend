import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { SiteHeader, LoginModal } from "./components";
import AuthContext from "./contexts/AuthContext";
import ModalContext from "./contexts/ModalContext";
import UserContext from "./contexts/UserContext";
import { Root } from "./routes";

const Body = () => (
    <div>
        <SiteHeader />
        <Outlet />
        <p>This is footer</p>
    </div>
);

const App = () => {
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState("");
    const [openModal, setOpenModal] = useState("login");

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken }}>
            <UserContext.Provider value={{ user, setUser }}>
                <ModalContext.Provider value={{ openModal, setOpenModal }}>
                    <LoginModal />
                    <Routes>
                        <Route path="/" element={<Body />}>
                            <Route index element={<Root />} />
                            <Route path="game">
                                <Route path=":gameId">
                                    <Route index element={<p>Viewing game info</p>} />
                                    <Route path="vote" element={<p>Voting on game</p>} />
                                </Route>
                            </Route>
                            <Route path="games" element={<p>Viewing all games</p>} />
                            <Route path="news">
                                <Route index element={<p>Viewing all news posts</p>} />
                                <Route path=":postId" element={<p>Viewing a certain news post</p>} />
                            </Route>
                        </Route>
                    </Routes>
                </ModalContext.Provider>
            </UserContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
