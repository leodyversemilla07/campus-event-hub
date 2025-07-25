import React from "react";

export default function ReportsPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Reports Management</h2>
      <div className="bg-white rounded shadow p-6">
        <h3 className="font-bold mb-4">Reported Issues</h3>
        <ReportsTable />
      </div>
    </div>
  );
}

function ReportsTable() {
  // Placeholder data
  const reports = [
    { id: 1, type: "Event", subject: "Spam Event", status: "Pending" },
    { id: 2, type: "Comment", subject: "Inappropriate Comment", status: "Pending" },
  ];
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="py-2">Type</th>
          <th className="py-2">Subject</th>
          <th className="py-2">Status</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report) => (
          <tr key={report.id} className="border-t">
            <td className="py-2">{report.type}</td>
            <td className="py-2">{report.subject}</td>
            <td className="py-2">{report.status}</td>
            <td className="py-2">
              <button className="px-3 py-1 bg-green-100 rounded mr-2">Resolve</button>
              <button className="px-3 py-1 bg-yellow-100 rounded">Escalate</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
