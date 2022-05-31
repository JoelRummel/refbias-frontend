import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import RefTriangle from "../../components/RefTriangle";
import { teamsMap } from "../../config/teams";
import ModalContext from "../../contexts/ModalContext";
import UserContext from "../../contexts/UserContext";
import useCommentApiRequest from "../../hooks/useApiRequest/useCommentApiRequest";
import useGameApiRequest from "../../hooks/useApiRequest/useGameApiRequest";

const PageHeader = styled.h2`
    text-align: center;
    margin-bottom: 40px;
`;

const BreakdownHeader = styled.h2`
    text-align: center;
    margin-top: 60px;
    margin-bottom: 0px;
`;

const BreakdownContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const SmallTriangleHeader = styled.h3`
    text-align: center;
`;

const FandomColumn = styled.div`
    width: 33%;
    min-width: 230px;
    display: inline-block;
    margin-bottom: 40px;
`;

const CommentsContainer = styled.div``;

const CommentContainer = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
`;

const LikeButton = styled.button`
    border: 1px solid blue;
    border-radius: 50px;
    color: rgb(0,0,255);
    padding: 5px 10px;
    background-color: rgba(0,0,255,${({ likedByUser }) => likedByUser ? 0.3 : 0});
`;

const Comment = ({ comment, author, likeCount, likedByUser, onToggleLike }) => {
    return (
        <CommentContainer>
            <p><strong>{author}:</strong>{" "}{comment}</p>
            <div>
                {likeCount} likes{" "}
                <LikeButton
                    likedByUser={likedByUser}
                    onClick={onToggleLike}
                >
                    Like
                </LikeButton>
            </div>
        </CommentContainer>
    );
};

const ResultsPage = ({ gameId, home, away, results }) => {
    const [comments, setComments] = useState(null);
    const { user, setUser } = useContext(UserContext);
    const { setOpenModal } = useContext(ModalContext);
    const { getComments } = useGameApiRequest();
    const { likeComment } = useCommentApiRequest();

    const doesUserLikeComment = (id) => {
        return (user?.likedComments || []).includes(id);
    };

    const fetchComments = async () => {
        const { comments: newComments } = await getComments(gameId);
        setComments(newComments);
    };

    const toggleLike = async (id) => {
        if (!user) {
            setOpenModal("login");
            return;
        }

        // Pre-empt the comment state change
        const index = comments.findIndex(c => c.id === id);
        const newComments = [...comments];
        newComments[index].likeCount += (doesUserLikeComment(id) ? -1 : 1);
        setComments(newComments);
        if (!doesUserLikeComment(id))
            setUser({ ...user, likedComments: [...(user.likedComments || []), id] });
        else
            setUser({ ...user, likedComments: user.likedComments.filter(cid => cid !== id) });

        const { user: newUser, comment } = await likeComment(gameId, comments[index].id);
        setUser(newUser);
        newComments[index] = comment;
        setComments([...newComments]);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    if (!results) return (
        <div>
            <PageHeader>
                {teamsMap[away].location} {teamsMap[away].mascot} vs. {teamsMap[home].location} {teamsMap[home].mascot}
            </PageHeader>
            <h4>LOADING...</h4>
        </div>
    );

    const { home: homeScores, away: awayScores, neutral: neutralScores, total } = results;
    return (
        <div>
            <PageHeader>
                {teamsMap[away].location} {teamsMap[away].mascot} vs. {teamsMap[home].location} {teamsMap[home].mascot}
            </PageHeader>
            <RefTriangle qualityScore={total.qualityScore} biasScore={total.biasScore} home={home} away={away} size={300} />
            <BreakdownHeader>FANDOM BREAKDOWN</BreakdownHeader>
            <BreakdownContainer>
                <FandomColumn>
                    <SmallTriangleHeader>{teamsMap[away].location} Fans</SmallTriangleHeader>
                    <RefTriangle qualityScore={awayScores.qualityScore} biasScore={awayScores.biasScore} home={home} away={away} size={150} labels={false} />
                </FandomColumn>
                <FandomColumn>
                    <SmallTriangleHeader>Neutral Fans</SmallTriangleHeader>
                    <RefTriangle qualityScore={neutralScores.qualityScore} biasScore={neutralScores.biasScore} home={home} away={away} size={150} labels={false} />
                </FandomColumn>
                <FandomColumn>
                    <SmallTriangleHeader>{teamsMap[home].location} Fans</SmallTriangleHeader>
                    <RefTriangle qualityScore={homeScores.qualityScore} biasScore={homeScores.biasScore} home={home} away={away} size={150} labels={false} />
                </FandomColumn>
            </BreakdownContainer>
            <BreakdownHeader>COMMENTS</BreakdownHeader>
            <CommentsContainer>
                {comments === null ? (<p>loading...</p>) : (
                    comments.map((comment) => (
                        <Comment
                            key={comment.id}
                            comment={comment.comment}
                            author={comment.author}
                            likeCount={comment.likeCount}
                            likedByUser={doesUserLikeComment(comment.id)}
                            onToggleLike={() => toggleLike(comment.id)}
                        />
                    ))
                )}
            </CommentsContainer>
        </div>
    );
};

export default ResultsPage;