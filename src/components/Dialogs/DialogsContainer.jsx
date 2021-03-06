import Dialogs from "./Dialogs";
import { addMessage, getUserDialogs, getMessagesWithUser, sendMessage, deleteMessage, startDialog, setCurrentCompanion } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        userId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps,{addMessage, getUserDialogs, getMessagesWithUser, sendMessage, deleteMessage, startDialog, setCurrentCompanion}),
    withAuthRedirect
)(Dialogs)


