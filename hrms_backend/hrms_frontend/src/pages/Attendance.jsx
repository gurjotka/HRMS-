import { useEffect, useState } from "react";
import {
  getEmployees,
  markAttendance,
  getAttendance,
} from "../services/api";

import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";

function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [records, setRecords] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const [loadingEmployees, setLoadingEmployees] = useState(false);
  const [loadingAttendance, setLoadingAttendance] = useState(false);
  const [error, setError] = useState(null);

  /* ---------------- Fetch Employees ---------------- */
  const fetchEmployees = async () => {
    try {
      setLoadingEmployees(true);
      const res = await getEmployees();
      setEmployees(res.data);
    } catch (err) {
      setError("Failed to load employees.");
    } finally {
      setLoadingEmployees(false);
    }
  };

  /* ---------------- Fetch Attendance ---------------- */
  const fetchAttendance = async (employeeId) => {
    if (!employeeId) return;

    try {
      setLoadingAttendance(true);
      const res = await getAttendance(employeeId);
      setRecords(res.data);
    } catch (err) {
      setError("Failed to load attendance records.");
    } finally {
      setLoadingAttendance(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  /* ---------------- Mark Attendance ---------------- */
  const handleMarkAttendance = async (data) => {
    try {
      setError(null);
      await markAttendance(data);
      fetchAttendance(data.employee);
      alert("Attendance marked successfully.");
    } catch (err) {
      alert(
        err.response?.data?.non_field_errors ||
        err.response?.data?.detail ||
        "Failed to mark attendance."
      );
    }
  };

  return (
    <div>
      <h2 style={styles.heading}>Attendance Management</h2>

      {/* Mark Attendance Card */}
      <div style={styles.card}>
        {loadingEmployees ? (
          <p>Loading employees...</p>
        ) : (
          <AttendanceForm
            employees={employees}
            onMark={handleMarkAttendance}
          />
        )}
      </div>

      {/* View Attendance Card */}
      <div style={styles.card}>
        <h3>View Attendance</h3>

        <select
          style={styles.select}
          value={selectedEmployee}
          onChange={(e) => {
            setSelectedEmployee(e.target.value);
            fetchAttendance(e.target.value);
          }}
        >
          <option value="">Select Employee</option>
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.full_name}
            </option>
          ))}
        </select>

        {error && <p style={styles.error}>{error}</p>}

        {loadingAttendance && <p>Loading attendance records...</p>}

        {!loadingAttendance && selectedEmployee && records.length === 0 && (
          <p>No attendance records found for this employee.</p>
        )}

        {!loadingAttendance && records.length > 0 && (
          <AttendanceList records={records} />
        )}
      </div>
    </div>
  );
}

const styles = {
  heading: {
    marginBottom: "20px",
  },
  card: {
    background: "white",
    padding: "24px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    marginBottom: "24px",
  },
  select: {
    padding: "8px",
    marginBottom: "20px",
    minWidth: "200px",
  },
  error: {
    color: "red",
    fontWeight: "500",
  },
};

export default Attendance;