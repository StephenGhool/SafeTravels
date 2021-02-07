import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import Login from "./screens/Login"
import SignUp from "./screens/SignUp"
import Home from "./screens/HomeScreen"


// Please note react native documentation was consulted when writing navigation code
// Also, please note not all components were not implemented due to time constraints and manpower resources 


// Dummy components for Settings and Profile Page
function Settings(){
  return(
    <View>
      <Text>
        Settings
      </Text>
    </View>
  )
}

function Profile(){
  return(
    <View>
      <Text>
        Profile
      </Text>
    </View>
  )
}



const Tabs = createBottomTabNavigator()

MainTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;

          if (route.name === "Main") {
            iconColor = focused ? "blue" : "grey";
            return <AntDesign name="home" size={size} color={iconColor} />;
          } else if (route.name === "Profile") {
            iconColor = focused ? "blue" : "grey";
            return <AntDesign name="profile" size={size} color={iconColor} />;
          }
          else if (route.name === "Settings") {
            iconColor = focused ? "blue" : "grey";
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Main" component={Home} />
      <Tabs.Screen name="Profile" component={Profile}/>
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};




// Main Stack consists of Login Page, Sign Up Page and Home Page(which consists a tab navigator alongside 2 other tabs for 2 screens respectively)

const mainStack = createStackNavigator();

function FirstPage () {
  return(
    <mainStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: "#6495ED" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <mainStack.Screen name = "Login" component={Login} />
      <mainStack.Screen name = "Sign Up" component = {SignUp} />
      <mainStack.Screen name = "Main" component = {MainTabs} />
    </mainStack.Navigator>
  );
}


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Log In">
        <Stack.Screen 
          name="Log In" 
          component={FirstPage}
          options={({ route }) => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
      <AppNavigator />
  );
}


