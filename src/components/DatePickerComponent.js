import React, { Component } from 'react';
import '../App.css';



class DatePickerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: props.dataTime
        };
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
        console.log(this.state.time)
    }
    handleChange(){
        this.setState({
            time: this.state.time
        });
        console.log(this.state.time)
    }

    render() {
        return (
            <div>
                <input id="time" type="time" onChange={this.handleChange} value={this.state.time}/>
            </div>
        );
    }
}

export default DatePickerComponent;
