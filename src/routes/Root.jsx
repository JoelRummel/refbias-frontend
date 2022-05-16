import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

export const Root = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            <p>This is the home page, nothing to report yet.</p>
            {user ? (
                <p>Welcome, {user.username} - check out what's new:</p>
            ) : (
                <p>You're not logged in wtf?!</p>
            )}
        </>
    );
};