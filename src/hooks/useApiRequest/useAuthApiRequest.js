import useRequest from "./useRequest";

const useAuthApiRequest = () => {
    const { post } = useRequest();

    const login = (email, password) => post('/auth/login', { email, password });

    const signup = (email, username, password) =>
        post('/auth/signup', { email, username, password });

    const loginWithToken = () => {
        return post('/auth/loginWithToken');
    };

    return {
        login,
        signup,
        loginWithToken
    };
};

export default useAuthApiRequest;