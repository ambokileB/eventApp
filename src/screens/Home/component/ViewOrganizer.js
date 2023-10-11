import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Style'

export const ViewOrganizer = () => {
  return (
    <View style={styles.view_all_container}>
      <Text style={styles.recomend_text}>Popular Organizer</Text>
      <TouchableOpacity>
      <Text style={styles.view_all_text}>View All</Text>
      </TouchableOpacity>
    </View>
  )
}



