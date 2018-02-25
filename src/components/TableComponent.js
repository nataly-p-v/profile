import React, { Component } from 'react';
import '../App.css';
import {Table} from 'react-materialize'
import DatePickerComponent from "./DatePickerComponent";
import myData from '../features.json';
import Moment from 'react-moment';


class TableComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: myData,
            total:0
        };
    }
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th data-field="features" rowSpan="2">Features</th>
                        <th></th>
                        <th data-field="time" rowSpan="2">Time</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td className="table-id">id</td>
                        <td>description</td>
                        <td>hours</td>
                    </tr>
                    {this.state.data.map((elem, i) => {
                        return <tr key={i} className={'col'+i}>
                            <td>
                                {elem.id}
                            </td>
                            <td>{elem.description}</td>
                            <td>
                            <DatePickerComponent dataTime={elem.time}/>
                            </td>
                        </tr>

                    })}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th className="total" colSpan="2">Total :</th>
                        <td className="totalNum">{this.state.total}</td>
                    </tr>
                    </tfoot>
                </Table>
            </div>
        );
    }
}

export default TableComponent;
