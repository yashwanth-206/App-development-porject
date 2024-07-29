import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Employee.css';

const Employee = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Cashier' },
    { id: 2, name: 'Jane Smith', position: 'Manager' },
    { id: 3, name: 'Sam Johnson', position: 'Stock Clerk' },
  ]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    // fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3001/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees', error);
    }
  };

  const addEmployee = async () => {
    if (name.trim() === '' || position.trim() === '') {
      alert('Name and position cannot be empty');
      return;
    }

    const newEmployee = {
      id: employees.length + 1,
      name,
      position,
    };

    try {
      // await axios.post('http://localhost:3001/employees', newEmployee);
      setEmployees([...employees, newEmployee]);
      setName('');
      setPosition('');
    } catch (error) {
      console.error('Error adding employee', error);
    }
  };

  const removeEmployee = async (id) => {
    try {
      // await axios.delete(`http://localhost:3001/employees/${id}`);
      setEmployees(employees.filter((employee) => employee.id !== id));
    } catch (error) {
      console.error('Error removing employee', error);
    }
  };

  return (
    <div className="employee-container">
      <h1>Employee Management</h1>
      <div className="employee-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employee-list">
        <h2>Employee List</h2>
        {employees.map((employee) => (
          <div key={employee.id} className="employee-item">
            <p>
              <strong>Name:</strong> {employee.name}
            </p>
            <p>
              <strong>Position:</strong> {employee.position}
            </p>
            <button onClick={() => removeEmployee(employee.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;
