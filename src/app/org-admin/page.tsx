import React from "react";

export default function OrgAdminDashboardPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Welcome, Organization Admin!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatCard label="Your Events" value={0} />
        <StatCard label="Total RSVPs" value={0} />
        <StatCard label="Pending Comments" value={0} />
        <StatCard label="Announcements" value={0} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuickLinkCard title="Manage Events" description="Create, edit, or delete your events." href="/org-admin/events" />
        <QuickLinkCard title="Analytics" description="View event engagement and attendance analytics." href="/org-admin/analytics" />
        <QuickLinkCard title="Moderate Comments" description="Review and moderate event comments." href="/org-admin/comments" />
        <QuickLinkCard title="Announcements" description="Send announcements to your followers." href="/org-admin/announcements" />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
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
