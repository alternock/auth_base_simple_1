import decode from 'jwt-decode';
import axios from 'axios';
import { createBrowserHistory } from 'history';


class Auth {

    verifyToken() {
        let history = createBrowserHistory();
        let headers = {
            'Authorization': 'Bearer ' + this.getToken()
        };

        axios.post('/api/verify_login', { 'headers': headers }).then(res => {
            if (res.data.auth_verify) {
                history.push('/panel');
            } else {
                history.push('/');
            }
        });
    }

    getProfile() {
        if (localStorage.getItem('token') === null) {
            return false;
        } else {
            return decode(localStorage.getItem('token'));
        }

    }

    setToken(token) {
        localStorage.setItem('token', token);
    }

    getToken() {
        localStorage.getItem('token');
    }

    removeToken() {
        localStorage.removeItem('token');
    }

}

export default Auth;
