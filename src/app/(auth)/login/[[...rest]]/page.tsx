"use client";

import { SignIn } from "@clerk/nextjs";
import RoleRedirect from "./role-redirect";

export default function LoginPage() {
    return (
        <>
            <SignIn signUpUrl="/register" />
            <RoleRedirect />
        </>
    );
}
