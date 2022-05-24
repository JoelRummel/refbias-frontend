import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { teamsMap } from '../config/teams';
import useGamesApiRequest from '../hooks/useApiRequest/useGamesApiRequest';
import { readableDateDiff } from '../util/dates';

const GameCard = styled.div`
    border: 2px solid black;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
`;

const Game = ({ game: { id, away, home, status, voteOpenTime, voteCloseTime } }) => {
    const awayInfo = teamsMap[away];
    const homeInfo = teamsMap[home];

    const now = new Date().getTime();
    let statusText = 'Closed - click to see voting results';
    if (status === 'voting') statusText = `Open - voting ends in ${readableDateDiff(now, voteCloseTime)}`;
    if (status === 'upcoming') statusText = `Closed - voting starts in ${readableDateDiff(now, voteOpenTime)}`;

    return (
        <Link to={'/game/' + id}>
            <GameCard>
                <p>{awayInfo.mascot} at {homeInfo.mascot}</p>
                <p>Voting status: {statusText}</p>
            </GameCard>
        </Link>
    );
}

const Games = () => {
    const [games, setGames] = useState(null);

    const { getUpcomingGames } = useGamesApiRequest();

    const fetchGames = async () => {
        const { games: newGames } = await getUpcomingGames();
        setGames(newGames);
    }

    useEffect(() => {
        fetchGames();
    }, []);

    return (
        <div className="App">
            <h3>Games</h3>
            <p>Here's a list of games, sorted in no particular order lol</p>
            <div>
                {games ? games.map(game => <Game key={game.id} game={game} />) : <p>LOADING...</p>}
            </div>
        </div>
    );
}

export default Games;