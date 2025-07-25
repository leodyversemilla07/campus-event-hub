import React from "react";

export default function VerificationPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Organization Verification</h2>
      <div className="bg-white rounded shadow p-6">
        <h3 className="font-bold mb-4">Pending Verification Requests</h3>
        <VerificationRequestsTable />
      </div>
    </div>
  );
}

function VerificationRequestsTable() {
  // Placeholder data
  const requests = [
    { id: 1, name: "Chess Club", email: "chess@university.edu" },
    { id: 2, name: "Robotics Society", email: "robotics@university.edu" },
  ];
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="py-2">Organization</th>
          <th className="py-2">Email</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((req) => (
          <tr key={req.id} className="border-t">
            <td className="py-2 font-medium">{req.name}</td>
            <td className="py-2">{req.email}</td>
            <td className="py-2">
              <button className="px-3 py-1 bg-green-100 rounded mr-2">Approve</button>
              <button className="px-3 py-1 bg-red-100 rounded">Reject</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
