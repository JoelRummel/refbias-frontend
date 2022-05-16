import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { teamsArr } from '../../config/teams';
import ModalContext from '../../contexts/ModalContext';
import UserContext from '../../contexts/UserContext';
import useProfileApiRequest from '../../hooks/useApiRequest/useProfileApiRequest';
import { Modal } from './Modal';

const TeamButtonContainer = styled.div`
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    background-color: ${({ selected, disabled }) => {
        if (disabled) return 'rgba(0, 0, 0, 0.4)';
        if (selected) return 'rgba(0, 0, 255, 0.4)';
        return 'white';
    }};
    display: inline;
    border: 2px solid black;
    margin: 7px;
    padding: 3px;
`;

const TeamButton = ({ team, selected, disabled, select }) => {
    return (
        <TeamButtonContainer
            selected={selected}
            disabled={disabled}
            onClick={() => { if (!disabled) select(team); }}
        >
            {team.mascot}
        </TeamButtonContainer>
    );
};

const PickTeamsModal = () => {
    const [stage, setStage] = useState(0);
    const [selected, setSelected] = useState([]);
    const [disabled, setDisabled] = useState([]);

    const { setUser } = useContext(UserContext);
    const { openModal } = useContext(ModalContext);
    const { setTeamPreferences } = useProfileApiRequest();

    const handleTeamSelect = (t) => {
        if (selected.includes(t.id))
            setSelected(s => s.filter(x => x !== t.id));
        else if (selected.length < 3)
            setSelected(s => [...s, t.id]);
    };

    const handleBackButton = () => {
        const newStage = stage - 1;
        setStage(newStage);
        if (newStage === 1) return;
        const newDisabled = [];
        const newSelected = [...disabled];
        setDisabled(newDisabled);
        setSelected(newSelected);
    };

    const handleNextButton = async () => {
        const newStage = Math.min(stage + 1, 3);
        setStage(newStage);
        if (newStage === 2) return;
        if (newStage === 3) {
            // SUBMIT!
            const { user: newUser } = await setTeamPreferences(disabled, selected);
            if (newUser) setUser(newUser);
            return;
        }
        const newDisabled = [...selected];
        const newSelected = [];
        setDisabled(newDisabled);
        setSelected(newSelected);
    };

    return (
        <Modal fullSize open={openModal === 'pickTeams'} title="Pick your teams">
            {stage < 2 ? (
                <>
                    <p>{stage === 0 && "Pick up to three teams that you like to root for."}
                        {stage === 1 && "Pick up to three teams that you like to root against."}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                            teamsArr.map(t => (
                                <TeamButton
                                    key={t.id}
                                    team={t}
                                    selected={selected.includes(t.id)}
                                    disabled={disabled.includes(t.id)}
                                    select={handleTeamSelect}
                                />
                            ))
                        }
                    </div>
                </>
            ) : (
                <p>Are you sure about your selection? This can only be changed once per season!</p>
            )}
            {stage > 0 && <button onClick={handleBackButton}>{"<<"} Back</button>}
            <button onClick={handleNextButton}>{stage < 2 ? "Next >>" : "Finish"}</button>
        </Modal>
    );
};

export default PickTeamsModal;