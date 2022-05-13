import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import env from "../../config/env";

const API_URL = env.apiBaseUrl;

const request = async (method, endpoint, headers, body) => {
    const res = await fetch(API_URL + endpoint, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            "Content-Type": "application/json",
            ...(headers || {})
        }
    });
    try {
        const json = await res.json();
        if (!res.ok) return { error: json.message };
        return json;
    } catch (e) {
        console.error(e);
        return { error: "An unknown error occurred" };
    }
};

const useRequest = () => {
    const { authToken } = useContext(AuthContext);
    const baseHeaders = authToken ? { Authorization: authToken } : {};

    return {
        get: (endpoint, headers) => request("GET", endpoint, { ...baseHeaders, ...headers }),
        post: (endpoint, body, headers) => request("POST", endpoint, { ...baseHeaders, ...headers }, body)
    };
};

export default useRequest;