import React, { Component } from 'react';
import '../App.css';



class DatePickerComponent extends Component {
    constructor() {
        super();
        this.state = {
            time: 0
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(){
        this.setProps({
            time: this.props.dataTime
        });
    }

    render() {
        return (
            <div>
                <input id="time" type="time" onChange={this.handleChange} value={this.props.dataTime}/>
            </div>
        );
    }
}

export default DatePickerComponent;
