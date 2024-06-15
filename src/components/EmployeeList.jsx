import React, { useState } from 'react';

const EmployeeList = ({ employees }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const employeesPerPage = 10;

    // Calculate the current employees to display
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const totalPages = Math.ceil(employees.length / employeesPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="employee-container">
            <h2>Employee List</h2>
            <ul>
                {currentEmployees.map(employee => (
                    <li key={employee.id}>{employee.firstName} {employee.lastName}</li>
                ))}
            </ul>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handleClick(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EmployeeList;
