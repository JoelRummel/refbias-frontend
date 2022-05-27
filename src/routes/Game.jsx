import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import useGameApiRequest from "../hooks/useApiRequest/useGameApiRequest";
import ResultsPage from "../pages/game/ResultsPage";
import VotePage from "../pages/game/VotePage";
import { queryStringToGame } from "../util/gameQueryString";

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

    if (game.status === 'upcoming') return (
        // User really shouldn't even be allowed to get this far
        <p>Voting is not yet open for this game. Come back later.</p>
    );
    if (game.status === 'closed') return (
        <ResultsPage home={game.home} away={game.away} results={game.results} />
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
    )
};

export default Game;