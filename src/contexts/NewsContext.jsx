import { createContext } from 'react';

const NewsContext = createContext({
    news: {
        latest: []
    },
    setNews: () => { }
});

export default NewsContext;