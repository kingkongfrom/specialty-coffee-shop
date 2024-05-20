// This component is used to hold the ClerkProvider that will work as Authenticator for the admin account
//https://clerk.com/docs/quickstarts/react

import { Outlet, useNavigate } from "react-router-dom";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/clerk-react";
import { esES } from "@clerk/localizations";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

export default function Auth() {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            localization={esES}
            navigate={navigate}
            publishableKey={PUBLISHABLE_KEY}
            telemetry={false}
            appearance={{
                baseTheme: dark,
                variables: {
                    colorBackground: "#2B281C",
                    colorInputBackground: "#BBAA92",
                    colorInputText: "#2B281C",
                },
                elements:{
                    logoBox:"h-[75px]",
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
