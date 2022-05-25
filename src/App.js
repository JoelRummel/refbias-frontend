import AuthManager from "./root/AuthManager";
import { SignupModal, LoginModal } from "./components";
import PickTeamsModal from "./components/modals/PickTeamsModal";
import ContextProviders from "./root/ContextProviders";
import ModalManager from "./root/ModalManager";
import Router from "./root/Router";

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
