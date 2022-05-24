export const gameToQueryString = ({ home, away, voteOpenTime, voteCloseTime }) => {
    return `home=${home}&away=${away}&voteOpenTime=${voteOpenTime}&voteCloseTime=${voteCloseTime}`;
};

export const queryStringToGame = (searchParams) => {
    const home = searchParams.get('home');
    const away = searchParams.get('away');
    const voteOpenTime = parseInt(searchParams.get('voteOpenTime') || 0);
    const voteCloseTime = parseInt(searchParams.get('voteCloseTime') || 0);
    if (!home || !away || !voteOpenTime || !voteCloseTime) return null;

    const now = new Date().getTime();
    let status;
    if (now > voteCloseTime) status = 'closed';
    else if (now > voteOpenTime) status = 'voting';
    else status = 'upcoming';

    return {
        home,
        away,
        voteOpenTime,
        voteCloseTime,
        status
    };
};