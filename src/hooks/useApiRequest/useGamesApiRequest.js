import useRequest from "./useRequest";

const useGamesApiRequest = () => {
    const { get } = useRequest();

    const getUpcomingGames = () => get('/games');

    return {
        getUpcomingGames
    };
};

export default useGamesApiRequest;