import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Paper } from "../components/common";
import teamLogos from "../config/teamLogos";
import { teamsMap } from "../config/teams";
import UserContext from "../contexts/UserContext";
import useGameApiRequest from "../hooks/useApiRequest/useGameApiRequest";
import ResultsPage from "../pages/game/ResultsPage";
import VotePage from "../pages/game/VotePage";
import { queryStringToGame } from "../util/gameQueryString";

const HeaderContainer = styled.div`
    display: flex;
    margin-bottom: 40px;
    align-items: center;
`;

const SideContainer = styled.div`
    display: inline-flex;
    position: relative;
    flex-grow: 1;
`;

const HeaderText = styled.h2`
    display: inline;
    text-align: center;
`;

const Gradient = styled.div`
    position: absolute;
    left: ${({ side }) => side === 'home' ? '-40px' : 0};
    right: ${({ side }) => side === 'away' ? '-40px' : 0};
    top: 0;
    bottom: -40px;
    border-radius: 10px;
    background: linear-gradient(to bottom ${({ side }) => side === 'away' ? 'right' : 'left'}, ${({ color }) => color} 0%, ${({ color }) => color}50 35%, rgba(0,0,0,0) 50%);
`;

const GameHeader = ({ away, home }) => {
    return (
        <HeaderContainer>
            <SideContainer>
                <Gradient side="away" color={teamsMap[away].colors.primary} />
                <img src={teamLogos[away]} style={{ width: 100, height: 100, marginLeft: 30, marginTop: 10, zIndex: 1 }} />
            </SideContainer>
            <HeaderText>
                {teamsMap[away].location} {teamsMap[away].mascot} vs. {teamsMap[home].location} {teamsMap[home].mascot}
            </HeaderText>
            <SideContainer style={{ justifyContent: 'flex-end' }}>
                <Gradient side="home" color={teamsMap[home].colors.primary} />
                <img src={teamLogos[home]} style={{ width: 100, height: 100, marginRight: 30, marginTop: 10, zIndex: 1 }} />
            </SideContainer>
        </HeaderContainer>
    );
}

const Game = () => {
    const { gameId } = useParams();
    const [queryParams] = useSearchParams();
    const [game, setGame] = useState({ ...queryStringToGame(queryParams), id: gameId });
    const { getGame } = useGameApiRequest();
    const { user } = useContext(UserContext);

    const userHasVoted = user?.gamesVotedOn?.includes(gameId);

    const fetchGame = async () => {
        const res = await getGame(gameId);
        setGame(res.game);
    };

    useEffect(() => {
        fetchGame();
    }, []);

    if (!gameId) return (
        <p>404 Not Found. No game ID supplied.</p>
    );

    const GameDisplay = () => {
        if (game.status === 'upcoming') return (
            // User really shouldn't even be allowed to get this far
            <p>Voting is not yet open for this game. Come back later.</p>
        );
        if (game.status === 'closed') return (
            <ResultsPage gameId={gameId} home={game.home} away={game.away} results={game.results} />
        );
        if (game.status === 'voting') return (
            !userHasVoted ? (
                <VotePage game={game} />
            ) : (
                // Again, user shouldn't be allowed to get this far
                <p>You have already voted on this game!</p>
            )
        );
        return (
            <p>Error: Unknown game status {game.status}</p>
        );
    }

    return (
        <Paper>
            <GameHeader away={game.away} home={game.home} />
            <GameDisplay />
        </Paper>
    )
};

export default Game;