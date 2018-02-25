import React, { Component } from 'react';
import './App.css';
import UserInfoComponent from "./components/UserInfoComponent";
import SelectComponent from "./components/SelectComponent";
import TableComponent from "./components/TableComponent";

class App extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount(){

    }

    render() {
        return (
            < div className="App">
                <UserInfoComponent/>
                <SelectComponent/>
                 <TableComponent /></div>
    );
    }
}

export default App;