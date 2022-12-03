import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarIcon from "@components/utils/TabBarIcon";
import TabBarText from "@components/utils/TabBarText";

import Home from "@screens/Home";
import Calendar from "@screens/Calendar";
import Locations from "@screens/Locations";

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
    const { isDarkmode } = useTheme();
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
                    backgroundColor: isDarkmode
                        ? themeColor.dark200
                        : "#ffffff",
                },
            }}
        >
            {/* these icons using Ionicons */}
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TabBarText focused={focused} title="Home" />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} icon={"md-home"} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Locations"
                component={Locations}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TabBarText focused={focused} title="Locations" />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            icon={"compass-outline"}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Calendar"
                component={Calendar}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TabBarText focused={focused} title="Calendar" />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            icon={"calendar-outline"}
                        />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
};

export default MainTabs;
