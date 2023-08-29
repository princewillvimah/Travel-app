import { StyleSheet, Dimensions,TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { Colorsss } from '../constants/Colorss'
import { Heading, Image ,Text,View,HStack} from 'native-base'
import Header from './Header'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
const {width}=Dimensions.get('window')
const PlaceCard = ({item}) => {
    const navigation=useNavigation();
 const handleNav=()=>{
 navigation.navigate('display',{item})
 }
   const imgurl= item?.images[0];
  return (
    <TouchableOpacity onPress={handleNav} style={styles.container}>
    <Image alt='img' source={{uri:imgurl}} style={styles.img} mb={3}/>
    <Header size={'md'} title={item.name}/>
    <HStack mt={2} alignItems={'center'}>
    <Entypo name="map" size={14} color="black" />
    <Text style={{marginLeft:4}}>{item.city}</Text>
    </HStack>
    </TouchableOpacity>
  )
}

export default PlaceCard

const styles = StyleSheet.create({
    container:{
        width:'50%',
        height:250,
        borderWidth:1,
        borderColor:Colorsss.borderColor,
        borderRadius:20,
        padding:3,
        marginRight:10,
        marginBottom:10
    },
    img:{
        width:'100%',
        height:'70%',
        borderRadius:20
    }
})