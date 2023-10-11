import { SafeAreaView, ScrollView, View,StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Discover } from './component/Discover'
import { Search } from './component/Search'
import { Color } from '../../constants'
import Categories from './component/Categories'
import { ViewAll } from './component/ViewAll'
import { EventCard } from './component/EventCard'
import { ViewOrganizer } from './component/ViewOrganizer'
import { OrganizerCard } from './component/OrganizeCard'
const data = [
  {
    id:1,
    name:"one"
  },
  {
    id:2,
    name:"one"
  },
  {
    id:3,
    name:"one"
  },
  {
    id:4,
    name:"one"
  }
]

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Discover/>
      <Search/>
      <Categories/>
      <ViewAll/>
      {/* <EventCard/> */}

      <View style={{
        height:320
      }}>

<FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={(item)=> <EventCard item={item} />}
        ListHeaderComponent={
          <>

          
          </>
        }
      />

      </View>
      <ViewOrganizer/>
      <OrganizerCard/>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        flexGrow:1,
        backgroundColor:Color.whitemable,
        gap:12
    }

})