import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/users/UsersContainer';
import NewsContainer from './components/News/NewsContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/LoginContainer';





const App = (props) => {
    return (
        
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                    render={() => <DialogsContainer />}/>
                <Route path='/profile/:userId?'
                    render={() => <ProfileContainer />}/>
                <Route path='/friends'
                    render={() => <FriendsContainer/>}/>
                <Route path='/users'
                    render={() => <UsersContainer/>}/>
                <Route path='/News'
                    render={() => <NewsContainer/>  }/>
                <Route path='/Login'
                    render={() => <LoginPage/>  }/>
            </div>
        </div>
    )
}

export default App;