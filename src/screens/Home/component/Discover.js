import { SafeAreaView,  Text, View } from 'react-native'
import React from 'react'

import { styles } from './Style'

import { Ionicons,FontAwesome5 } from '@expo/vector-icons';

export  const Discover = () => {
  return (
    <SafeAreaView style={styles.discover_container}>
      <View style={styles.discover_text_container}>
        <Text style={styles.today_text}>Today 29 sept.. 2023</Text>
        <Text style={styles.discover_text}>Discover Events</Text>
      </View>
      <View style={styles.discover_iconi_container}>
            <Ionicons name="ios-notifications-sharp" size={19} color="black" />
            <View style={styles.user_icon}>
            <FontAwesome5 name="user-alt" size={23} color="black" />
            </View>

      </View>
    </SafeAreaView>
  )
}



