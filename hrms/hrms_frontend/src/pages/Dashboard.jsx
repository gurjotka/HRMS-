import { useEffect, useState } from "react";
import { getEmployees } from "../services/api";
import axios from "axios";

function Dashboard() {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [todayPresent, setTodayPresent] = useState(0);

  const fetchData = async () => {
    const empRes = await getEmployees();
    setEmployeeCount(empRes.data.length);

    const today = new Date().toISOString().split("T")[0];
    const attendanceRes = await axios.get(
      `http://127.0.0.1:8000/api/attendance/?date=${today}`
    );

    const presentCount = attendanceRes.data.filter(
      (rec) => rec.status === "Present"
    ).length;

    setTodayPresent(presentCount);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={card}>
          <h3>Total Employees</h3>
          <p style={numberStyle}>{employeeCount}</p>
        </div>

        <div style={card}>
          <h3>Present Today</h3>
          <p style={numberStyle}>{todayPresent}</p>
        </div>
      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  flex: 1,
};

const numberStyle = {
  fontSize: "32px",
  fontWeight: "bold",
};

export default Dashboard;