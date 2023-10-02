import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CompletedTodos from "../pages/CompletedTodos";
import StackNavigator from "./StackNavigator";
import 'react-native-gesture-handler';
import Completed from "../../component/Completed";
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        {/* <Drawer.Navigator>
            <Drawer.Screen name="Main" component={StackNavigator} />
            <Drawer.Screen name="Completed-todos" component={CompletedTodos} />
        </Drawer.Navigator> */}
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{ headerTitle: "Todo App"}}
      >
        <Tab.Screen name="Main" component={StackNavigator}  />
        <Tab.Screen name="Completed-todos" component={Completed} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
