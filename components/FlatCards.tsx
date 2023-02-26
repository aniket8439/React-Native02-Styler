import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const FlatCards = () => {
  return (
    <View>
        <ScrollView>
      <Text style = {styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.Card,styles.cardcolor]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.Card,styles.cardcolor1]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.Card,styles.cardcolor2]}>
            <Text>Blue</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight: "bold",
        padding: 8,
        marginLeft:8
    },
    container : {
        flex:1,
        margin:8,
        flexDirection:"row"
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
    cardcolor : {
        backgroundColor:"#ff334c"
    },
    cardcolor1 : {
        backgroundColor:"#5ccc00"
    },
    cardcolor2 : {
        backgroundColor:"#00a0ff"
    }

})