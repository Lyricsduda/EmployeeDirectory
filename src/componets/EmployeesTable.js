import React from "react";
import "../styles/EmployeesTable.css";
import Moment from "moment";

const EmployeesTable = (props) => {

  let fixedDate = Moment(props.dob).format("LL");

  return (
    <tr className="tr">
      <td><img alt={props.firstName} src={props.icon} /></td>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone} </td>
      <td>{fixedDate}</td>
    </tr>
  )
}

export default EmployeesTable;