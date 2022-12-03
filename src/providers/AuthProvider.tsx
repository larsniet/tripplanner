import { createContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@lib/supabase";
import { Session } from "@supabase/supabase-js";
import navigation from "@components/navigation";

type ContextProps = {
    user: null | boolean;
    session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
    children: ReactNode;
}

const AuthProvider = (props: Props) => {
    const [user, setUser] = useState<null | boolean>(null);
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setUser(session ? true : false);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session ? true : false);
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                session,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
