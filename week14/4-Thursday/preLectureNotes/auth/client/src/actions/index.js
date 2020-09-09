import axios from 'axios'


export const signup = (formProps, callback) => {

    return async (dispatch) =>{

        try {
            // api call

            let response = await axios.post('/signup', formProps)
            // dispatch action to reducer
            console.log(response.data.token)
            dispatch({
                type: "AUTH_USER",
                payload: response.data.token
            })

            localStorage.setItem('token', response.data.token)
            callback()
        }
        catch(e) {
            
            dispatch({
                type: "AUTH_ERROR",
                payload: "email is in use"
            })
        }
    }
}

export const signin = (formProps, callback) => {

    // login 
    // password, email 

    return async (dispatch) =>{

        try {
            let response = await axios.post('/signin', formProps)
            dispatch({
                type: "AUTH_USER",
                payload: response.data.token
            })
            localStorage.setItem('token', response.data.token)

            callback()
        }
        catch (e){
            dispatch({
                type: "AUTH_ERROR",
                payload: "Invalid login credentials"
            })
        }
    }
    
}

export const signout = () => {

    // remove jwt from global state
    localStorage.removeItem('token')
    return {
        type: "AUTH_USER",
        payload: ""
        
    }

}

