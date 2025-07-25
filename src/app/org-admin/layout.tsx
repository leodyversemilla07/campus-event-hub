import React from "react";
import Link from "next/link";
import { RequireOrgAdmin } from "./RequireOrgAdmin";

export default function OrgAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireOrgAdmin>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Organization Admin Dashboard</h1>
          <nav className="space-x-4">
            <Link href="/org-admin">Overview</Link>
            <Link href="/org-admin/events">Events</Link>
            <Link href="/org-admin/analytics">Analytics</Link>
            <Link href="/org-admin/comments">Comments</Link>
            <Link href="/org-admin/announcements">Announcements</Link>
          </nav>
        </header>
        <main className="p-6 max-w-7xl mx-auto">{children}</main>
      </div>
    </RequireOrgAdmin>
  );
}
