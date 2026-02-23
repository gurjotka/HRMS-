import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <h2 style={{ margin: 0 }}>HRMS Lite</h2>
        <div>
          <Link style={styles.link} to="/">Dashboard</Link>
          <Link style={styles.link} to="/employees">Employees</Link>
          <Link style={styles.link} to="/attendance">Attendance</Link>
        </div>
      </nav>

      <main style={styles.main}>
        {children}
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    backgroundColor: "#f5f7fa",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#1f2937",
    color: "white",
  },
  link: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
  main: {
    padding: "40px",
  },
};

export default Layout;