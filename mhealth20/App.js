import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotificationsScreen } from "./screens/NotificationsScreen";

import { FavoriteDrScreen } from "./screens/FavoriteDrScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { AppointmentScreen } from "./screens/AppointmentScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { MapScreen } from "./screens/MapScreen";
import { MedDetailScreen } from "./screens/MedDetailScreen";
import { MedSearchScreen } from "./screens/MedSearchScreen";
import { DocScreen } from "./screens/DocScreen";

import { AppProvider } from "./store/AppContext";
import DoctorProfileScreen from "./screens/DrProfileScreen";
import BookingComponent from "./components/ui/BookingComponent";
import MedicalChecks from "./screens/MedicalChecksScreen";
import GeneralScreen from "./screens/GeneralScreen";
import RegisterScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import AiScreen from "./screens/AiScreen";
import PaymentScreen from "./screens/PaymentScreen";
import DrMapScreen from "./screens/DrMapScreen";
import UserDatingScreen from "./screens/UserDatingScreen";

//add screenOptions to Tab.Navigator
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function MyTabs() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Appointments"
        component={AppointmentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="MedSearch"
        component={MedSearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="beaker" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="DrMapScreen"
        component={DrMapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
        }}
      />

    {/* <BottomTab.Screen
        name="UserDatingScreen"
        component={UserDatingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
        }}
      /> */}

    <BottomTab.Screen
        name="AiDoc"
        component={AiScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-reddit" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
      {/* {Note this initialRouteName would normally start on the "Login" Screen} */}
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="TabDirectHome" component={MyTabs} />
          <Stack.Screen
            name="NotificationsScreen"
            component={NotificationsScreen}
          />
          <Stack.Screen name="FavoriteDrScreen" component={FavoriteDrScreen} />
          <Stack.Screen name="MedDetailsScreen" component={MedDetailScreen} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="DocScreen" component={DocScreen} />
          <Stack.Screen name="DocProfile" component={DoctorProfileScreen} />
          <Stack.Screen name="BookAppt" component={BookingComponent} />
          <Stack.Screen name="MedicalChecks" component={MedicalChecks} />
          <Stack.Screen name="GeneralNews" component={GeneralScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="DrMap" component={DrMapScreen} />
          <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="UserDatingScreen" component={UserDatingScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
