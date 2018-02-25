import React, { Component } from 'react';
import '../App.css';



class DatePickerComponent extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <input id="time" type="time"  value={this.props.dataTime} onChange={(e) => this.props.handleChange(e)}/>
            </div>
        );
    }
}

export default DatePickerComponent;
