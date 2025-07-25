import React from "react";

export default function StudentDashboardPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Welcome, Student!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatCard label="Upcoming Events" value={0} />
        <StatCard label="Your RSVPs" value={0} />
        <StatCard label="Comments" value={0} />
        <StatCard label="Profile Complete" value={"No"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuickLinkCard title="Browse Events" description="Find and RSVP to campus events." href="/student/events" />
        <QuickLinkCard title="Your RSVPs" description="See events you've RSVP'd to." href="/student/rsvps" />
        <QuickLinkCard title="Comments" description="View and manage your event comments." href="/student/comments" />
        <QuickLinkCard title="Profile" description="Edit your student profile." href="/student/profile" />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-white rounded shadow p-6 flex flex-col items-center">
      <span className="text-3xl font-bold text-blue-600 mb-2">{value}</span>
      <span className="text-lg font-medium">{label}</span>
    </div>
  );
}

function QuickLinkCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <a href={href} className="bg-white rounded shadow p-6 hover:bg-blue-50 transition-colors block">
      <h3 className="font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </a>
  );
}
