import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'
import ProductMain from './Product/ProductMain';

const BottomTab = createBottomTabNavigator();


export default function RootProduct({navigation, route}) {
  return (
    <BottomTab.Navigator>
    <BottomTab.Screen name='ProductMain' component={ProductMain}/>
  </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({})