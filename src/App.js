import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/users/UsersContainer';
import NewsContainer from './components/News/NewsContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initializeApp } from '../src/redux/app-reducer'
import { compose } from 'redux';
import PreLoader from './components/common/Preloader';


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        // if (!this.props.initialized) {
        //     return <PreLoader />
        // }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                {this.props.initialized ? <Navbar /> : null }
                {this.props.initialized ? <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                        render={() => <DialogsContainer />} />
                    <Route path='/profile/:userId?'
                        render={() => <ProfileContainer />} />
                    <Route path='/friends'
                        render={() => <FriendsContainer />} />
                    <Route path='/users'
                        render={() => <UsersContainer />} />
                    <Route path='/News'
                        render={() => <NewsContainer />} />
                    <Route path='/Login'
                        render={() => <LoginPage />} />
                </div> 
                : <PreLoader/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }),
)(App);