import {  ScrollView, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { FontAwesome ,MaterialCommunityIcons,Entypo} from '@expo/vector-icons';
import { Color } from '../../../constants';
const Categories = () => {
  return (
        <View style={styles.category_container}>
        <ScrollView 
                style={styles.scroll_card}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >


      <View style={styles.category_card}>
      <FontAwesome name="tasks" size={24} color="white" />
      <Text style={styles.category_text}>All</Text>
      </View>

      <View style={styles.category_card}>
      <FontAwesome name="birthday-cake" size={24} color={Color.romaticorange} />
      <Text style={styles.category_text}>Birthday</Text>
      </View>

      <View style={styles.category_card}>
      <MaterialCommunityIcons name="party-popper" size={24} color={Color.freshwhite} />
      <Text style={styles.category_text}>Party</Text>
      </View>

      <View style={styles.category_card}>
      <Entypo name="graduation-cap" size={24} color="black" />
      <Text style={styles.category_text}>Graduation</Text>
      </View>

      <View style={styles.category_card}>
      <FontAwesome name="tasks" size={24} color="white" />
      <Text style={styles.category_text}>All</Text>
      </View>
     
    </ScrollView>
        </View>
  )
}

export default Categories

