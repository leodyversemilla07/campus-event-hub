import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const schema = defineSchema({
  ...authTables,
  users: defineTable({
    authId: v.optional(v.string()),
    email: v.string(),
    name: v.optional(v.string()),
    role: v.optional(v.string()), // "student", "org_admin", "super_admin"
    createdAt: v.optional(v.number()),
  }).index("authId", ["authId"]),
  events: defineTable({
    // Add event fields as needed
  }),
  organizations: defineTable({
    // Add organization fields as needed
  }),
  reports: defineTable({
    // Add report fields as needed
  }),
});

export default schema;
