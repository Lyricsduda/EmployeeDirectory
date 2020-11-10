import React, { Component } from "react";
import EmployeesTable from "./EmployeesTable.js";
import TableSearch from "./TableSearch.js";
import "../styles/EmployeeContainer.css";

class EmployeeContainer extends Component {

  state = {
    employees: [],
    employeesSort: [],
    search: "",
    sorted: false,
  };

  componentDidMount = () => {
    fetch(`https://randomuser.me/api/?results=200&nat=us&inc=name,email,phone,id,picture,dob`)
      .then(res => res.json())
      .then(json => {
        this.setState({ employees: json.results })
      })
  };


  sortEmployees = () => {
    let { employees, search } = this.state;
    let employeesSort = employees.filter(sorted => {
      return (
        sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
        sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
        sorted.email.toLowerCase().includes(search.toLowerCase())
      )
    })
    this.setState({ employeesSort })
  }


  startSort = event => {
    this.setState({ search: event.target.value }, () => {
      this.sortEmployees();
      this.setState({ sorted: true });
    });
  };

  render = () => {
    return (
      <div>
        <div className="jumbotron">
          <h2 className="display-4">
            Employee Directory
          </h2>
          <p >
            Use the seach box to narrow your results
          </p>
          <TableSearch
            name="search"
            startSort={this.startSort}
            label="Search"
          />
        </div>
        <div className="container">
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Image  </th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>DOB  </th>
              </tr>
            </thead>
            <tbody>
              {!this.state.sorted ? this.state.employees.map(employee => (
                < EmployeesTable
                  key={employee.id.value}
                  firstName={employee.name.first}
                  lastName={employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  icon={employee.picture.medium}
                  dob={employee.dob.date}
                />
              ))
                : this.state.employeesSort.map(employee => (
                  <EmployeesTable
                    key={employee.id.value}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    icon={employee.picture.medium}
                    dob={employee.dob.date}
                  />
                ))}
          </tbody>
          </table>
        </div>
      </div >
    )
  }
}

export default EmployeeContainer;