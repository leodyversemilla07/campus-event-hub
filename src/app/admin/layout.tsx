import React from "react";
import Link from "next/link";
import { RequireSuperAdmin } from "./RequireSuperAdmin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireSuperAdmin>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
          <nav className="space-x-4">
            <Link href="/admin">Overview</Link>
            <Link href="/admin/moderation">Moderation</Link>
            <Link href="/admin/verification">Verification</Link>
            <Link href="/admin/reports">Reports</Link>
            <Link href="/admin/policies">Policies</Link>
          </nav>
        </header>
        <main className="p-6 max-w-7xl mx-auto">{children}</main>
      </div>
    </RequireSuperAdmin>
  );
}
