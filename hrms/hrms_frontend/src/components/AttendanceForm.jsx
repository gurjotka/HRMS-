import { useState } from "react";

function AttendanceForm({ employees, onMark }) {
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "Present",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onMark(form);
  };

  return (
    <div>
      <h3>Mark Attendance</h3>
      <form onSubmit={handleSubmit}>
        <select
          value={form.employee}
          onChange={(e) =>
            setForm({ ...form, employee: e.target.value })
          }
          required
        >
          <option value="">Select Employee</option>
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.full_name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
          required
        />

        <select
          value={form.status}
          onChange={(e) =>
            setForm({ ...form, status: e.target.value })
          }
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AttendanceForm;