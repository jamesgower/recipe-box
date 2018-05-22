import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/Navbar';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>DASHBOARD</h1>
            </div>
        );
    }
}

export default Dashboard;