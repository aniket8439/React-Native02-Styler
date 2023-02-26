import { StyleSheet, Text, View,Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.Card,styles.ElevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>Error Fixing in React-Native</Text>
        </View>
        <Image 
        source={{
            uri : 'https://images.pexels.com/photos/3747132/pexels-photo-3747132.jpeg?auto=compress&cs=tinysrgb&w=600'
        }}
        style={styles.image}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.text}>When you run npx react-native run-android command in the
             terminal, the command terminates by leaving a message in an android simulator.
              The message is as follows:
            </Text>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity
            onPress={()=> openWebsite('https://hecticprogramer.hashnode.dev/fix-for-react-native-bundling-errorunable-to-load-script')}
            >
                <Text style={styles.touch}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> openWebsite('https://www.instagram.com/aniket_sharma_8439/')}
            >
                <Text style={styles.link}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight: "bold",
        padding: 8,
        marginLeft:8
    },
    Card : {
        height: 340,
        width:370,
        marginHorizontal: 12,
        marginVertical:4,
        borderRadius:8
    },
    ElevatedCard: {
        backgroundColor:"#AF9D5A",
        elevation:3,
        shadowOffset : {
            width:1,
            height:1
        }
    },
    headingContainer: {
        padding:8,
        alignItems:"center"
    },
    headerText: {
        color:"#242B2E",
        fontSize:20,
        fontWeight:"bold"
    },
    image: {
        height:180
    },
    bodyContainer: {
        paddingHorizontal:12,
        marginTop:8
    },
    text:{
        color:"#000000",
        fontSize:16
    },
    touch:{
        color:"blue"
    },
    footer:{
        padding:8,
        flexDirection:"row",
        alignItems:"flex-end",
        justifyContent:"space-between"
    },
    link:{
        color:"#FFFFFF",
        backgroundColor:"red",
        padding:4,
        borderRadius:8
    }
})