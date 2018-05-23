import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            img: this.props.auth.img
        };
    }

    render() {
        return (
            <div>
                <h1>DASHBOARD</h1>
                <a href="/api/logout" className="btn btn-danger">Logout</a>
                <img src={this.props.auth.img} style={{height: '200px', width: '200px'}}/>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps)(Dashboard);