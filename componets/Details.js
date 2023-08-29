import { StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";
import { HStack, View, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Details = ({ item }) => {
  return (
    <View my={5} style={{ marginTop: 15,gap:20 }}>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <View>
          <Header title={item.name} />
          <Text fontSize={"md"} fontWeight={"semibold"}>
            {item.city}
          </Text>
        </View>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          {item.entry_price}
        </Text>
      </HStack>
      <View style={{gap:10}}>
        <HStack alignItems={"center"} space={2}>
          <FontAwesome name="map-marker" size={24} color="black" />
          <Text> {item.address}</Text>
        </HStack>
        <HStack alignItems={"center"} space={2}>
          <Feather name="book-open" size={24} color="black" />
          <Text>
            {" "}
            {item.opening_time}- {item.closing_time}
          </Text>
        </HStack>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
