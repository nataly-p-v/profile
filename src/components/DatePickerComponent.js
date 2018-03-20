import React, { Component } from 'react';
import '../App.css';



class DatePickerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:props.dataTime
        };
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
    }
    handleChange(e){
        console.log(this.state.time)
        this.state.time =  e.target.value;
        this.setState({
            time: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input id="time" type="time"  value={this.state.time} onChange={(e) => this.handleChange(e)}/>
            </div>
        );
    }
}

export default DatePickerComponent;
