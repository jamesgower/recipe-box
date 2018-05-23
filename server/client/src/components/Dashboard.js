import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import keys from '../config/keys';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        };
    }

    onSearchChange = (e) => {
        this.setState({ search: e.target.value });  
    }

    getRecipeFromName = async (recipeName) => {
        const API_KEY = keys.food2forkAPIKey;
        var url = `http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`;
        const response = await fetch(url);
        console.log(response.json());
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <input type="text" value={this.state.search} onChange={e => this.onSearchChange(e)} />
                <button onClick={() => this.getRecipeFromName(this.state.search)}>Search</button>
                <div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => {
    return {auth};
};

export default connect(mapStateToProps)(Dashboard);