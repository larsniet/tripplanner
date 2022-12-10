import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "@providers/AuthProvider";

import GroupsPage from "@screens/GroupsPage";
import MainTabs from "./MainTabs";

const MainStack = createNativeStackNavigator();
const Main = () => {
    const context = useContext(AuthContext);
    const groups = context.groups;
    console.log(groups);
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {!groups && (
                <MainStack.Screen name="GroupsPage" component={GroupsPage} />
            )}

            <MainStack.Screen name="MainTabs" component={MainTabs} />
            <MainStack.Screen name="GroupsPage" component={GroupsPage} />
        </MainStack.Navigator>
    );
};

export default Main;
