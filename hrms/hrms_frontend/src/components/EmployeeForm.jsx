import { useState } from "react";

function EmployeeForm({ onCreate }) {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(form);
    setForm({
      employee_id: "",
      full_name: "",
      email: "",
      department: "",
    });
  };

  return (
    <div>
      <h3>Add Employee</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="employee_id"
          placeholder="Employee ID"
          value={form.employee_id}
          onChange={handleChange}
          required
        />
        <input
          name="full_name"
          placeholder="Full Name"
          value={form.full_name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;