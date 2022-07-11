import React from 'react';
import { signInInfoGetter, signOutInfoGetter } from '../actions/index';
import { connect } from 'react-redux';
import history from '../history';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '521522690281-dbdk5t4tcphpf0m736v5t96clmg957lc.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);

            })
        })
    }
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            console.log(this.auth.currentUser.get())
            this.props.signInInfoGetter(this.auth.currentUser.get().getId())
        } else {
            this.props.signOutInfoGetter();
        }
    }
    onSignInClick = () => {
        this.auth.signIn()
    }
    onSignOutClick = () => {
        this.auth.signOut();

    }
    renderButton() {
        if (this.props.isSignedInRed === null) {
            return null;
        } else if (this.props.isSignedInRed === true) {
            return <button style={{ height: "40px", width: '200px' }} onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon" />
                Sign Out
            </button>
        } else {
            return <button style={{ height: "40px", width: '200px' }} onClick={this.onSignInClick} className="ui red google button">
                <i className="google icon" />
                Sign In with Google
            </button>
        }
    }
    render() {
        return <div>{this.renderButton()}</div>;
    }
}
const mapStateToProps = (state) => {
    return { isSignedInRed: state.auth.isUserSignedIn }
}

export default connect(mapStateToProps, { signInInfoGetter, signOutInfoGetter })(GoogleAuth)