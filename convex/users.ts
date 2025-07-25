import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const registerUser = mutation({
    args: {
        authId: v.string(),
        email: v.string(),
        name: v.optional(v.string()),
        role: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        // All users are now assigned the role 'super_admin'
        const role = "super_admin";
        const user = {
            authId: args.authId,
            email: args.email,
            name: args.name,
            role,
            createdAt: Date.now(),
        };
        const userId = await ctx.db.insert("users", user);
        return { ...user, _id: userId };
    },
});

// Query to get a user by authId
export const getUserByAuthId = query({
    args: { authId: v.string() },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .withIndex("authId", (q) => q.eq("authId", args.authId))
            .first();
        return user || null;
    },
});