import { StyleSheet, } from 'react-native'
import React from 'react'
import { Box,Heading,Text } from 'native-base'
import { Colorsss } from '../constants/Colorss'

const Header = ({title,color,wieght,size}) => {
  return (
   <Heading fontWeight={wieght} fontSize={size} color={color}>{title}</Heading>
  )
}

export default Header

const styles = StyleSheet.create({})