import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import Preloader from "./components/Preloader/Preloader"
import Main from "./containers/main"
import Login from "./pages/Login/Login"

function App() {

    const user = useContext(AuthContext);

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2500)
    }, [])

    return (
        <>
            {loading === false ? (
                <div className="App">
                    {user ?
                        <Main />
                        :
                        <Login />
                    }
                </div>
            ) : (
                <Preloader />
            )}
        </>
    );
}

export default App;
