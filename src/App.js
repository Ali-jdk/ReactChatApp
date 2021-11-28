import './App.css';
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";

function App() {
    // eslint-disable-next-line
    const [user] = useAuthState(auth);
    return (
        < >

            {user ? <Chat/> : <SignIn/>}


        </>
    );
}

export default App;
