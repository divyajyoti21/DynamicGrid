import React, { useState } from 'react';
import Button from './Button';

function DataTable(props) {
    const [toggleDetails, setToggleDetails] = useState({id : null, toggleStatus: false});
    const handleClick = (id) => {
        props.onDetailsClick(id);
    }
    return(
        <table id = "customers">
            <thead>
                <tr>
                    {
                        props.tableColumns.map(columnName => (
                            <th>{columnName}</th>
                        ))
                    }
                    <th>Details</th>
                </tr>

            </thead>
            <tbody>
                {
                    props.tableData.map((data, index) => (
                        <React.Fragment>
                        <tr>
                            {
                                props.tableColumns.map(column => (
                                    <td>{data[column]}</td>
                                ))
                            }
                            <td><Button id = {index} name = "Details" type = "tableButton" onClick = {handleClick}></Button></td>            
                        </tr>
                        <tr id = {index} className = {`${(data.toggleStatus) ? "panelShow" : "panelHide"}`}>
                            <p>Date: {data.date}</p> 
                            <p>Exp type: {data.type}</p>
                        </tr>
                        </React.Fragment>
                    ))
                }

            </tbody>
        </table>

    );
}
export default DataTable;