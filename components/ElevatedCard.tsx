import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style = {styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>Slide</Text>
        </View>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>More...</Text>
        </View>
        <View style={[styles.Card,styles.cardElevated]}>
            <Text>😎</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCard

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight: "bold",
        padding: 8,
        marginLeft:8
    },
    container : {
        
        padding:8
    },
    Card : {
        flex:1,
        width:100,
        height:100,
        marginHorizontal:8,
        alignItems:"center",
        justifyContent:"center",
        padding:8,
        fontWeight:"bold",
        borderRadius:8
    },
    cardElevated : {
        backgroundColor:"#d0d5d8"
    }
})