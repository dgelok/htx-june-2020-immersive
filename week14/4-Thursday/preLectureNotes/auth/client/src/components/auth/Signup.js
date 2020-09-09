
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import * as action from '../../actions'
import {compose} from 'redux'

class Signup extends React.Component {


    onSubmit = (formProps) =>{
        
        console.log(formProps)

        this.props.signup(formProps, ()=>{

            console.log('signup was successful')

            // redirects user
            this.props.history.push('/feature')

        })
    }


    render() {

        const {handleSubmit } = this.props
        return (

            // handlesubmit from react forms
            <form onSubmit={handleSubmit(this.onSubmit)}>

                <fieldset>
                    <label>Email</label>
                    
                    <Field 
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>

                <fieldset>
                    <label>Password</label>
                    <Field 
                        name="password"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                    
                </fieldset>

                <div>{this.props.errorMessage}</div>

                <button>Sign Up</button>


            </form>
        );
    }
}

let mapStateToProps = (state) =>{

    return {
        errorMessage: state.auth.errorMessage
    }
}

export default compose(connect(mapStateToProps, action), 
        reduxForm({form: 'signup'})
        )(Signup)

