import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./src/screens/Home";
import HomeHeader from "./src/components/HomeHeader";
import RootProduct from "./src/screens/RootProduct";


const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Início" 
          component={Home}
          options={{
            headerRight: () => (
             <HomeHeader/>
            )
          }}
        />
        <Stack.Screen name="RootProduct" component={RootProduct}  options={{headerShown: false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
