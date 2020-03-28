import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from "react-router-dom";
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import LoginPage from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initializeApp } from '../src/redux/app-reducer'
import { compose } from 'redux';
import PreLoader from './components/common/Preloader';

// import DialogsContainer from './components/Dialogs/DialogsContainer';

const NewsContainer = React.lazy(() => import('./components/News/NewsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {


        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                {this.props.initialized ? <Navbar /> : null}
                {this.props.initialized ? <div className='app-wrapper-content'>
                    <React.Suspense fallback={<div>Loading</div>}>
                        <Route path='/dialogs/'
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
                    </React.Suspense>
                </div>
                    : <PreLoader />}
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