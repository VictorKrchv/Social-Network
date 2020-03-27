import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }    
    
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
           status: e.currentTarget.value
        }) 
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            Status:{!this.state.editMode
                ? <div className={s.profileInfo__status}>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "IF U WANNA U CAN"}</span>
                </div>
                : <div >
                    <input onChange={this.onStatusChange} autoFocus onBlur={this.deActivateEditMode} value={this.state.status} />
                </div>}


        </>
    }
}



export default ProfileStatus