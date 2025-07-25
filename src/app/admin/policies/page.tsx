"use client";

import React, { useState } from "react";

export default function PoliciesPage() {
  // Placeholder for guidelines text
  const [guidelines, setGuidelines] = useState(
    `- Respectful communication\n- Accurate and helpful event information\n- Inclusive events for all\n- Constructive feedback and support\n- Academic and personal growth`
  );
  const [editing, setEditing] = useState(false);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h2 className="text-xl font-semibold mb-4">Platform Policies</h2>
      <div className="bg-white rounded shadow p-6">
        <h3 className="font-bold mb-4">Community Guidelines</h3>
        {editing ? (
          <div>
            <textarea
              className="w-full border rounded p-2 mb-4 min-h-[120px]"
              value={guidelines}
              onChange={e => setGuidelines(e.target.value)}
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded mr-2" onClick={() => setEditing(false)}>
              Save
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <pre className="mb-4 whitespace-pre-wrap">{guidelines}</pre>
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setEditing(true)}>
              Edit Guidelines
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
