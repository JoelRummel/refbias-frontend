import { useParams, useSearchParams } from "react-router-dom";
import { queryStringToGame } from "../util/gameQueryString";

const Game = () => {
    const { gameId } = useParams();
    const [queryParams] = useSearchParams();

    const game = queryStringToGame(queryParams);

    if (!gameId) return (
        <p>404 Not Found. No game ID supplied.</p>
    );

    if (game.status === 'upcoming') return (
        <p>Voting is not yet open for this game. Come back later.</p>
    );
    if (game.status === 'closed') return (
        <p>Voting for this game has closed. Results are below:</p>
    );
    if (game.status === 'voting') return (
        <p>Voting for this game has begun, take a look below:</p>
    );
    return (
        <p>Error: Unknown game status {game.status}</p>
    )
};

export default Game;