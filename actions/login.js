import axios from 'axios';


exports.actionLogin = (user) => {
    return function (dispatch) {
        axios.post('/api/login', {
            email: user.email,
            password: user.password
        }).then(res => {            
            if (res.data.auth_login) {
                dispatch({
                    type: 'CORRECT_LOGIN',
                    user: res.data
                });
            } else {
                dispatch({
                    type: 'INCORRECT_LOGIN'
                });
            }
        }).catch(err => {
            console.log(err);
        });
    }
}


exports.actionLogout = () => {
    return function(dispatch){
        dispatch({
            type:'LOGOUT'            
        })
    }
}

