import React, { Component } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//
import { actionLogin } from '../../../redux/actions/login';
import Auth from '../../../services/front/auth';
//ffb4c260


class Login extends Component {

    constructor(props) {
        super(props);

        this._handleChange = this._handleChange.bind(this);
        this._alertaModal = this._alertaModal.bind(this);
        this._login = this._login.bind(this);
        this._Auth = new Auth();

        this.state = {
            email: '',
            password: '',
            modal: false,
            modalContent: '',
            toggle: false,
        };
    }


    componentDidMount() {
        let _elem;        

        //change background-color
        _elem = document.getElementById('tag_body');
        _elem.className = 'bg-blue';
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps._user.auth !== this.props._user.auth) {
            
            if (nextProps._user.auth) {
                this.props.history.push('/panel');
            }
        }
    }


    _login() {
        let { email, password } = this.state;  
        let validateToken = this._Auth.getProfile();
        let User = {
            email,
            password
        };

        if (User.email == '' || User.password == '') {
            this._alertaModal('empty');
        } else {
            this.props._actionLogin(User);
        }
    }


    _handleChange(e) {
        let _input = {};
        _input[e.target.name] = e.target.value;

        this.setState(_input);
    }


    _alertaModal(msg) {
        if (msg.length > 0) {
            this.setState({
                modal: !this.state.modal,
                modalContent: msg
            });
        } else {
            this.setState({
                modal: !this.state.modal
            });
        }
    }


    _modal() {
        return (
            <div>
                <Modal isOpen={this.state.modal} fade={false} toggle={this._alertaModal} className={this.props.className}>
                    <ModalHeader toggle={this._alertaModal} className="bg-yellow"><i className="b dark-red ttu fa fa-exclamation-triangle "></i></ModalHeader>
                    <ModalBody className="bg-light">
                        <label className="b ttu">{this.state.modalContent}</label>
                    </ModalBody>
                    <ModalFooter className="bg-light">
                        <Button color="danger" className="red ttu b btn btn-sm" onClick={this._alertaModal}>close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }


    render() {
        let { email, password } = this.state;

        return (
            <div className="mt3">
                {this._modal()}
                <form className="form-signin">
                    <img className="mb-4" src="https://s3.us-east-2.amazonaws.com/continentalboxes/images/logo/continental_assist_azul.png"/>
                    <label className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="name@domain.com" name='email' value={email} onChange={this._handleChange} required />
                    <label className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="password" name='password' value={password} onChange={this._handleChange} required />
                    <div className="checkbox mb-2 b">
                        <label>
                            <Link to="/reset_pass"><i className="fa fa-key"></i>I Forgot my Password</Link>
                        </label>
                    </div>
                    <button className="btn btn-lg btn-success btn-block b" type="button" onClick={this._login}>ENTER</button>
                    <p className="mt-5 mb-3 text-muted text-center">&copy; Continental Assist</p>
                </form>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        _user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        _actionLogin: (data) => {
            dispatch(actionLogin(data));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
