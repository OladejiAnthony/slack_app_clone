import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Chat from "./Chat"
import Login from './Login'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useStateValue } from './StateProvider';



function App() {
    const [{ user }, dispatch] = useStateValue();

    return ( 
        <div className='app'>
            <Router>
                {!user ? (  //comment: if there is no user, take us to login page else take us to the main page.
                    <Login />
                    ): (
                        <>
                            <Header />
                            <div className='app__body'>
                                <Sidebar />
                                <Switch> 
                                    {/*comments: Switch helps us to switch channels without refreshing */}
                                    <Route path="/room/:roomId">
                                        <Chat />
                                    </Route>
                                    <Route path="/">
                                        <h1>Welcome</h1>
                                    </Route>
                                </Switch>
                            </div>
                        </>
                    )
                }
            </Router>
        </div>
    )
}

export default App;


//8hrs,13mins

