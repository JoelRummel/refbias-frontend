import { useState } from "react";
import AuthContext from "../contexts/AuthContext";
import ModalContext from "../contexts/ModalContext";
import NewsContext from "../contexts/NewsContext";
import UserContext from "../contexts/UserContext";

const ContextProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState("");
    const [openModal, setOpenModal] = useState("");
    const [news, setNews] = useState({ latest: [] });

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken }}>
            <UserContext.Provider value={{ user, setUser }}>
                <ModalContext.Provider value={{ openModal, setOpenModal }}>
                    <NewsContext.Provider value={{ news, setNews }}>
                        {children}
                    </NewsContext.Provider>
                </ModalContext.Provider>
            </UserContext.Provider>
        </AuthContext.Provider>
    );
};

export default ContextProviders;