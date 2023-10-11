import { StyleSheet } from "react-native"
import { Color } from "../../../constants"


export const styles = StyleSheet.create({

    // discover component start
    discover_container:{
        // backgroundColor:'red',
        padding:5,
        paddingHorizontal:15,
        justifyContent:'space-between',
        alignItems:'center',
        display:'flex',
        flexDirection:'row'
    },
    discover_text_container:{
        display:'flex',
        flexDirection:'column',
        // alignItems:'center',
        justifyContent:'center'

    },
    today_text:{
        fontSize:15,
        color:'grey',
    },
    discover_text:{
        fontSize:24,
        fontWeight:'bold',
        color:'#000'
    },
    discover_iconi_container:{
        display:"flex",
        flexDirection:"row",
        gap:6,
        alignItems:'center'
    },
   
    user_icon:{
        padding:5,
        backgroundColor: Color.whitemable,

        borderRadius:7
    },


    // discover component end



    // Search component start 
    search_container:{
        display:'flex',
        flexDirection:'row',
        marginHorizontal:15
    },
    search_left_iconContainer:{
        display:'flex',
        flexDirection:'row',
        gap:8,
        backgroundColor:Color.purewhite,
        paddingHorizontal:6,
        paddingVertical:6,
        // justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    },
    search_right_iconContainer:{
        marginLeft:'auto',
        paddingHorizontal:15,
        backgroundColor:Color.fashionblue,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
    },

    // search end here 

    // category start here 

    category_container:{
        display:'flex',
        flexDirection:'row',
        marginHorizontal:15,
        paddingVertical:10
    },
    category_card:{
        display:'flex',
        flexDirection:'row',
        gap:9,
        alignItems:'center',
        padding:5,
        paddingHorizontal:10,
        backgroundColor:Color.fashionblue,
        borderRadius:8,
        marginLeft:12
    },
    category_text:{
        fontSize:19,
        fontWeight:'400'
    },
 
       // category end here 

    //    view all event 

    view_all_container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:15
    },
    recomend_text:{
        fontWeight:'600',
        fontSize:18
        
    },
    view_all_text:{
        color:Color.bluebolt,
        fontWeight:'700'
    },
    // view all end here


    // card start here
    card_container:{
        marginHorizontal:15,
        padding:2,
        
      

    },
    card:{
        display:'flex',
        flexDirection:'column',
        gap:23
    },
    new_text_container:{
        padding:4,
        backgroundColor:Color.intensewhite,
        width:50,
        borderRadius:12,
        alignItems:'center'
        
    },
    new_text:{
        color:Color.germanblue
    },

    eventName_container:{
        display:'flex',
        flexDirection:'row',
        gap:6,
        width:330,
    
        alignItems:'flex-start'
    },
    event_name_date_container:{
        padding:3,
        backgroundColor:Color.romaticorange,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:7,
        borderRadius:12
    },
    event_name_text_container:{
        fontWeight:'600',
        fontSize:15
    },
    card_name_and_locaction_container:{
        display:'flex',
        flexDirection:'column',
        paddingHorizontal:3,
        gap:3
    },
    event_location_container:{
        display:'flex',
        flexDirection:'row',
        gap:1,
        paddingHorizontal:8,
        alignItems:'center'
    }




})