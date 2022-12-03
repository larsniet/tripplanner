import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "react-native-rapi-ui";
import Navigation from "@components/navigation";
import { AuthProvider } from "./src/providers/AuthProvider";

export default function App() {
    const images = [
        require("./assets/images/login.png"),
        require("./assets/images/register.png"),
        require("./assets/images/forget.png"),
    ];
    return (
        <ThemeProvider images={images}>
            <AuthProvider>
                <Navigation />
            </AuthProvider>
            <StatusBar />
        </ThemeProvider>
    );
}
