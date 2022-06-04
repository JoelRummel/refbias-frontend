import useRequest from "./useRequest";

const useNewsApiRequest = () => {
    const { get } = useRequest();

    const getLatestNews = () => get('/news/latest');

    return {
        getLatestNews
    };
};

export default useNewsApiRequest;