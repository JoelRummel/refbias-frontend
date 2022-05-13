import { createContext } from "react";

const UserContext = createContext({
    user: {
        username: "",
        email: "",
        emailVerified: false,
        xp: 0,
        favoriteTeams: [],
        hatedTeams: []
    },
    setUser: () => { }
});

export default UserContext;