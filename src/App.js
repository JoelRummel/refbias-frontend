import AuthManager from "./AuthManager";
import { SignupModal, LoginModal } from "./components";
import ContextProviders from "./ContextProviders";
import Router from "./Router";

const App = () => {
    return (
        <ContextProviders>
            <AuthManager />
            <LoginModal />
            <SignupModal />
            <Router />
        </ContextProviders>
    );
}

export default App;
