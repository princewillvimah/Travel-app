import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Box } from "native-base";

const Mapscreen = ({ route }) => {
  const { item } = route?.params;
  return (
    <Box  safeAreaTop={0} style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: item?.coordinates.lat,
          longitude: item?.coordinates.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        <Marker
          coordinate={{
            latitude: item.coordinates.lat,
            longitude: item.coordinates.lon,
          }}
          title={item.city}
        />
      </MapView>
    </Box>
  );
};

export default Mapscreen;

const styles = StyleSheet.create({
    map:{
        width:'100%',
        height:'100%',
        borderRadius:50
    }
});
