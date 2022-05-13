import useRequest from "./useRequest";

const useProfileApiRequest = () => {
    const { post } = useRequest();

    const setTeamPreferences = (favoriteTeams, hatedTeams) =>
        post('/profile/teamPreferences', { favoriteTeams, hatedTeams });

    return {
        setTeamPreferences
    };
};

export default useProfileApiRequest;