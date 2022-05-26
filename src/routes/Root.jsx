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
            <div>
                <RefTriangle qualityScore={0.2} biasScore={1.5} size={300} away="DET" home="GB" />
            </div>
        </>
    );
};