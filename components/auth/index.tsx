import { signIn, signOut, useSession } from "next-auth/client";
import authStyles from "./auth.module.css";

export interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
    const [session, loading] = useSession();

    return (
        <>
            {!session && (
                <div>
                    <p className={authStyles.headingMd}>Not signed in</p>
                    <button className={authStyles.buttonSign} onClick={signIn}>
                        Sign in
                    </button>
                </div>
            )}
            {session && (
                <div>
                    <p className={authStyles.headingMd}>
                        Signed in as {session.user.email}
                    </p>
                    <button className={authStyles.buttonSign} onClick={signOut}>
                        Sign out
                    </button>
                </div>
            )}
        </>
    );
};

export default Auth;
