import { useEffect, useState } from "react";
import { getEmployees, createEmployee, deleteEmployee } from "../services/api";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getEmployees();
      setEmployees(res.data);
    } catch (err) {
      setError("Failed to load employees. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleCreate = async (data) => {
    try {
      await createEmployee(data);
      fetchEmployees();
    } catch (err) {
      alert(
        err.response?.data?.email ||
        err.response?.data?.employee_id ||
        "Failed to create employee."
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      fetchEmployees();
    } catch (err) {
      alert("Failed to delete employee.");
    }
  };

  return (
    <div>
      <h2 style={styles.heading}>Employee Management</h2>

      {/* Add Employee Card */}
      <div style={styles.card}>
        <EmployeeForm onCreate={handleCreate} />
      </div>

      {/* Employee List Card */}
      <div style={styles.card}>
        {loading && <p>Loading employees...</p>}

        {error && <p style={styles.error}>{error}</p>}

        {!loading && !error && employees.length === 0 && (
          <p>No employees found. Add one to get started.</p>
        )}

        {!loading && !error && employees.length > 0 && (
          <EmployeeList employees={employees} onDelete={handleDelete} />
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
  error: {
    color: "red",
    fontWeight: "500",
  },
};

export default Employees;