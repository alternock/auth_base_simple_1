import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';


let _store;
let _initialState = {
    auth: { email: '', status: '', isAuth: false }
};


function reducer(state = _initialState, actions) {
    switch (actions.type) {
        case ('LOGIN'):
            return {
                auth: {
                    email: actions.user.email,
                    status: actions.user.status,
                    isAuth: actions.user.isAuth
                }
            }
        case ('LOGOUT'):
            return {
                auth: {
                    email: '',
                    status: '',
                    isAuth: false
                }
            }
        case ('FIND_BY_EMAIL_AUTH'):
            return {
                auth: {
                    ...state.auth
                }
            }
        default:
            return state;
    }
}


_store = createStore(reducer, applyMiddleware(Thunk));

export default _store;
