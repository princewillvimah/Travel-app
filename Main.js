import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, NativeBaseProvider } from "native-base";
import Home from "./Screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DisplayScreen from "./Screens/DisplayScreen";
import Gallery from "./Screens/Gallery";
import Mapscreen from "./Screens/Mapscreen";

const Main = () => {
  const Stack = createStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
          <Stack.Screen name="Home"
          options={{
            
          }}
          component={Home} />
          <Stack.Screen name="display"
          options={{
            
          }}
          component={DisplayScreen} />
          <Stack.Screen name="Gallery"
          options={{
            headerShown:true
          }}
          component={Gallery} />
          <Stack.Screen name="map"
          options={{
          
          }}
          component={Mapscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Main;

const styles = StyleSheet.create({});
