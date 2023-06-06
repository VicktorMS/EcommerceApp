import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ProductMain from "./Product/ProductMain";
import Comments from "./Product/Comments";

const BottomTab = createBottomTabNavigator();

export default function RootProduct({ navigation, route }) {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Produto" component={ProductMain} />
      <BottomTab.Screen name="Comments" component={Comments} />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({});
