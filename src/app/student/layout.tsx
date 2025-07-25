import React from "react";
import Link from "next/link";
import { RequireStudent } from "./RequireStudent";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireStudent>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Student Dashboard</h1>
          <nav className="space-x-4">
            <Link href="/student">Overview</Link>
            <Link href="/student/events">Events</Link>
            <Link href="/student/rsvps">RSVPs</Link>
            <Link href="/student/comments">Comments</Link>
            <Link href="/student/profile">Profile</Link>
          </nav>
        </header>
        <main className="p-6 max-w-7xl mx-auto">{children}</main>
      </div>
    </RequireStudent>
  );
}
