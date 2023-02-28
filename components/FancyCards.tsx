import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView horizontal={true} >
        <View style={[styles.Card,styles.cardElement]}>
            <Image 
            source = {{
                uri : 'https://images.pexels.com/photos/3581369/pexels-photo-3581369.jpeg?auto=compress&cs=tinysrgb&w=600'
            }}
            style={styles.image}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLabel}>  ~pink city, Jaipur</Text>
                <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
                 red and pink sandstone, it is on the edge of the City Palace.</Text>
                 <Text style={styles.cardFooter}>347.3 km away</Text>
            </View>
        </View>
        <View style={[styles.Card,styles.cardElement]}>
            <Image 
            source = {{
                uri : 'https://images.pexels.com/photos/4533747/pexels-photo-4533747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }}
            style={styles.image}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Ram Mandir</Text>
                <Text style={styles.cardLabel}>  ~Ayodhya, Uttar Pradesh</Text>
                <Text style={styles.cardDescription}>Ram Mandir is a Hindu temple that is being built in 
                Ayodhya, Uttar Pradesh, India, at the site of Ram Janmabhoomi.</Text>
                 <Text style={styles.cardFooter}>676.0 km away</Text>
            </View>
        </View>
        <View style={[styles.Card,styles.cardElement]}>
            <Image 
            source = {{
                uri : 'https://media.istockphoto.com/id/827065008/photo/holy-town-varanasi-and-the-river-ganges.jpg?b=1&s=612x612&w=0&k=20&c=8_UyWUK5V2Y5ODwwbVqjzeeuuSv0TV-Rpf1KF_O4mr8='
            }}
            style={styles.image}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Banaras</Text>
                <Text style={styles.cardLabel}>  ~Varanasi, Uttar Pradesh</Text>
                <Text style={styles.cardDescription}>Varanasi is a city on the Ganges river 
                that has a central place in the traditions of pilgrimage, death, and mourning in the Hindu world.</Text>
                 <Text style={styles.cardFooter}>855.0 km away</Text>
            </View>
        </View>
        <View style={[styles.Card,styles.cardElement]}>
            <Image 
            source = {{
                uri : 'https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg?auto=compress&cs=tinysrgb&w=600'
            }}
            style={styles.image}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Kedarnath</Text>
                <Text style={styles.cardLabel}>  ~Rudraprayag, Uttrakhand</Text>
                <Text style={styles.cardDescription}>Shri Kedarnath Temple, dedicated to
                 Lord Shiva, is the eleventh out of twelve Jyotirlingas of India.</Text>
                 <Text style={styles.cardFooter}>265 km away</Text>
            </View>
        </View>
      </ScrollView>

    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight: "bold",
        padding: 8,
        marginLeft:8
    },
    
    Card : {
        height: 400,
        width:370,
        marginHorizontal: 12,
        marginVertical:4,
        borderRadius:8
    },
    cardElement :{
        backgroundColor:"#FFFFFF",
        elevation:3,
        shadowOffset : {
            width:1,
            height:1
        }
    },
    image :{
        height:230,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        marginBottom:4
    },
    cardBody : {
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle : {
        color:"#0D0D0D",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:2
    },
    cardLabel : {
        color:"#758283",
        fontSize:16
    },
    cardDescription : {
        color:"#242B2E",
        marginTop:8,
        flexShrink:1,
        fontSize:16
    },
    cardFooter :{
        color:"blue",
        marginTop:12
    }
})