import React from 'react';
import SquareButton from '../buttons/squarebutton/squarebutton.component';
import FormInput from '../form/forminput/forminput.component'; 
import './signup.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email,password,confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

            }
        catch (error) {
            // BF: future add better alert box. 
            // the error that comes back includes messages from the firebase authentication
            // this includes the password rules, email formatting, etc.  
            // console.log(error.message);
            alert(error.message);
        }

    };

    // remember this for handling input objects ... using the event.target properties.
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        const {displayName, email,password,confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2>Sign up with your email and password</h2>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required />
                    <FormInput
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required />
                    <SquareButton type='submit' onClick={this.handleSubmit}>SIGN UP</SquareButton>
                </form>
            </div>


        )

    }

}

export default SignUp;