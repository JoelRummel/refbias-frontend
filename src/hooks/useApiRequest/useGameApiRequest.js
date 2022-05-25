import useRequest from "./useRequest";

const useGameApiRequest = () => {
    const { get, post } = useRequest();

    const getGame = (id) => get(`/game/${id}`);

    const castVote = (id, { quality, bias = 0, comments = '' }) =>
        post(`/game/${id}/vote`, { quality: parseInt(quality), bias: parseInt(bias), comments });

    return {
        getGame,
        castVote
    };
};

export default useGameApiRequest;