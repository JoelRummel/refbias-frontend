import AuthManager from "./AuthManager";
import { SignupModal, LoginModal } from "./components";
import PickTeamsModal from "./components/modals/PickTeamsModal";
import ContextProviders from "./ContextProviders";
import ModalManager from "./ModalManager";
import Router from "./Router";

const App = () => {
    return (
        <ContextProviders>
            <AuthManager />
            <ModalManager />
            <LoginModal />
            <SignupModal />
            <PickTeamsModal />
            <Router />
        </ContextProviders>
    );
}

export default App;
