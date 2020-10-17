import { signIn, signOut, useSession } from "next-auth/client";
import authStyles from "./auth.module.css";
import { utilsOptions } from "../../utils/options";

const Auth: React.FC = () => {
    const [session, loading] = useSession();

    return (
        <>
            {!session && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <p className={authStyles.headingMd}>Not signed in</p>
                    {utilsOptions.map((item, index) => (
                        <button
                            key={index}
                            className={authStyles.buttonSign}
                            onClick={() => signIn(item.id)}
                        >
                            {item.displayName}
                        </button>
                    ))}
                </div>
            )}
            {session && (
                <div>
                    <p className={authStyles.headingMd}>
                        Signed in as {session.user.email}
                    </p>
                    <button
                        className={authStyles.buttonSign}
                        onClick={() => signOut}
                    >
                        Sign out
                    </button>
                </div>
            )}
        </>
    );
};

export default Auth;
