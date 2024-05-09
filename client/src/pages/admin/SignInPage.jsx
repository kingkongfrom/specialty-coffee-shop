import { SignIn } from "@clerk/clerk-react";

export default function SignInPage(){

    return(
        <main className='h-screen bg-random'>
            <div className='h-screen backdrop-contrast-50 flex justify-center items-center'>
                <SignIn fallbackRedirectUrl='/admin'></SignIn>
            </div>
        </main>
    )
}