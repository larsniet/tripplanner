# Tripplanner expo app

Tripplanner app with React Navigation Bottom Tabs and Supabase auth using React Context

# Installation

1. Install [node.js](https://nodejs.org/en/)
2. Install Expo

    ```jsx
    npm install --global expo-cli
    ```

3. Download this repo
4. Install deps on your template folder

    ```jsx
    npm install
    ```

5. Create a `.env` file and add your supabase url and anon key

    ```jsx
    SUPABASE_URL=https://xxxxx.supabase.co
    SUPABASE_ANON_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```

Note: You can get your supabase url and anon key from your supabase dashboard. It happens that the env variables are not loaded, you can try to hardcode the values in `./src/lib/supabase.ts`.

6. Start the environment

    ```jsx
    expo start
    ```

### UI Screens

There are 3 screens inside `./src/screens/auth` and it uses supabase auth.

-   Login screen `./src/screens/auth/login.tsx`
-   Register screen `./src/screens/auth/register.tsx`
-   Forget password screen `./src/screens/auth/forget.tsx`

### React Navigation Auth Flow

The checking logged users process is inside `./src/provider/AuthProvider` I use React Context, you can add more functions like get the data of the user and store it to the context (better static data, ex: uid)

The navigation flow is inside `./src/components/navigation/index.tsx` it uses React Navigation.

-   `<AuthStack/>` → for not logged in users stack
-   `<MainStack/>` → for logged in users stack
-   `<Loading/>` → when checking if the user is logged in or not loading screen

```jsx
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
```

# Rapi UI

These UI components are provided by [Rapi UI](https://rapi-ui.kikiding.space/).
Check the [documentation](https://rapi-ui.kikiding.space/docs/) for usage and more components.

# File Managements

These are the folders and the functionality all in `src/`

```jsx
/assets -> for media such as images, etc
/src/components -> for components and Navigation
/src/lib -> for Supabase and other libraries
/src/providers -> for React Context
/src/screens -> for Screens
/src/types -> for Types
```
