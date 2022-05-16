import { useContext, useEffect } from "react";
import AuthContext from "./contexts/AuthContext";
import UserContext from "./contexts/UserContext";
import useAuthApiRequest from "./hooks/useApiRequest/useAuthApiRequest";

const AUTH_TOKEN_KEY = "AUTH_TOKEN_KEY";

const AuthManager = () => {
    const { authToken, setAuthToken } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);

    const { loginWithToken } = useAuthApiRequest();

    const tryLogin = async () => {
        await new Promise(r => setTimeout(r, 100));
        console.log("calling loginWithToken");
        const result = await loginWithToken();
        if (result?.user) setUser(result.user);
    };

    useEffect(() => {
        const token = localStorage.getItem(AUTH_TOKEN_KEY);
        if (token !== authToken) {
            setAuthToken(token);
            tryLogin();
        }
    }, []);

    useEffect(() => {
        if (authToken) localStorage.setItem(AUTH_TOKEN_KEY, authToken);
    }, [authToken]);

    return null;
};

export default AuthManager;