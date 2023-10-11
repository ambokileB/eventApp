import {  Text, View,TextInput } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { MaterialIcons,Foundation } from '@expo/vector-icons';



export const Search = () => {
  return (
    <View style={styles.search_container}>
      <View style={styles.search_left_iconContainer}>
      <MaterialIcons name="search" size={24} color="black" />
        <TextInput
            keyboardType='text'
            placeholder='Search here ...'
            style={{
                width:260,
                padding:4,

            }}
        />
      </View>

      <View style={styles.search_right_iconContainer}>
      <Foundation name="social-yelp" size={24} color="white" />
      </View>
      <View>

      </View>
    </View>
  )
}

