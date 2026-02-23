function AttendanceList({ records }) {
  if (!records || records.length === 0) {
    return <p>No attendance records found.</p>;
  }

  return (
    <div>
      <h3>Attendance Records</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec) => (
            <tr key={rec.id}>
              <td>{rec.date}</td>
              <td>{rec.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceList;