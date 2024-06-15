import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee }) => {
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(employee);
        setEmployee({ firstName: '', lastName: '', age: '', email: '', phone: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Employee</h2>
            <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} placeholder="First Name" required />
            <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} placeholder="Last Name" required />
            <input type="number" name="age" value={employee.age} onChange={handleChange} placeholder="Age" required />
            <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="phone" value={employee.phone} onChange={handleChange} placeholder="Phone" required />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default EmployeeForm;
