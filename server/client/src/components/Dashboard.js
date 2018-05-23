import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';

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

    onRecipeSearch = async (recipe) => {
        const key = '27aa5db7ab513c467031e7b6a403149c';
        const id = '8d147efa';
        const url = `https://api.edamam.com/search&q=${recipe}&app_id=${id}&app_key=${key}`;
        const response = await fetch(url); 
        console.log(response.json());
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <input type="text" value={this.state.search} onChange={e => this.onSearchChange(e)} />
                <button onClick={() => this.onRecipeSearch(this.state.search)}>Search</button>
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