import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Heading, Text, View, ScrollView, FlatList } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Header from "../componets/Header";
import { Colorsss } from "../constants/Colorss";
import Categories from "../Data/Categories";
import { attractions } from "../Data/Attraction";
import PlaceCard from "../componets/PlaceCard";

const Home = () => {

  const [places,setPlaces]= useState(attractions)
  const [selcted,setSelected]=useState('All')
  useEffect(()=>{
    if(selcted==='All'){
        setPlaces(attractions)
    }else{
        const filterPlaces= attractions.filter((place)=>place.categories.includes(selcted))
        setPlaces(filterPlaces)
    }
},[selcted])
const navigation = useNavigation();
const [catergoriesList, setCatergoriesList] = useState([
"All",
...Categories,
]);
  return (
    <Box safeAreaX={5} safeAreaTop={12} flex={1}>
      <Header
        title={"Where Do"}
        size={"3xl"}
        wieght={"light"}
        color={Colorsss.hedaerTitle}
      />
      <Heading fontSize={"3xl"} color={Colorsss.hedaerTitle}>
        You Want To Go?
      </Heading>

      <View style={{gap:20}} mt={15}>
        <Header title={"Explore Atractions"} size={"xl"} />
        <ScrollView mt={5} horizontal showsHorizontalScrollIndicator={false}>
          {catergoriesList.map((item, index) => (
            <TouchableOpacity onPress={()=> setSelected(item)}  key={index} style={[ selcted=== item && styles.pressable,{paddingHorizontal:15}]}>
              <Text style={ selcted=== item && styles.text} fontSize={16}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Box mt={4}>
       <FlatList
       ListEmptyComponent={<Box justifyContent={'center'} alignItems={'center'}>
        <Text fontSize={'lg'}>Nothing to show</Text>
        </Box>}
       data={places}
       renderItem={(({item,index})=>(<PlaceCard item={item}/>))}
       keyExtractor={(item)=> item.id}
       numColumns={2}
       />
        </Box>
      </View>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({
  pressable: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  text: {
    fontWeight: "800",
  },
});
