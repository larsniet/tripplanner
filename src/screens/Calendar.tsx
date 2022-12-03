import React from "react";
import { View } from "react-native";
import { MainStackParamList } from "@customTypes/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text } from "react-native-rapi-ui";
import Calendar from "@screens/Calendar";

export default function ({
    navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
    return (
        <Layout>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>This is the Calendar tab</Text>
            </View>
        </Layout>
    );
}
