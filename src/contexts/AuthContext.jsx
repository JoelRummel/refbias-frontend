import { createContext } from "react";

const AuthContext = createContext({
    authToken: "",
    setAuthToken: () => { }
});

export default AuthContext;