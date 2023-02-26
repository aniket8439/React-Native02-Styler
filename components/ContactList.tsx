import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const Contacts = [
        {
            uid:1,
            name:'Aniket Sharma',
            status:'Love ❤️ Making Native Applications',
            imageUrl:'https://avatars.githubusercontent.com/u/84376990?v=4'
        },
        {
            uid:2,
            name:'Apoorv verma',
            status:'Doing Job as an iOS Developer',
            imageUrl:'https://media.licdn.com/dms/image/D4D03AQFSjc5duVfLfQ/profile-displayphoto-shrink_400_400/0/1673512468104?e=1683158400&v=beta&t=FIytdbKAX4f88sHphzFlPa6YZ0TBcgF_KcndJ1CgkC0'
            
        },
        {
            uid:3,
            name:'Yash Badoniya',
            status:'Looking for Internship in Android',
            imageUrl:'https://media.licdn.com/dms/image/C5603AQE18kgeqX6JAQ/profile-displayphoto-shrink_400_400/0/1647460475352?e=1683158400&v=beta&t=Dn0sYybDaaM6e1bRGnRkShiC1NqJIsy3g3jhyM_pZ7A'
            
        },
        {
            uid:4,
            name:'Arastu gupta',
            status:'Sekeking Knowlwege in all fields',
            imageUrl:'https://avatars.githubusercontent.com/u/101584387?v=4'
        }
    ];
  return (
    <View>
      <Text style={styles.headingText}>Contacts</Text>
      <ScrollView style={styles.Container}>
        {Contacts.map(({uid,name,status,imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image 
                source={{
                    uri : imageUrl
                }}
                style={styles.image}
                />
                <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.status}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight: "bold",
        padding: 8,
        marginLeft:8
    },
    Container: {
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard: {
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        marginBottom:8,
        backgroundColor:"#8D3DAF",
        padding:8,
        borderRadius:10
    },
    image: {
        height:60,
        width:60,
        borderRadius:60/2,
        marginRight:14
    },
    name: {
        fontSize:20,
        fontWeight:"bold",
        color:"#FFFFFF"
    },
    status: {
        color:"#E8BD0D"
    }
})