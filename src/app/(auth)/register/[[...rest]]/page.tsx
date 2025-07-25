"use client";

import { SignUp } from "@clerk/nextjs";
import RoleRedirect from "../../role-redirect";

export default function RegisterPage() {
    return (
        <>
            <SignUp signInUrl="/login" />
            <RoleRedirect />
        </>
    );
}
