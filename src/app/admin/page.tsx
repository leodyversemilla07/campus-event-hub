"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";

export default function AdminDashboardPage() {
  const userCount = useQuery(api.admin.countUsers) ?? 0;
  const eventCount = useQuery(api.admin.countEvents) ?? 0;
  const orgCount = useQuery(api.admin.countOrganizations) ?? 0;
  const reportCount = useQuery(api.admin.countReports) ?? 0;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h2 className="text-xl font-semibold mb-4">Welcome, Super Administrator!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatCard label="Total Users" value={userCount} />
        <StatCard label="Total Events" value={eventCount} />
        <StatCard label="Organizations" value={orgCount} />
        <StatCard label="Reports" value={reportCount} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuickLinkCard title="Moderate Content" description="Review and manage events, comments, and users." href="/admin/moderation" />
        <QuickLinkCard title="Organization Verification" description="Approve or reject organization verification requests." href="/admin/verification" />
        <QuickLinkCard title="Reports" description="View and resolve user reports and issues." href="/admin/reports" />
        <QuickLinkCard title="Platform Policies" description="Update and maintain community guidelines and platform rules." href="/admin/policies" />
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
