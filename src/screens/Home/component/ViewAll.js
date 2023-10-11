import {  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './Style'

export const ViewAll = () => {
  return (
    <View style={styles.view_all_container}>
      <Text style={styles.recomend_text}>Recommended Events</Text>
      <TouchableOpacity>
      <Text style={styles.view_all_text}>View All</Text>
      </TouchableOpacity>
    </View>
  )
}



