import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
//
import WrapperPanel from '../../components/panel/wrapper_panel';
import MenuLeft from '../../components/menu_left/menu_left';
import Header from '../../components/header/header';
import Users from '../forms/users/users';
import Tickets from '../forms/tickets/tickets';
//
import Auth from '../../../services/front/auth';


class Panel extends Component {

    constructor(props) {
        super(props);

        this._Auth = new Auth();
    }


    componentDidMount() {
        let profile = this._Auth.getProfile();
        let elem;
        
        //this function validate it's token to exp
        this._Auth.verifyToken();

        //validate data of redux and parts of the params in JWT
        if (this.props._user.email == '' || profile == false || profile.sub == '') {
            this.props.history.push('/');
        }
                
        //change banckground-color
        elem = document.getElementById('tag_body');
        elem.classList.remove('bg-blue');
        elem.className = 'bg-near-white';
    }



    render() {
        return (
            <div>
                <WrapperPanel header={<Header />} menuLeft={<MenuLeft />} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        _user: state.user
    }
}

export default withRouter(connect(mapStateToProps, null)(Panel));
