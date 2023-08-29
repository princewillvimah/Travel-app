import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box } from 'native-base'

const Gallery = ({route}) => {
    const {imagess}= route?.params
  return (
    <Box style={{marginHorizontal:20}} flex={1}>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={imagess}
      renderItem={({item})=>(
        <View style={{marginBottom:20,marginRight:10}}>
        <Image source={{uri:item}}
        style={{width:'100%',height:500, borderRadius:20}}
        />
       </View>
      )}
      />

    </Box>
  )
}

export default Gallery

const styles = StyleSheet.create({})