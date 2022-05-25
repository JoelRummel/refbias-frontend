import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import UserContext from "../../contexts/UserContext";
import useGameApiRequest from "../../hooks/useApiRequest/useGameApiRequest";

const QualityForm = ({ register }) => {
    return (
        <>
            <p>What did you think about the overall quality of the officiating in this game?</p>
            <div>
                <label htmlFor="quality-excellent">
                    <input
                        {...register("quality")}
                        type="radio"
                        name="quality"
                        value="2"
                        id="quality-excellent"
                    />
                    Excellent - very few bad calls
                </label>
            </div>
            <div>
                <label htmlFor="quality-okay">
                    <input
                        {...register("quality")}
                        type="radio"
                        name="quality"
                        value="1"
                        id="quality-okay"
                    />
                    Okay - some bad calls
                </label>
            </div>
            <div>
                <label htmlFor="quality-poor">
                    <input
                        {...register("quality")}
                        type="radio"
                        name="quality"
                        value="0"
                        id="quality-poor"
                    />
                    Poor - lots of bad calls
                </label>
            </div>
        </>
    );
};

const BiasForm = ({ register, home, away, quality }) => {
    const showExtreme = (quality === 0);

    return (
        <>
            <p>In general, did you feel like errors in the officiating tended to favor a particular team?</p>
            <div style={{ display: showExtreme ? 'initial' : 'none' }}>
                <label htmlFor="bias-away2">
                    <input
                        {...register("bias")}
                        type="radio"
                        name="bias"
                        value="-2"
                        id="bias-away2"
                    />
                    Mostly favored {away}
                </label>
            </div>
            <div>
                <label htmlFor="bias-away1">
                    <input
                        {...register("bias")}
                        type="radio"
                        name="bias"
                        value="-1"
                        id="bias-away1"
                    />
                    Sometimes favored {away}
                </label>
            </div>
            <div>
                <label htmlFor="bias-okay">
                    <input
                        {...register("bias")}
                        type="radio"
                        name="bias"
                        value="0"
                        id="bias-okay"
                    />
                    Did not favor a particular team
                </label>
            </div>
            <div>
                <label htmlFor="bias-home1">
                    <input
                        {...register("bias")}
                        type="radio"
                        name="bias"
                        value="1"
                        id="bias-home1"
                    />
                    Sometimes favored {home}
                </label>
            </div>
            <div style={{ display: showExtreme ? 'initial' : 'none' }}>
                <label htmlFor="bias-home2">
                    <input
                        {...register("bias")}
                        type="radio"
                        name="bias"
                        value="2"
                        id="bias-home2"
                    />
                    Mostly favored {home}
                </label>
            </div>
        </>
    );
};

const CommentsForm = ({ register }) => {
    return (
        <>
            <p>If you'd like, you can enter a comment about the officiating:</p>
            <textarea {...register("comments")} maxLength={500} />
            <p>Ready to submit your vote? It can't be changed after submitting!</p>
        </>
    )
}

const VotePage = ({ game }) => {
    const [stage, setStage] = useState(0);
    const [qualitySelection, setQualitySelection] = useState(null);

    const {
        register,
        handleSubmit
    } = useForm();
    const { user, setUser } = useContext(UserContext);
    const { castVote } = useGameApiRequest();
    const navigate = useNavigate();

    const onSubmit = async ({ quality, bias, comments }) => {
        if (stage === 0) {
            if (!quality) return; // TODO: show error
            setQualitySelection(parseInt(quality));
            if (parseInt(quality) === 2) {
                setStage(2);
                return;
            }
        }
        if (stage === 2) {
            const { user: newUser } = await castVote(game.id, { quality, bias, comments });
            if (!newUser) return;
            setUser(newUser);
            navigate(-1);
            return;
        }
        const newStage = stage + 1;
        setStage(newStage);
    };

    const onBackButton = () => {
        if (stage === 2 && qualitySelection === 2) {
            setStage(0);
            return;
        }
        setStage(stage - 1);
    };

    if (!user) return (
        <p>You need to be logged in to cast a vote!</p>
    );

    return (
        <div>
            <h3>Vote - {game.away} @ {game.home}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: stage === 0 ? 'initial' : 'none' }}>
                    <QualityForm register={register} />
                </div>
                <div style={{ display: stage === 1 ? 'initial' : 'none' }}>
                    <BiasForm register={register} quality={qualitySelection} home={game.home} away={game.away} />
                </div>
                <div style={{ display: stage === 2 ? 'initial' : 'none' }}>
                    <CommentsForm register={register} />
                </div>
                <div>
                    {stage > 0 && (
                        <button type="button" onClick={onBackButton}>
                            &lt;--- Back
                        </button>
                    )}
                    <input type="submit" value={stage < 2 ? 'Next --->' : 'Submit Vote'} />
                </div>
            </form>
        </div>
    );
};

export default VotePage;