import React, { Component } from 'react';
import '../App.css';
import {Row} from 'react-materialize'
import {Input} from 'react-materialize'


class SelectComponent extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Row>
                    <Input s={6} type='select' label="Select Project" defaultValue='2'>
                        <option value='1'>Project 1</option>
                        <option value='2'>Project 2</option>
                        <option value='3'>Project 3</option>
                    </Input>
                    <Input s={1} name='on' type='date' onChange={function(e, value) {}} />
                </Row>
            </div>
        );
    }
}

export default SelectComponent;
