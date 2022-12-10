import { useContext } from "react";
import { AuthContext } from "@providers/AuthProvider";

import { NavigationContainer } from "@react-navigation/native";

import Main from "./MainStack";
import Auth from "./AuthStack";
import Loading from "@screens/utils/Loading";

export default () => {
    const context = useContext(AuthContext);
    const user = context.user;
    const groups = context.groups;
    return (
        <NavigationContainer>
            {(user == null || groups == null) && <Loading />}
            {!user && <Auth />}
            {user && <Main />}
        </NavigationContainer>
    );
};
