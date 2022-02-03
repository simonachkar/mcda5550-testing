import { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './Home.css';
import Toggle from './Toggle';
import UserContext from '../../context';
import Profile from './Profile';

const Home = () => {
    const [isDark, toggleDark] = useState(true)
    const { user, loginUser } = useContext(UserContext)

    return (
        <div className={isDark ? "app-dark" : "app-light"}>

            {!user ?
                <Profile />
                :
                <>
                    <Toggle onClick={() => toggleDark(!isDark)} />
                    <img src={logo} className="App-logo" alt="logo" />

                    <div>
                        <p>Welcome <code>{user.name}</code>.</p>
                        <p>Your email is <code>{user.email}.</code></p>
                        <p>And you are from <code>{user.hometown}.</code></p>
                    </div>
                    {user ?
                        <button to="/logout" className="logout-button" onClick={() => loginUser(null)}>Logout</button> :
                        <button className="login-button">
                            <Link to="/login">Login</Link>
                        </button>
                    }
                </>
            }
        </div>
    );
}

export default Home;
