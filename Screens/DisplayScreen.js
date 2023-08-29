import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,ScrollView ,Share} from 'react-native'
import React from 'react'
import { Box, Button, HStack, Image, VStack } from 'native-base'
import { AntDesign } from '@expo/vector-icons'; 
import Details from '../componets/Details';
import MapView, { Marker } from 'react-native-maps';


const DisplayScreen = ({route,navigation}) => {
  const handleMap=()=>{
    navigation.navigate('map',{item})
  }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `copy Vimah's wondderful image ${MainImage}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
    const {item}=route?.params
    console.log(item)
    const MainImage=item?.images[0]
    const hnadleImage=()=>{
      navigation.navigate('Gallery',{imagess:item?.images})
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:20,marginTop:40,marginVertical:10,paddingBottom:20}}>
 
    
    <TouchableOpacity onPress={hnadleImage} style={styles.imgcon}>
    <ImageBackground  source={{uri:MainImage}} style={styles.img}>
      <HStack mt={2} mx={1} justifyContent={'space-between'}>
      <TouchableOpacity onPress={()=> navigation.goBack()}  style={{backgroundColor:'#fff', borderRadius:50,padding:10}}>
      <AntDesign name="arrowleft" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onShare} style={{backgroundColor:'#fff', borderRadius:50,padding:10}}>
      <AntDesign name="sharealt" size={24} color="#000" />
      </TouchableOpacity>
      </HStack>
     <HStack justifyContent={'center'} px={5} rounded={'sm'} space={3} py={3} mb={2} backgroundColor={'#ccc'} padding={4}>
      {item.images.map((images,index)=>(<Image alt='img' key={index} 
      source={{uri:images}} style={styles.MiniImage} h={'50px' } w={'50px'}/>))}
     </HStack>
  </ImageBackground>

  </TouchableOpacity>
  <Details item={item}/>
  <MapView
  initialRegion={{
    latitude: item?.coordinates.lat,
    longitude: item?.coordinates.lon,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  style={styles.map}
>
<Marker coordinate={{
  latitude: item.coordinates.lat,
  longitude: item.coordinates.lon,

}}
title={item.city}
/>

</MapView>
<Button onPress={handleMap}>Click here to View map in full screen</Button>

  </ScrollView>
  )
}

export default DisplayScreen

const styles = StyleSheet.create({
  img:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
    borderRadius:10,
    justifyContent:'space-between',
    overflow:'hidden'

  },
  imgcon:{
    borderRadius:20,
    overflow:'hidden',
    height:400
  },
  MiniImage:{
    height:50,
    width:50,
    resizeMode:'contain'
  },
  
  map:{
    width:'100%',
    height:500,
    borderRadius:50
}
})