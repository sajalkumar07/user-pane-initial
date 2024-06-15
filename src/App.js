import React, { useEffect, useState } from 'react';
import EmployeeList from './components/EmployeeList'
import EmployeeForm from './components/EmployeeForm'
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
      fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      setEmployees(data.users);
  };

  const addEmployee = async (newEmployee) => {
      const response = await fetch('https://dummyjson.com/users/add', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newEmployee)
      });
      const addedEmployee = await response.json();
      setEmployees([...employees, addedEmployee]);
  };

  return (
      <div className="App">
          <div className="pane left-pane">
              <EmployeeList employees={employees} />
          </div>
          <div className="pane right-pane">
              <EmployeeForm addEmployee={addEmployee} />
          </div>
      </div>
  );
};

export default App;
