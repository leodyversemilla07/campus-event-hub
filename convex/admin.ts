import { query } from "./_generated/server";

export const countUsers = query({
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users.length;
  },
});

export const countEvents = query({
  handler: async (ctx) => {
    const events = await ctx.db.query("events").collect();
    return events.length;
  },
});

export const countOrganizations = query({
  handler: async (ctx) => {
    const orgs = await ctx.db.query("organizations").collect();
    return orgs.length;
  },
});

export const countReports = query({
  handler: async (ctx) => {
    const reports = await ctx.db.query("reports").collect();
    return reports.length;
  },
});
