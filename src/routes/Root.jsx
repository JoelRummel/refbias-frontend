import React, { useContext } from "react";
import RefTriangle from "../components/RefTriangle";
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
            <p>Here is an example RefTriangle:</p>
            <RefTriangle qualityScore={1.7} biasScore={0.2} />
        </>
    );
};