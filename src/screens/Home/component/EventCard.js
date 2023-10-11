import {  ImageBackground, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { Entypo } from '@expo/vector-icons';

export const EventCard = () => {
  return (
    <View style={styles.card_container}>
        <View style={styles.card}>
           
            <ImageBackground 
                source={require("../../../../assets/images/undraw.png")}
                style={{
                    height:200
                }}
                >
                <View style={styles.new_text_container}>
                <Text style={styles.new_text}>New</Text>
                </View>
            </ImageBackground>

            <View style={styles.eventName_container}>
                <View style={styles.event_name_date_container}>
                    <Text>29</Text>
                    <Text>May</Text>
                </View>
                <View style={styles.card_name_and_locaction_container}>
                <Text style={styles.event_name_text_container}>The virtual Tour 2023 The virtual Tour 2023 The virtual Tour 2023The virtual Tour 2023</Text>
                <View style={styles.event_location_container}>
                <Entypo name="location-pin" size={24} color="black" />
                <Text>Area C</Text>
                </View>
                </View>
            </View>

        </View>
    
    </View>
  )
}


