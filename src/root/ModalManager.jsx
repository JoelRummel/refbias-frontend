import { useContext, useEffect } from "react";
import ModalContext from "../contexts/ModalContext";
import UserContext from "../contexts/UserContext";

const ModalManager = () => {
    const { user } = useContext(UserContext);
    const { openModal, setOpenModal } = useContext(ModalContext);

    useEffect(() => {
        if (user && (openModal === 'login' || openModal === 'signup')) {
            setOpenModal('');
        }
        if (user && openModal !== 'pickTeams' && (!user.favoriteTeams || !user.hatedTeams)) {
            setOpenModal('pickTeams');
        }
        if (user && openModal === 'pickTeams' && user.favoriteTeams && user.hatedTeams) {
            setOpenModal('');
        }
    }, [user, openModal, setOpenModal]);

    return null;
};

export default ModalManager;