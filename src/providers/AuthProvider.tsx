import { createContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@lib/supabase";
import { Session } from "@supabase/supabase-js";
import { Group } from "@customTypes/group";

type ContextProps = {
    user: null | boolean;
    groups: Group[] | null;
    session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
    children: ReactNode;
}

const getGroups = async (userId: string) => {
    const groupsOnUsers = await supabase
        .from("groups_on_users")
        .select("*")
        .eq("user_id", userId);

    if (groupsOnUsers.error) {
        console.log(groupsOnUsers.error);
    }

    if (!groupsOnUsers.data) {
        return [];
    }

    const groups = await Promise.all(
        groupsOnUsers.data.map(async (groupOnUser) => {
            const group = await supabase
                .from("groups")
                .select("*")
                .eq("id", groupOnUser.group_id)
                .single();

            if (group.error) {
                console.log(group.error);
            }

            return group.data as Group;
        })
    );

    return groups;
};

const AuthProvider = (props: Props) => {
    const [user, setUser] = useState<null | boolean>(null);
    const [groups, setGroups] = useState<Group[] | null>([]);
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

    useEffect(() => {
        if (session) {
            getGroups(session.user.id).then((data) => {
                setGroups(data);
            });
        }
    }, [session]);

    return (
        <AuthContext.Provider
            value={{
                user,
                groups,
                session,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
