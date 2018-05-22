import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/landing.css';

class Landing extends React.Component {
    render() {
        return (
            <div className="background">
                <div className="welcome-box">
                    <h1>Recipe Box</h1>
                    <p style={{
                        fontSize: '18px'
                    }}>
                        Create your own recipes or save one of the thousands of preset ones!
                    </p>
                    <a href="/auth/google" className="btn btn-danger" style={{marginBottom: '10px', width: '200px'}}>
                        <i className="fab fa-google" style={{float: 'left', marginTop: '5px'}}/>
                        Login with Google
                    </a>
                    <a href="/auth/facebook" className="btn btn-primary" style={{marginBottom: '10px', width: '200px'}}>
                        <i className="fab fa-facebook" style={{float: 'left', marginTop: '5px'}}/>
                        Login with Facebook
                    </a>
                    <a href="/auth/github" className="btn btn-github" style={{marginBottom: '10px', width: '200px'}}>
                        <i className="fab fa-github" style={{float: 'left', marginTop: '5px'}}/>
                        Login with GitHub
                    </a>
                </div>
            </div>
        );
    }
}

export default Landing;