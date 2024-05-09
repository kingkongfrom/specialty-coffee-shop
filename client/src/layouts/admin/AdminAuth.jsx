// This component is used to hold the ClerkProvider that will work as Authenticator for the admin account
//https://clerk.com/docs/quickstarts/react

import { Outlet, useNavigate } from "react-router-dom";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY_ADMIN;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

export default function AdminAuth() {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            navigate={navigate}
            publishableKey={PUBLISHABLE_KEY}
            signInUrl="/admin/sign-in"
            telemetry={false}
            appearance={{
                baseTheme: dark,
                variables: {
                    colorBackground: "#2B281C",
                    colorInputBackground: "#BBAA92",
                    colorInputText: "#2B281C",
                },
                elements: {
                    footer: "hidden",
                },
                layout: {
                    logoImageUrl: "public/images/logo.png",
                },
            }}
        >
            <Outlet />
        </ClerkProvider>
    );
}
