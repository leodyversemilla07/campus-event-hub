"use client";
import React, { useState } from "react";

const TABS = ["Events", "Comments", "Users"];

export default function ModerationPage() {
  const [tab, setTab] = useState("Events");

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h2 className="text-xl font-semibold mb-4">Content Moderation</h2>
      <div className="flex space-x-4 mb-6">
        {TABS.map((t) => (
          <button
            key={t}
            className={`px-4 py-2 rounded transition-colors ${tab === t ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-900"}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="bg-white rounded shadow p-6 min-h-[200px]">
        {tab === "Events" && <EventsModerationPanel />}
        {tab === "Comments" && <CommentsModerationPanel />}
        {tab === "Users" && <UsersModerationPanel />}
      </div>
    </div>
  );
}

function EventsModerationPanel() {
  return <p>Moderate events here. (Coming soon)</p>;
}
function CommentsModerationPanel() {
  return <p>Moderate comments here. (Coming soon)</p>;
}
function UsersModerationPanel() {
  return <p>Moderate users here. (Coming soon)</p>;
}
