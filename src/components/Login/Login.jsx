import React from 'react';
import s from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Element } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators';

const Input = Element("input");

const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.input} name={"email"} component={Input} type="text" placeholder="Login"
                    validate={[required, maxLength30]} />
            </div>
            <div>
                <Field className={s.input} name={"password"} component={Input} type="password"
                    validate={[required, maxLength30]} placeholder="Password" />
            </div>
            <div>
                <Field name={'rememberMe '} component={Input} type="checkbox" name="rememberMe" id="" /> Remember my
            </div>
            {props.error && <div className={s.formSummaryError}>
                                {props.error}
                            </div>}
            <div>
                <Box component='div' className={s.btnBox}>
                    <Button className={s.btn} type="submit" variant="contained" color="secondary">
                        Login
                     </Button>
                </Box>
            </div>
        </form>
    </>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {

        props.loginUser(formData.email, formData.password, formData.rememberMe)
    }

    return <div className={s.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


export default Login;