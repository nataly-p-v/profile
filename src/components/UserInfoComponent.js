import React, { Component } from 'react';
import '../App.css';
import {Row} from 'react-materialize'
import {Col} from 'react-materialize'


class UserInfoComponent extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Row>
                    <Col s={6}><span className="name">Ivanov.I.I</span></Col>
                    <Col s={6}><span className="position">developer</span></Col>
                </Row>
            </div>
        );
    }
}

export default UserInfoComponent;
