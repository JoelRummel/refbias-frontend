import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Paper from '../components/common/Paper';
import teamLogos from '../config/teamLogos';
import { teamsMap } from '../config/teams';
import useGamesApiRequest from '../hooks/useApiRequest/useGamesApiRequest';
import { readableDateDiff } from '../util/dates';
import { gameToQueryString } from '../util/gameQueryString';

const GameCard = styled(Paper)`
    margin: 10px;
    display: flex;
    align-items: center;
    min-height: 100px;
`;

const SideContainer = styled.div`
    display: flex;
    position: relative;
    flex-grow: 1;
    align-self: stretch;
    align-items: center;
`;

const Gradient = styled.div`
    position: absolute;
    left: ${({ side }) => side === 'home' ? '-20px' : 0};
    right: ${({ side }) => side === 'away' ? '-20px' : 0};
    top: 0;
    bottom: 0;
    border-radius: 10px;
    background: linear-gradient(to ${({ side }) => side === 'away' ? 'right' : 'left'}, ${({ color }) => color} 0%, ${({ color }) => color}50 50%, rgba(0,0,0,0) 100%);
`;

const TeamLogo = styled.img`
    width: 75px;
    height: 75px;
    z-index: 1;
`;

const Game = ({ game }) => {
    const { id, away, home, status, voteOpenTime, voteCloseTime } = game;

    const awayInfo = teamsMap[away];
    const homeInfo = teamsMap[home];

    const now = new Date().getTime();
    let statusText = 'Closed - click to see voting results';
    if (status === 'voting') statusText = `Open - voting ends in ${readableDateDiff(now, voteCloseTime)}`;
    if (status === 'upcoming') statusText = `Closed - voting starts in ${readableDateDiff(now, voteOpenTime)}`;

    return (
        <Link to={`/game/${id}?${gameToQueryString(game)}`} style={{ color: 'unset' }}>
            <GameCard>
                <SideContainer>
                    <Gradient side="away" color={awayInfo.colors.primary} />
                    <TeamLogo src={teamLogos[away]} style={{ marginLeft: 15 }} />
                </SideContainer>
                <div style={{ flexGrow: 1 }}>
                    <h3 style={{ textAlign: 'center' }}>{awayInfo.mascot} at {homeInfo.mascot}</h3>
                    <p style={{ textAlign: 'center' }}>Status: {statusText}</p>
                </div>
                <SideContainer style={{ justifyContent: 'flex-end' }}>
                    <Gradient side="home" color={homeInfo.colors.primary} />
                    <TeamLogo src={teamLogos[home]} style={{ marginRight: 15 }} />
                </SideContainer>
            </GameCard>
        </Link>
    );
};

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
};

export default Games;