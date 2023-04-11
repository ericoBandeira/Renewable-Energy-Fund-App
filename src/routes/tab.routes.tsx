import React, { useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList } from "./types";
import { IconProps } from "./types";
import { Home } from "../screens/Home";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Trade } from "../screens/Trade";
import { Portfolio } from "../screens/Portfolio";

function Tabs() {
  const Tab = createBottomTabNavigator<TabParamList>();

  const homeIcon = useCallback(
    ({ color }: IconProps) => <Entypo name="home" size={16} color={color} />,
    []
  );

  const tradeIcon = useCallback(
    ({ color }: IconProps) => <AntDesign name="swap" size={16} color={color} />,
    []
  );

  const portfolioIcon = useCallback(
    ({ color }: IconProps) => (
      <Foundation name="graph-pie" size={16} color={color} />
    ),
    []
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#770FDF",
        tabBarInactiveTintColor: "#000000",
        tabBarStyle: {
          paddingTop: 15,
          paddingBottom: 15,
          height: 90,
        },
        tabBarLabelStyle: {
          height: 40,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: homeIcon,
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarIcon: tradeIcon,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: portfolioIcon,
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
